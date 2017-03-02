import React, { Component } from 'react';
import Clock from './Clock';
import './app.css';
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends Component {
    constructor(props) {
        super();

        this.state = {
            deadline: 'December 25, 2017',
            newDeadline: '',
        };
    };

    handleChangeDeadline() {
        this.setState({
            deadline: this.state.newDeadline,
        });
    };

    render() {
        return (
            <div className='app'>
                <div className='app-title'>{ this.state.deadline }</div>
                <Clock deadline={ this.state.deadline } />
                <div>
                    <Form className='deadline-input' inline>
                        <FormControl type="text" placeholder='new date' onChange={ event => this.setState({ newDeadline: event.target.value }) } />
                        <Button onClick={ () => this.handleChangeDeadline() }>Submit</Button>
                    </Form>
                </div>
            </div>
        )
    };
};

export default App;