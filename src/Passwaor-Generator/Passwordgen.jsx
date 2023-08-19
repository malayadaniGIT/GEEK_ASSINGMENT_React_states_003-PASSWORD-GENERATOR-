import React from 'react'
import "./style.css"
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

const lowercaseList='abcdefghijklmnopqrstuvwxyz';
const UppercaseList='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbersList='0123456789';
const symbolList="!@#$%^&*()?"

function Passwordgen() {
    const[password,setPassword]=useState("")
    const[uppercase,setUppercase]=useState(true)
    const[lowercase,setLowercase]=useState(true)
    const[number,setNumber]=useState(true)
    const[symbol,setSymbol]=useState(true)
    const[passwordlength,setPasswordlength]=useState(8)

    const generatepassword=()=>{
        let characterList=''
        if(lowercase){
            characterList +=lowercaseList
        }
        if(uppercase){
            characterList +=UppercaseList
        }
        if(number){
            characterList +=numbersList
        }
        if(symbol){
            characterList +=symbolList
        }
        let tempPassword=''
        const characterListLength=characterList.length;

        for(let i=0;i<passwordlength;i++){
            const characterIdex=(Math.random()*characterListLength)
            tempPassword+=characterList.charAt(characterIdex)
           
        }
      setPassword(tempPassword)
      toast.success('🦄 New Password Generated', {
      position: "top-center",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
});
    }

    const copypassword=()=>{
        // const copiedText=await navigator.clipboard.readText();
        if(password.length  ){
            navigator.clipboard.writeText(password)
            toast.success('Password Copied To Clipboard', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
});        }
    }
  return (
    <>
    <div className='container'>
      <h1>Password Generator</h1>
      <div className='inputarea'>
      <input type="text" id='text' value={password}/>
      <button className='copy' onClick={copypassword}>Copy</button>
      </div>
      <p>Select Password Length
      <input type="number" name="" id="" 
        defaultValue={passwordlength} 
      max="30" min="8" 
      onChange={(event)=>setPasswordlength(event.currentTarget.value)}/>
      </p>
      <div className='select-type'>
      <label ><input id="uppercase" type="checkbox" name="Upper" checked={uppercase} onChange={()=>setUppercase(!uppercase)}  />Include Uppercase letters(A-Z)</label>
      <label ><input id="lowercase" type="checkbox" name="Lower" checked={lowercase} onChange={()=>setLowercase(!lowercase)}  />Include Lowercase letters(a-z)</label>
      <label ><input id="number" type="checkbox" name="Number" checked={number} onChange={()=>setNumber(!number)}  />Include Numbers(0-9)</label>
      <label ><input id="symbol" type="checkbox" name="Symbol" checked={symbol} onChange={()=>setSymbol(!symbol)}  />Include Symbols(&-#)</label>
      </div>
      <button id="btn" onClick={generatepassword}>Generate Password</button>
    </div>
    <ToastContainer/>
    </>
  )
}

export default Passwordgen
