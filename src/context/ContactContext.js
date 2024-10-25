import React from 'react'
import { createContext } from 'react';

// Context - React's built in way to keep track of state globally (Global State Management)
// our first context which we can access from anywhere in our application
// we create our context by setting it up with default values
const ContactContext = createContext({
    // default Values, our Contact Context expects to be setup with a contacts object and a setContact function
    contactList: [],
    contact: {name: '', phone: ''},
    setContact: () => {} // function to modify the contact object
})

export default ContactContext;
