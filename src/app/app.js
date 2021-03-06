import React,{Component} from 'react';

class App extends Component{
    constructor(){
        super();
        this.state = {
            title: '',
            description:'',
        };
        this.handleChange = this.addTask.bind(this);
        this.addTask = this.addTask.bind(this);
      
    }
    addTask(e)  {
        fetch ('/api/tasks', {
            method: 'POST',
            body: JSON.stringify(this.state)
        })
        e.preventDefault();
    }

    handleChange(e){
        const {name, value} = e.target;
        this.setState({
            [name]: value
        });
    }
    render(){
        return (<div>
                {/*NAV BAR*/}
           <nav className="light-blue darken-4">
            <div className = "container">
            <a className= "brand-logo" href="/">Task Manager</a>
            </div>
           </nav>
           <div className= "container">
               <div className="row">
                <div className ="col s5">
                    <div className="card">
                        <div className="card-content">
                            <form onSubmit={this.addTask}>
                                <div className="row">
                                    <div className="input-field col s12">
                                       <input name="title" onChange={this.handleChange} type ="text" placeholder= "Task Tittle"></input>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                      <textarea name="description" onChange={this.handleChange} placeholder="Task Description" className ="materialize-textarea"></textarea>
                                    </div>
                                </div>
                                <button type="submit" className="btn light-blue darken-4">
                                    Send
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className ="col s7">

                </div>
               </div>
           </div>
        </div>
           );
    }
   }

   export default App