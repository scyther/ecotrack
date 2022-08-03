import React, { useState, useEffect } from "react";
import "./product.css";
import { API, Storage } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { listProducts } from "../../graphql/queries";
import {
  createProduct as createProductMutation,
  deleteProduct as deleteProductMutation,
} from "../../graphql/mutations";

const initialFormState = { name: "", description: "" };

const Product = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchProducts();
  }, []);

  const onChange = async (e) => {
    if (!e.target.files[0]) return;
    const file = e.target.files[0];
    setFormData({ ...formData, image: file.name });
    await Storage.put(file.name, file);
    fetchProducts();
  };
  async function fetchProducts() {
    const apiData = await API.graphql({ query: listProducts });
    const productsfromAPI = apiData.data.listProducts.items;
    await Promise.all(
      productsfromAPI.map(async (product) => {
        if (product.image) {
          const image = await Storage.get(product.image);
          product.image = image;
        }
        return product;
      })
    );
    setProducts(apiData.data.listProducts.items);
  }

  async function createProduct() {
    if (!formData.name || !formData.description) return;
    await API.graphql({
      query: createProductMutation,
      variables: { input: formData },
    });
    if (formData.image) {
      const image = await Storage.get(formData.image);
      formData.image = image;
    }
    setProducts([...products, formData]);
    setFormData(initialFormState);
  }

  async function deleteProduct({ id }) {
    const newproductsArray = products.filter((product) => product.id !== id);
    setProducts(newproductsArray);
    await API.graphql({
      query: deleteProductMutation,
      variables: { input: { id } },
    });
  }

  return (
    <div className="App">
      <h1>My products App</h1>
      <input
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        placeholder="product name"
        value={formData.name}
      />
      <input
        onChange={(e) =>
          setFormData({ ...formData, description: e.target.value })
        }
        placeholder="product description"
        value={formData.description}
      />
      <input type="file" onChange={onChange} />
      <button onClick={createProduct}>Create Product</button>
      <div style={{ marginBottom: 30 }}>
        {products.map((product) => (
          <div key={product.id || product.name}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <button onClick={() => deleteProduct(product)}>Delete Product</button>
            {product.image && <img alt="Product" src={product.image} style={{width: 400}} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default withAuthenticator(Product);
