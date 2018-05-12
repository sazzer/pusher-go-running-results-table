import React from 'react';
import { Form, Header, Segment, Button } from 'semantic-ui-react'

export default class NewResultsForm extends React.Component {
    state = {
        name: '',
        time: ''
    };

    onChangeName = this._onChangeName.bind(this);
    onChangeTime = this._onChangeTime.bind(this);
    onSubmit = this._onSubmit.bind(this);

    render() {
        return (
            <div className="ui container">
                <Segment vertical>
                    <Header>New Result</Header>
                    <Form onSubmit={this.onSubmit}>
                        <Form.Field>
                            <label>Name</label>
                            <input placeholder='Name' value={this.state.name} onChange={this.onChangeName} />
                        </Form.Field>
                        <Form.Field>
                            <label>Time</label>
                            <input placeholder='Time' value={this.state.time} onChange={this.onChangeTime} />
                        </Form.Field>
                        <Button type='submit'>Submit</Button>
                    </Form>
                </Segment>
            </div>
        );
    }

    _onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    _onChangeTime(e) {
        this.setState({
            time: e.target.value
        });
    }

    _onSubmit() {
        const payload = {
            name: this.state.name,
            time: parseFloat(this.state.time)
        };

        fetch('http://localhost:8080/results', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        this.setState({
            name: '',
            time: ''
        });
    }
}
