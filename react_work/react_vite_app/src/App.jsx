// eslint-disable-next-line no-unused-vars
import React from 'react'
import Student from './Student'
import logo from "./assets/logo.jpg"

function App() {
  let a = 12
  const myStyle = {
    backgroundColor: "black"
  }

  const myStyle2 = {
    color: "red",
    backgroundColor: "black", 
    padding: "10px 20px",
    width: "fit-content"
    
  }

  const studentData = [
    {
     college:"ABES Engineering College",
     roll :'2',
     name :'aayush',
     branch:"cse-a",
     section:'a',
     pic : logo
    
    },
    {
      college:"ABES Engineering College",
      roll :'3',
      name :'abhishek',
      branch:"cse-a",
      section:'c',
      pic : logo
     
     },
     {
      college:"GL Engineering College",
      roll :'3',
      name :'aryan',
      branch:"cse-a",
      section:'b',
      pic : logo
     
     }
  ]
    
  


  return (
    <>
      {/* <div style={myStyle2}>Abes Engineering college
        <div style={myStyle}>{a}</div>
      </div> */}

      {/* <div style={{backgroundColor: "cyan"}}>
        <Student college="Abes Engineering College" 
        pic={<img src={logo} height={100} width={100}/>}
        roll='2' name='AAYUSH' branch='CSE' section="A"/>
      </div> */}
      
      
      <div style={{backgroundColor: "cyan", display :"flex"}}>
      <Student data = {studentData[0]}/>
      <Student data = {studentData[1]}/>
      <Student data = {studentData[2]}/>
      </div>

     


    </>
  )
}

export default App