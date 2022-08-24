import React from "react";
import {useState} from 'react'

function NewContactForm({reRender}) {
 
  const [form, setForm] = useState({
    id: '',
    brand: 'indie',
    name: '',
    description: '',
    image: '',
    hp: '',
    attack: '',
    defense: '',
    special: '',
    passive: ''
  })

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]:event.target.value
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    fetch(`http://localhost:3000/contacts`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    }).then(()=>reRender((render=>!render)))
    setForm({
      id: '',
      brand: 'indie',
      name: '',
      description: '',
      image: '',
      hp: '',
      attack: '',
      defense: '',
      special: '',
      passive: ''
    })
  }

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="inline fields">
          <input onChange={handleChange} value={form.name} 
              type="text" name="name" placeholder="Name" />
          <input onChange={handleChange} value={form.description} 
              type="text" name="description" placeholder="Description" />
          <input onChange={handleChange} value={form.image} 
              type="text" name="image" placeholder="Image" />
          <input onChange={handleChange} value={form.hp} 
              type="number" name="hp" placeholder="HP" step="1" />
          <input onChange={handleChange} value={form.attack} 
              type="number" name="attack" placeholder="Attack" step="1" />
          <input onChange={handleChange} value={form.defense} 
              type="number" name="defense" placeholder="Defense" step="1" />
          <input onChange={handleChange} value={form.special} 
              type="text" name="special" placeholder="Special" />
          <input onChange={handleChange} value={form.passive} 
              type="text" name="passive" placeholder="Passive" />
        </div>
        <button className="ui button" type="submit">
          Add Contact
        </button>
      </form>
    </div>
  );
}

export default NewContactForm;
