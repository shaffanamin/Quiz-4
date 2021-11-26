import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuAppBar from './component/header.jsx';
import Grid from '@mui/material/Grid';
import * as React from 'react';
// import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';
import swal from 'sweetalert';

function App() {
  // const
  const [optCount, setoptCount] = useState(0)
  const [name, setName] = useState('')
  const [counter, setcounter] = useState(0)
  const [marks, setMarks] = useState(0)
  const [state, setstate] = useState([
    {
      question: 'What does CSS stand for?',
      options: ['Cascading Style Sheets', ' Colorful Style Sheets', ' Computer Style Sheets', ' Creative Style Sheets'],
      answer: 'Cascading Style Sheets'
    },
    {
      question: 'What does HTML stand for?',
      options: ['HTML', ' HTMLS', ' HTMLR', ' HTMLC'],
      answer: 'HTML'
    },
    {
      question: 'What does JS stand for?',
      options: ['JS', ' JST', ' JSX', ' JSF'],
      answer: 'JS'
    },
    {
      question: 'What does REACT stand for?',
      options: ['REACT', ' POUG', ' PYEWA', ' DCTW'],
      answer: 'REACT'
    },
    {
      question: 'What does kite stand for?',
      options: ['kote', ' POUG', ' PYEWA', ' DCTW'],
      answer: 'kote'
    }
  ])
  const [userAnswer, setuserAnswer] = useState('')

  return (
    <div className="App" style={{ backgroundColor: 'black', color: 'white', }}>
      <MenuAppBar />

      <Grid container spacing={2}>
        <Grid item xs={12} style={{ margin: 20 }}>
          <h4 className='py-5'>
            {state[counter].question}
          </h4>
        </Grid>
      </Grid>


      <Grid container spacing={2}>
        {state[counter].options.map((item) => {
          return (
            <Grid item xs={6}>

              <Button variant="contained"  value={item} className='py-4' onClick={(e) => {

                if (counter != 4) {
                  setcounter(counter + 1)
                  if(e.target.value == state[counter].answer){
                    console.log('Right')
                    setMarks(marks + 10)
                    console.log(marks)
                  }
                  else{
                    console.log('Wrong')
                  }
                }
                else if (counter == 4) {
                  if(e.target.value == state[counter].answer){
                    console.log('Right')
                    setMarks(marks + 10)
                    console.log(marks)
                  }
                  else{
                    console.log('Wrong')
                  }
                  swal({
                    text: "You have got " + marks + " marks",
                    icon: "success",
                    button: "Click to restart the Quiz!",
                  });
                  setMarks(0)
                  setcounter(0)
                }
                else {
                  console.log('error')
                }

                setuserAnswer(e.target.value)
                console.log('targetvalue :',e.target.value)
                console.log('User Anser',userAnswer)

                

              }}>
                {item}

              </Button>
              <div className='p-5'>

              </div>
            </Grid>
          )
        })}
      </Grid>




    </div>
  );
}

export default App;
