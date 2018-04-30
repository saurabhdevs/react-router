import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';


class Fetch extends React.Component{
    constructor(){
        super();
        this.state = {
            content:[]
        }
    }
    componentDidMount(){
        $.ajax({
            url:this.props.url,
            success:(data)=>{
            this.setState({
                content:data
            })
            },
            error:(error)=>{
            console.log("error",error);
            }
        })
    }
    render(){
        return(
            <section>
                {this.props.children(this.state.content)}
            </section>
        )
    }
}

class App extends React.Component{
    render(){
        return(
            <section>
                <Fetch url = "http://jsonplaceholder.typicode.com/posts">
                {(data)=>{
                  return data.map((value)=>{
                      return <li key = {value.id}>{value.title}</li>
                  })
                }}
                </Fetch>
                User:
                <Fetch url = "http://jsonplaceholder.typicode.com/users">
                {(data)=>{
                  return data.map((value)=>{
                      return <li key = {value.id}>{value.name}</li>
                  })
                }}
                </Fetch> 

            </section>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));

