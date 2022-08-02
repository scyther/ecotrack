import React, { useState, useEffect } from 'react';
import './product.css';
import { API } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { listProducts } from '../../graphql/queries';
import { createProduct as createProductMutation, deleteProduct as deleteProductMutation } from '../../graphql/mutations';

const initialFormState = { name: '', description: '' }

const Product = () => {
  const [notes, setNotes] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchNotes();
  }, []);

  async function fetchNotes() {
    const apiData = await API.graphql({ query: listProducts });
    setNotes(apiData.data.listProducts.items);
  }

  async function createProduct() {
    if (!formData.name || !formData.description) return;
    await API.graphql({ query: createProductMutation, variables: { input: formData } });
    setNotes([ ...notes, formData ]);
    setFormData(initialFormState);
  }

  async function deleteProduct({ id }) {
    const newNotesArray = notes.filter(note => note.id !== id);
    setNotes(newNotesArray);
    await API.graphql({ query: deleteProductMutation, variables: { input: { id } }});
  }

  return (
    <div className="App">
      <h1>My Notes App</h1>
      <input
        onChange={e => setFormData({ ...formData, 'name': e.target.value})}
        placeholder="Note name"
        value={formData.name}
      />
      <input
        onChange={e => setFormData({ ...formData, 'description': e.target.value})}
        placeholder="Note description"
        value={formData.description}
      />
      <button onClick={createProduct}>Create Note</button>
      <div style={{marginBottom: 30}}>
        {
          notes.map(note => (
            <div key={note.id || note.name}>
              <h2>{note.name}</h2>
              <p>{note.description}</p>
              <button onClick={() => deleteProduct(note)}>Delete note</button>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default withAuthenticator(Product);