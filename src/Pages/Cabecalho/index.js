import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import Label from '@material-ui/core/InputLabel'
import { makeStyles } from '@material-ui/core/styles'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme)=> ({
    toolbarTitle: {
        flex: 1
    },
    toolbarSecundaria:{
        justifyContent: 'space-between'
    },
    toolbarLink: {
        padding: theme.spacing(1)
    }
}))

const Cabecalho = () => {
    const titulo = 'Comércio de Carros'
    const classes = useStyles()
    const history = useHistory()

    return (
        <>
            <AppBar position="relative">
                <Toolbar>
                    <Typography
                        component="h1"
                        color="inherit"
                        align="center"
                        noWrap
                        className={classes.toolbarTitle}
                    ></Typography>
                    <Button variant="contained"
                            color="secondary"
                            size="small"
                            href="#/login">
                                Entrar / Sair
                    </Button>                    
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Cabecalho