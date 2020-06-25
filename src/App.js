import React from 'react'
import Footer from './components/Footer'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'
import GithubCorner from "react-github-corner";
import './App.css'

const App = () => (
  <div className="AppContainer">
    <GithubCorner
      href="https://github.com/adamdubey/todo-app"
      bannerColor="#13ae38"
      octoColor="#030000"
      width={80}
      height={80}
      direction="right"
    />
    <h1>Todo Task App</h1>
    <div className="App">
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  </div>
);

export default App
