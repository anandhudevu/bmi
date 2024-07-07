import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function App() {
  const[weight,changeWeight]=useState(0)
  const[height,changeHeight]=useState(0)
  const[result,changeResult]=useState(0)
  const[isWeight,changeIsWeight]=useState(true)
  const[isHeight,changeIsHeight]=useState(true)


  const check=(e)=>{
    const name=e.target.name
    const value=e.target.value
    //console.log(name,value);
    if(!!value.match(/^[0-9.]*$/)){
      if(name=='weight'){
        changeWeight(value)
        changeIsWeight(true)
      }else{
        changeHeight(value)
        changeIsHeight(true)
      }
    }else{
      if(name=='weight'){
        changeIsWeight(false)
        changeWeight(value)
      }else{
        changeIsHeight(false)
        changeHeight(value)
      }
    }
  }
  const handleReset=()=>{
    changeWeight(0)
    changeHeight(0)

    changeResult(0)
  
    changeIsWeight(true)
    changeIsHeight(true)
  }

  const calculate=(e)=>{
    e.preventDefault()
    if(weight==''||height==''){
      
      alert('Please enter the value')
      
    }else{
      changeResult(weight/(height*height))
      
    }
  }

 

  

  return (
    <>
      <div style={{backgroundImage:'url(https://img.freepik.com/free-vector/medical-healthcare-blue-color_1017-26807.jpg)',backgroundRepeat:'no-repeat',backgroundSize:'cover',height:'100vh'}} className='d-flex justify-content-center align-items-center'>
        <div style={{backgroundColor:'lightblue',width:'300px'}} className='p-4 rounded'>
          <h1 className='text-center'>BMI</h1>
          <p>Units</p>
          <div>
            <form className='mt-3'>
              <div className="mb-3">
              <TextField id="standard-basic" label="Weight in kg" value={weight ||""} name='weight' onChange={(e)=>check(e)} variant="standard" />
                {!isWeight &&
                  <p className='text-danger'>*Invalid input</p>}
              </div>
              <div className="mb-3">
              <TextField id="standard-basic" label="Height in m" value={height ||""} name='height' onChange={(e)=>check(e)} variant="standard" />
              {!isHeight &&
                  <p className='text-danger'>*Invalid input</p>}
              </div>
              
              <div className="mb-3 d-flex">
              <Button variant="contained"type='submit' color='success'disabled={isHeight && isWeight?false:true}onClick={calculate} >Submit</Button>
              <Button variant="contained" className='ms-auto' onClick={handleReset} >Reset</Button>
              
              </div>
              <div className="mb-3">
                <h2 className='text-center'>Results</h2>
              </div>
              <div className='mb-3'>
              <p className='text-center' >{result}</p>
              <p id='bmi-result'></p>
              </div>
            
            </form>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
