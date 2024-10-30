import React from 'react'
import Navbar from './Components/Navbar'
import Form from './Components/Form'
import './App.css'

function App() {

  return (
    <div className="App">
      <div style={{position: 'absolute', top: '0px',left: '0px', width: '100%'}}>
        <Navbar />
      </div>
      <div style={{border: '1px solid red', padding: '10px'}}>
        <Form />
      </div>
    </div>
  )
}

export default App 
