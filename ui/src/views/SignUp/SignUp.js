import React, { Component } from 'react'
import firebase from '../../firebase/firebase.js'

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
          slackHandle: '',
          name: ''
        }
    }

    handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const itemsRef = firebase.database().ref('items');
        const item = {
          slackHandle: this.state.slackHandle,
          name: this.state.name
        }
        itemsRef.push(item);
        this.setState({
          slackHandle: '',
          name: ''
        });
    }

    render(){
        return (
            <section className="add-item">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="name" placeholder="What's your name?" onChange={this.handleChange} value={this.state.name} />
                    <input type="text" name="slackHandle" placeholder="What your slack handle?" onChange={this.handleChange} value={this.state.slackHandle} />
                    <button onClick={this.handleSubmit}>Submit</button>
                </form>
            </section>
        )
    }
}

export default SignUp