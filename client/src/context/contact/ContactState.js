import React, { useReducer } from 'react';
import {v4 as uuidv4} from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import { ADD_CONTACT, DELETE_CONTACT, SET_CURRENT, CLEAR_CURRENT, UPDATE_CONTACT, FILTER_CONTACTS, CLEAR_FILTER } from '../types';

const ContactState = props => {

    const initialState = {

        contacts: [
            {

                id: 1,
                type:"professional",
                name:"Sarah Palmer",
                email:"sp@gmail.com",
                phone:"07538705411",

            },
            {
                
                id: 2,
                type:"professional",
                name:"Terry Brunswick",
                email:"tb@gmail.com",
                phone:"07538705345",

            },
            {
                
                id: 3,
                type:"personal",
                name:"Mike Hunt",
                email:"mh@gmail.com",
                phone:"075387054123",

            }
        ],

        current: null

    };

    const [state, dispatch] = useReducer(contactReducer, initialState);

    //Add Contact
    const addContact = contact => {

        contact.id = uuidv4();

        dispatch({ type: ADD_CONTACT, payload: contact });

    }

    //Delete Contact
    const deleteContact = id => {

        dispatch({ type: DELETE_CONTACT, payload: id });

    }

    //Set Current Contact
    const setCurrent = contact => {

        dispatch({ type: SET_CURRENT, payload: contact });

    }

    //Clear Current Contact
    const clearCurrent = () => {

        dispatch({ type: CLEAR_CURRENT });

    }

    //Update Contact
    const updateContact = contact => {

        dispatch({ type: UPDATE_CONTACT, payload: contact });

    }

    //Filter Contacts


    //Clear Filter

    return(

        <ContactContext.Provider value={{ contacts: state.contacts, current: state.current, addContact, deleteContact, setCurrent, clearCurrent, updateContact }} > { props.children } </ContactContext.Provider>

    )

};

export default ContactState;