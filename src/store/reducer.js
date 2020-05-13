

const initialState = {
    persons: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_PERSON': 
            return {
            ...state,
            persons: state.persons.concat(action.payload)
            }
        case 'DELETE_PERSON':            
            const updatedArray = state.persons.filter(person => person.id !== action.id)
            return {
                ...state,
                persons: updatedArray

            }
    }
    return state
}

export default reducer