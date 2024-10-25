import React from 'react'
import { Container } from 'react-bootstrap'
import { useContext } from 'react'
import contactContext from '../context/ContactContext'

const SelectedContact = () => {

  const { contact } = useContext(contactContext)

  return (
    <Container>
      <h2>Selected Contact: {contact.name}, {contact.phone}</h2>
    </Container>
  )
}

export default SelectedContact

