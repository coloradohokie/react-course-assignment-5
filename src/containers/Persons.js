import React, { Component } from 'react';
import { connect } from 'react-redux'

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import * as actionTypes from '../store/actions'

class Persons extends Component {
    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.onAddPerson} />
                {this.props.persons.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.onDeletePerson(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapPropsToState = state => {
    return {
        persons: state.persons
    }
}

const mapDispatchToState = dispatch => {
    return {
        onAddPerson: () => dispatch({type: actionTypes.ADD_PERSON, payload: {id: Math.random(), name: 'Max', age: Math.floor( Math.random() * 40 )}}),
        onDeletePerson: (id) => dispatch({type: actionTypes.DELETE_PERSON, id: id})
    }
}

export default connect(mapPropsToState, mapDispatchToState)(Persons);