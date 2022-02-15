import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './styles/theme'
import GlobalStyles from './styles/globalStyles'

function App (){
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <div className="container">
        <GlobalStyles />
        <h1>Sign up to my newsletter</h1>
        <input type="email" value="my@email.com"></input>
        <button className="accent" 
          onClick={() => setIsDarkTheme(!isDarkTheme)}>
          Sign up
        </button>
      </div >
    </ThemeProvider>
  )
}

export default App;