import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Singer from './Singer'


function App() {
  const actors = ['Sakib', 'Shoriful Raz', 'Jashim', 'Rubel', 'Salman Shah'];

  const singers = [
    {id: 1, name: 'Dr. Mahfuzur Rahman', age:68},
    {id: 2, name: 'Eva Rahman', age:38},
    {id: 3, name: 'Shuvro Dev', age:88},
    {id: 4, name: 'Pritom', age:28},
  ]

  return (
    <>
      <h1>Vite + React</h1>
      
      {
        singers.map(singer => <singer singer= {singer}></singer>)
      }
      
      
      <Actor name={"Bappa raz"}></Actor>{
        actors.map(actor => <Actor></Actor>)
      }



      {/* <Todo task="Learn React" isDone={true}> </Todo>
      <Todo task="Core concept " isDone={false}> </Todo>
      <Todo task="Try JSX" isDone={true}> </Todo> */}
     {/* <Devicce name = "Laptop"></Devicce>
     <Devicce name = "Mobile"></Devicce>
     <Devicce name = "Watch"></Devicce>
     <Person></Person>
     <Person></Person>
     <Person></Person>
     <Student grade='7' score='9'></Student>
     <Student></Student>
     <Student></Student> */}
      
    </>
  )
}

function Devicce(props){
  console.log(props);
  return <h2>This is device: {props.name} </h2>
}

function Person(){
  const age = 66;
  const money = 20;
  const person = {
    name: 'Naeem',
    age : 24,
    address: 'Khulna'
  }
  return <h3>I am {person.name} and my age is {age+money} </h3>
}

const {grade, score} = {grade: '7' , score: '10'}

function Student({grade, score}) {
  console.log(grade,score);
  return(
    <div className='student'>
      <p> My Name is Farjana </p>
      <p> Age: {grade} </p> 
      <p>Student: {score} </p>
    </div>

  )
}

export default App
