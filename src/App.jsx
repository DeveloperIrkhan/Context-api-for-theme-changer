import { useEffect, useState } from 'react'
import './App.css'
import Card from './Components/Card'
import { ThemeProvider } from './Contexts/ThemeContext'
import Button from './Components/Button'

function App() {
  const [themeMode, setThemeMode] = useState("light")
  //now actual change in theme
  useEffect(() => {
    document.querySelector('html').classList.remove('light', 'dark');
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode]);

  //now these method have no functionality 
  //in context here we can make them functional

  const darkTheme = () => {
    setThemeMode('dark')
  }
  const lightTheme = () => {
    setThemeMode('light')
  }

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <Button />
          </div>

          <div className="w-full max-w-sm mx-auto">
            {/* Component */}
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
