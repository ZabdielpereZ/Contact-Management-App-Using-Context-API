import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import contactContext from '../context/ContactContext';
import SelectedContact from './SelectedContact';

const ContactList = () => {
    const { contactList, setContact } = useContext(contactContext);
  return (
    <Container>
      <h2>Contact List:{}</h2>
      {contactList.map((contact) => (<div onClick={() => setContact({name: contact.name, phone: contact.phone})}>{contact.name}: {contact.phone}</div>))}
      <SelectedContact />
    </Container>
  )
}

export default ContactList;
