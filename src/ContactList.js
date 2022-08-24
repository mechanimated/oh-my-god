import React from "react";
import Contact from "./Contact";

//  Maps the array 'transactions' and passes individual objects (and props) to 'Transaction'
function ContactList({contacts, handleSave, saveContact, reRender}) {
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header" >Contacts</h3>
          </th>
          <th>
            <h3 className="ui center aligned header" >Description</h3>
          </th>
        </tr>
        {contacts.filter((contact) => contact.brand === 'indie').map((contact, buttcheeks) => {
          return (
          <Contact contact={contact} id={contact.id} key={buttcheeks} 
                   saveContact={saveContact} reRender={reRender}/>
        )})}
      </tbody>
    </table>
  );
}

export default ContactList;

