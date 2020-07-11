var React = require('react');
var uuid=require('node-uuid');
var moment = require('moment');

var TodoList = require('TodoList');
var AddTodo= require('AddTodo');
var TodoSearch= require('TodoSearch');
var TodoAPI =require('TodoAPI');
const Todo = require('./Todo');

var TodoApp = React.createClass({

    getInitialState:function(){

        return{
            showCompleted:false,
            searchText:'',
            todos:TodoAPI.getTodos()
        }
    },
    componentDidUpdate:function(){
        TodoAPI.setTodos(this.state.todos);
    }
    handleAddTodos: function(text){
        this.setState({
            todod:[
                ...this.state.todos,
                {
                    id:uuid(),
                    text:text,
                    completed:false,
                    createdAt:moment().unix(),
                    completedAt: undefined
                }
            ]
        })
    },
    handleToggle:function(id){
        var updateTodos = this.state.todos.map(todo)=>{
            if(todo.id===id){
                todod.completed=!todo.completed;
                todo.completedAt=todo.completedAt ? moment().unix():undefined;
            }
            return todo;
        })
        this.setState({todos:updatedTodos})
    },
    handleSearch:function(showCompleted,searchText){
        this.setState({
            showCompleted:showCompleted,
            searchText:searchText.toLowercase()
        })
    },
    render:function(){
        var { todos,showCompleted,searchText}= this.setState;
        var filteredTodos = TodoAPI.filteredTodos(todos,showCompleted,searchText);
        return(
            <h1 className="page-title">Todo App</h1>

            <div className="row">
            <div className="column small-centered small-11 medium-6 large-5">
            <div className = "container">
            <TodoSearch onSearch ={this.handleSearch}/>
            <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
            <AddTodo onAddTodo={this.handleAddTodo}/>
            </div>
            </div>
            </div>
            </div>

        )
    }
})
module.exports=TodoApp
