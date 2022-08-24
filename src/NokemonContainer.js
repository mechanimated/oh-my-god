import React from "react";
import ContactList from "./ContactList";
import Battle from "./Battle";
import NewContactForm from "./NewContactForm";
import { useState, useEffect } from 'react'

function NokemonContainer() {
  const [contacts, setContacts] = useState([])

  const [render, reRender] = useState(true)

  useEffect(() => {
    fetch(`http://localhost:3000/contacts`)
    .then(res => res.json())
    .then(data => setContacts(data))
  }, [render])




  let savedContacts = []
  function saveContact(e, contact) {
    if (savedContacts.length < 10) {
      savedContacts.push(contact)
      console.log(savedContacts)
    } else {
      console.log('your phone is full!')
    }
      }
  

let enemyContacts = []

enemyContacts.push(contacts.filter((contact) => contact.brand !== 'indie'))

//  Passing props to appropriate children.
  return (
    <div>
      <Battle savedContacts={savedContacts} enemyContacts={enemyContacts}/>
      <NewContactForm reRender={reRender}/>
      <ContactList contacts={contacts} saveContact={saveContact}/>
    </div>
  );
}


export default NokemonContainer;
