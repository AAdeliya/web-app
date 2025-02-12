import logo from './logo.svg';
import './App.css';
import { Greet } from './components/Greet'
import React, { Component } from 'react';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';

class App extends Component {
  render () {
    return (
    <div className="App">
      <NameList></NameList>
      <UserGreeting></UserGreeting>
      <ParentComponent></ParentComponent>
      <EventBind></EventBind>
      <ClassClick></ClassClick>
      <FunctionClick></FunctionClick>
      <Counter></Counter>
      <Message/>
      <Greet  name = "Bruce" heroName = "Batman" >
        <p>This is children props</p></Greet>
      <Greet name = "Clark" heroName = "Superman">
        <button>Action</button>
        </Greet>
      <Greet name = "Diane" heroName = "Wonder Woman"/>
      <Welcome name ="Bruce" heroName = "Batman"/>
      <Welcome name = "Clark" heroName = "Superman"/>
      <Welcome name = "Clark" heroName = "Superman"/>
      <Hello></Hello>
    </div>
  );
}
}

export default App;
