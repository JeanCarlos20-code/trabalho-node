// cSpell:Ignore descricao
import React, { useEffect, useState } from 'react'
import { Grid, Typography, TextField, FormControl, 
         InputLabel, Select, MenuItem, Button, Paper } from '@material-ui/core'

import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, } from '@material-ui/core'

import SaveIcon from '@material-ui/icons/Save'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'

import Menu from '../Copyright'

export default function Carros(){
    const [carros, setCarros] = useState([])
    const valorInicial = {cod: '', cor:'', placa:'', modelo:'',combustivel:''}
    const [carro, setCarro] = useState(valorInicial) //hook
    const [editando, setEditando] = useState(false)

    useEffect(() => {
        let dados = JSON.parse(localStorage.getItem('carros'))
        setCarros(dados)
    },[])    

    useEffect(() => {
        function salvaDados(){
            localStorage.setItem('carros', JSON.stringify(carros))
        }
    salvaDados()
    },[carros])

    
    const mudaAtributo = event => {
        const { name, value} = event.target
        setCarro({...carro, [name]: value})
    }






    const apagaRegistro = cod =>{
        let index  = carros.map((carro) => carro.cod).indexOf(cod)
        if(index > -1 ){
            carros.splice(index, 1)
            setCarros(carros.filter(carro => carro.cod !== cod))
        }

    }

    function salvaRegistro(event) {
        event.preventDefault() //Não recarrega a página
        if(editando){apagaRegistro(carro.cod)}

        setCarro({cod: carro.cod, cor: carro.cor,
                   placa: carro.placa, modelo: carro.modelo, combustivel: carro.combustivel })
        setCarros([...carros, carro])
        setCarro(valorInicial) // limpa os campos   
        setEditando(false)        
    }


    return(
        <>
        <Menu />
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <form onSubmit={salvaRegistro}>
                    <Typography component="h1" align="center">
                        Cadastro de Carros
                    </Typography>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required  fullWidth
                        type="number" id="cod" name="cod"
                        label="Fabricante do modelo" autoFocus
                        value={carro.cod}
                        onChange={mudaAtributo}
                        disabled={editando}
                        />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required fullWidth
                        type="text" id="cor" name="cor"
                        label="Cor do Carro"
                        value={carro.cor}    
                        onChange={mudaAtributo}
                        />
                    <FormControl fullWidth={true}>
                        <InputLabel id="combustivel">Combustível usado</InputLabel>
                        <Select
                            labelId="combustivel"
                            id="combustivel"
                            value={carro.combustivel}
                            required
                            onChange={e => setCarro({...carro, combustivel: e.target.value})}
                            >
                                <MenuItem value="gasolina">Gasolina</MenuItem>
                                <MenuItem value="alcool">Álcool</MenuItem>
                                <MenuItem value="diesel">Diesel</MenuItem>
                                <MenuItem value="flex">Flex</MenuItem>
                                <MenuItem value="eletrico">Elétrico</MenuItem>
                            </Select>
                    </FormControl>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required fullWidth
                        type="text" id="modelo" name="modelo"
                        label="Modelo do Carro"
                        value={carro.modelo}    
                        onChange={mudaAtributo}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        required fullWidth
                        type="text" id="placa" name="placa"
                        label="Placa do Carro"
                        value={carro.placa}    
                        onChange={mudaAtributo}
                        />
                    <Button type="submit"
                            variant="contained"
                            color="primary">
                             <SaveIcon /> Salvar</Button>    
                </form>
            </Grid>
            <Grid item xs={12} md={6}>
                <TableContainer component= {Paper}>
                    <Table aria-label="Tabela carros">
                        <TableHead>
                            <TableRow>
                                <TableCell>Código</TableCell>
                                <TableCell>Cor</TableCell>
                                <TableCell>Placa</TableCell>
                                <TableCell>Combustível</TableCell>
                                <TableCell align="right">Modelo</TableCell>
                                <TableCell>Opções</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {carros.map((c) =>(
                                <TableRow key={c.cod}>
                                
                                <TableCell>{c.cod}</TableCell>
                                <TableCell>{c.cor}</TableCell>
                                <TableCell>{c.placa}</TableCell>
                                <TableCell>{c.combustivel}</TableCell>
                                <TableCell align="right">{c.modelo}</TableCell>
                                <TableCell>
                                    

                                    <Button startIcon={<EditIcon/>}
                                    onClick={()=> {
                                        setCarro(c)
                                        setEditando(true)
                                    }}
                                    variant="outlined" color="primary">
                                        Editar
                                    </Button>

                                    <Button startIcon={<DeleteIcon/>}
                                    
                                        onClick={()=> apagaRegistro(c.cod)}
                                    variant="outlined" color="secondary"> 
                                        Apagar
                                    </Button>



                                </TableCell>

                                </TableRow>

                            ))}
                        </TableBody>

                    </Table>
                    </TableContainer>

            </Grid>
        </Grid>
        </>
    )
}