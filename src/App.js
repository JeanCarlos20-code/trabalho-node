import React from 'react'
import { createMuiTheme, responsiveFontSizes, MuiThemeProvider } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'

function app() {
  const Dark = true
  const tipoPallet = Dark ? 'dark' : 'light'
  const corPrimaria = Dark ? '#673AB7': '#795548'
  const corSecundaria = Dark ? '#512DA8' : '#5D4037'

  let theme = createMuiTheme ({
    palette: {
      type: tipoPallet,
      primary: {
        main : corPrimaria
      },
      secondary: {main : corSecundaria}
    }
  })
  theme = responsiveFontSizes(theme)

  return(
    <MuiThemeProvider theme = {theme}>
      <CssBaseline/>
    </MuiThemeProvider>
  )
}

export default app
