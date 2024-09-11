"use client"
import { useState } from "react"


const DashboardPage = () => {
    const [ state, setState] = useState("");
    console.log("Dashboard Page");
    
  return (
    <div>
        <h1>Dashboard Page</h1>
        <input type="text" value={state} onChange={(event) => setState(event.target.value)}/>
        <p>Hello, {state}!</p>
    </div>
  )
}

export default DashboardPage