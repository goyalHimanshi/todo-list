import React from 'react'
import Appname from './components/Appname';
import Apptodo from './components/Apptodo';
//import Todoitems from './components/Todoitems';
import './App.css'
import Clock from './components/Clock';
import Clocktime from './Clocktime';
import 'bootstrap/dist/css/bootstrap.min.css'
import Mapfunc from './components/Mapfunc';
import Checkfood from './components/Checkfood';
import Emptyfood from './components/Emptyfood';
import TodoItem from './components/TodoItem';
import Container from './components/Container';

export default function App() {
  const food = ['dal', 'sabzi', 'vegitable', 'Milk'];
  const todoItems = [{
    text: 'miky',
    date: '2 / 12 / 2089'

  },
  {
    text: 'miky',
    date: '2 / 12 / 2089'
  }]
  const date = new Date();
  return (
    <div>
      <center class='todo-container'>
        <Appname />
        <Apptodo />
        <TodoItem todoItems={todoItems} />
        <Clock />
        <Clocktime />
        <Mapfunc />
        <App />
        <Container>
          <Emptyfood items={food} />
          <Checkfood items={food} />
        </Container>

      </center>
    </div>

  );
}
