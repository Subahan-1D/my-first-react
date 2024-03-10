import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './todo'
import Actor from './Actor'
import Singer from './Singer'
function App() {
  const actor = ['Sakib All Hasan', 'Taskin Ahamed', 'Tamin Ekbal', 'Shoriful islam', 'Riyad']

  const singers = [
    {id:1,name:'Rasel',age:18},
    {id:2,name:'Miraz',age:28},
    {id:3,name:'Kobir',age:38},
    {id:4,name:'Nasim',age:58}
  ]
  return (
    <>
      <h3>Vite + React</h3>
      {
        singers.map(singers => <Singer singer={singers} ></Singer>)
      }
      
      <Actor name="Subahan Islam"></Actor>
      <Actor name="Rasel Islam"></Actor>
      <Actor name="Sultan Islam"></Actor>


      {
        actor.map(actor => <Actor name={actor}></Actor>)
      }

      <Device name="leptop" price = "55k"></Device>
      <Device name="leptop" price = "55k"></Device>
      <Device name="leptop" price = "55k"></Device>
      <Person></Person>
      <Student name="Subahan Islam "  grade ="7" age ="16"></Student>
      <Student name="Subahan Islam " grade ="8" age ="17"></Student>
      <Student name="Subahan Islam " grade ="9" age ="18"></Student>
      <Student name="Subahan Islam " grade ="9" age ="18"></Student>
      <Todo task ="Learn React"isDone ={true}></Todo>
      <Todo task ="Explore React Concepts"isDone={false}></Todo>
      <Todo task ="Try Jsx"isDone ={true}></Todo>

    </>
  )
}
function Device(props) {
  console.log(props)
  return <h2>This Device :{props.name}, price :{props.price}</h2>
}

function Person() {
  const name = 'subahan'
  return <h1>i am a student. my name is {name} </h1>
}
const { name, grade, age } = { name: 'Subahan Islam', grade: '7', age: '16' };

function Student({ name, grade, age }) {
  console.log(grade, age);
  return (
    <div className='student'>
      <h1>Name :{name}</h1>
      <h1>Grade :{grade}</h1>
      <h1>Score : {age}</h1>
    </div>
  )
}

export default App
