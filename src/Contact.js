import React from "react";

function Contact({contact, saveContact, id, reRender}) {

 return (
    <tr>
      <td>
        <button style={{ background: 'transparent', border: 'none' }} onClick={((e) => saveContact(e, contact))}>💾</button>
        {contact.name}
      </td>
      <td>{contact.description}</td>
    </tr>
  );
}

export default Contact;