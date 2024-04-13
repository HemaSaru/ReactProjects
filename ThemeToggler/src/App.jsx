import { useEffect, useState } from 'react'
import ThemeButton from './Components/ThemeButton'
import Card from './Components/Card'
import { ThemeProvider } from '../Context/ThemeContext'

function App() {
  const [theme, setTheme] = useState("light")
  
  const lightTheme = ()=>{
    setTheme("light");
  }

  const darkTheme = ()=>{
    setTheme("dark");
  }

  useEffect(()=>{
    document.querySelector('html').classList.remove("light", "dark");
    document.querySelector('html').classList.add(theme);
  },[theme])

  return (
    <>
    <ThemeProvider value={{theme, lightTheme, darkTheme}}>
    <div className="flex justify-center bg-slate-50 dark:bg-slate-950 " >
        <div className="flex flex-wrap min-h-screen items-center px-10w-[500px]">
          <div className="w-full">
            <div className="w-full mx-auto flex mb-8">
              <ThemeButton />
            </div>
            <div className="w-full mx-auto">
              <Card />
            </div>
          </div>
        </div>
      </div>
      </ThemeProvider>
    </>
  );
}

export default App;
