import { useState } from 'react'
import './App.css'

const App = () => {

  const name = 'Peter Parker'
  const age = 26
  const friends = [
    { name: 'Peter', age: 4 },
    { name: 'Maya', age: 10 },
  ]


  return (
      <>
        <h1>Greetings</h1>
        <Hello name="Tiger" age={24} />
        <Hello name={name} age={age} />
        <Hello name={friends[0].name} age={friends[0].age} />
        <Hello name={friends[1].name} age={friends[1].age} />
      </>
  )
}

const Hello = (props) => {
  return (
      <p>Hello {props.name}! You are {props.age} years old.</p>
  )
}

export default App
