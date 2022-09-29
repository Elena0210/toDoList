import { Component } from 'react';
import image from './to-do.png';
import check from './checked.png';

export class ToDoList extends Component {
    constructor() {
        super();
        this.state = {
            userInput: "",
            todolist: [],
            // IMG: {image}
        }
    }
    
    onChangeEvent(e) {
        this.setState({userInput: e})
    }

    addItem(inp) {
        if (inp==="") {
            alert ("Пожалуйста, внесите данные!")
        }
        else {
        let listArray = this.state.todolist;
        listArray.push(inp);
        this.setState({
            todolist: listArray, userInput: ""
        })
        }
    }

    deleteItem() {
        let listArray = this.state.todolist;
        listArray = [];
        this.setState({
            todolist: listArray
        })
    }

    doneIt(event) {
        const li = event.target;
        li.classList.toggle ('didIt');
        // let pic = this.state.IMG;
        // pic.style.display = 'block';

        // this.setState({
        //      IMG: {check}
        //  })
    }

    onFormSubmit(e){
        e.preventDefault();
    }

    render() {
        return(
        <div>
            <form onSubmit={this.onFormSubmit}> 
                <div>
                    <input type = "text"
                    placeholder = "Введите задачу"
                    onChange = {(e) => {this.onChangeEvent(e.target.value)}}
                    value = {this.state.userInput} 
                    />
                </div>

                <div>
                    <button onClick={() => this.addItem(this.state.userInput)} className="btn">ДОБАВИТЬ</button>
                </div>

                <div>
                    <button onClick={() => this.deleteItem()} className="btnTwo">УДАЛИТЬ</button>
                </div>

                <ul>
                    {this.state.todolist.map((item, index) => (
                        <li onClick={this.doneIt} key = {index}> <img src={image} width="15px" alt="img"/>
                        {item}<img src={check} width="20px" alt="img" className='check'/></li>  
                    ))}
                </ul>
            </form> 
        </div>
        )
    }
}