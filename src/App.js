import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import ToDos from './components/ToDos';
import Header from './components/layout/Header';
import AddToDo from './components/AddToDo';
import About from './components/Pages/About'
import Axios from 'axios';

class App extends React.Component{
  state = {
    todos:[]
  }

  componentDidMount(){
    Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10').then(res=>this.setState({todos: res.data}));
  }

  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    })});
  }

  delToDo = (id) =>{
    Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res =>this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]}));
  }

  addToDo = (title) =>{
    Axios.post('https://jsonplaceholder.typicode.com/todos', {title, completed: false}).then(res=> this.setState({todos: [...this.state.todos, res.data]}))

    // const newToDo = {
    //   id: 4,
    //   title,
    //   completed: false
    // }
    // this.setState({todos: [...this.state.todos, newToDo]});
  }

  render(){
    return(
      <Router>
      <div className="App">
        <div className="container">
          <Header/>
          <Route exact path="/" render={props=>(
            <React.Fragment>
              <AddToDo addToDo={this.addToDo}/>
              <ToDos todos={this.state.todos} markComplete={this.markComplete} delToDo={this.delToDo}/>
            </React.Fragment>
          )}/>
          <Route path="/about" component={About}/>
          
        </div>
      </div>
      </Router>
    );
  }
}


export default App;
