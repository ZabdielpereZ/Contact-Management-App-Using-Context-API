import { useState } from "react";
import ContactContext from "./context/ContactContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactList from "./components/ContactList";


function App() {
  // const contacts = [
  //   'Zab', '123-456-7890',
  //   'Mozzy', '098-765-4321',
  //   'Rupee', '234-567-8901',
  //   'Tom',  '345-678-9012',
  //   'Jerry', '456-789-0123',
  //   'Johnny Test', '567-890-1239'
  // ];

  const [contactList, setContactList] = useState(
  [ {name: 'Jack', phone:'111-111-1111'},
    {name: 'Zab', phone:'211-111-1111'},
    {name: 'Ruppee', phone:'311-111-1111'},
    {name: 'doug', phone:'311-111-1111'},
    {name: 'Chester', phone:'311-111-1111'},
    {name: 'Tom', phone:'311-111-1111'}
  ]
  );
 const [contact, setContact ] = useState({name: '', phone: ''});
  return (
    // Our Context.Provider is going to take in a set of values and then provide them all the components inside the Context.Provider tag
    // ContactContext.Provider takes in the contact state that we set up above as a value

    <ContactContext.Provider value={{ contactList, contact, setContact }}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ContactList />}
          />
          
        </Routes>
      </BrowserRouter>
    </ContactContext.Provider>
  );
}

export default App;
