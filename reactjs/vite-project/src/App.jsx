import { useCallback, useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './components/About'
import Contact from './components/contact'

function App() {
  const [count, setCount] = useState(0)
  const [theme, settTheme] = useState(1)
  //  const cNumber = useMemo(()=>{
  //    return  hello(count) 
  //  },[count])


  const CallBackFunc = useCallback(()=>{
    return count + 100
   },[count])
  
   
  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>Click Me</button>
      <button onClick={() => settTheme((theme)=>theme + 1)}>Theme Me</button>

      <p>{count}</p>
      <About/>
      <Contact num={CallBackFunc}/>
    </>
  )
}

export default App

function hello(numb){
  console.log(numb,"hello");
  
   const m = numb * numb
   return m
}
