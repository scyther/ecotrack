import React, { useEffect, useState } from "react";
import {
  Heading,
  Button,
  withAuthenticator,
  SelectField,
  TextField,
  Divider,
  Flex,
} from "@aws-amplify/ui-react";
import { API, graphqlOperation } from "aws-amplify";
import { listCategories, listMaterials } from "../../graphql/queries";
import {AiOutlinePlusCircle} from 'react-icons/ai'

const AddProduct = () => {
  const [categories, setCategories] = useState([]);
  const [materialNames, setMaterialNames] = useState([]);
  const [counter, setCounter] = useState(0);
//   const [materials, setMaterials] = useState([]);
  const [product, setProduct] = useState({
    name: "",
    category: "",
    brand: "",
  });

  const handleChange = (event) => {
    setProduct({ [event.target.name]: event.target.value });
  };

  const addMaterial = () => {
    setCounter(counter + 1);
  };

  const onMaterialSelect = () => {};
  useEffect(() => {
    async function fetchCategories() {
      const apiData = await API.graphql(graphqlOperation(listCategories));
      setCategories(apiData.data.listCategories.items);
    }
    fetchCategories();
    async function fetchMaterials() {
      const apiData = await API.graphql(graphqlOperation(listMaterials));
      setMaterialNames(apiData.data.listMaterials.items);
    }
    fetchMaterials();
  }, []);
  return (
    <div className="App-header">
      <Heading level={3} color="whitesmoke">
        Add Product to Database
      </Heading>
        <SelectField
          descriptiveText="What is the category of your Product?"
          name="category"
          onSelect={handleChange}
        >
          {categories.map((catg) => (
            <option value={catg.name}>{catg.name}</option>
          ))}
        </SelectField>
        <TextField
          label="Name"
          value={product?.name}
          onChange={handleChange}
          name="name"
        />
        <TextField
          label="Brand"
          value={product?.brand}
          onChange={handleChange}
          name="brand"
        />
        <Divider margin={10} />
        <Heading level={5} marginBottom={5} color="white">
          Add Substituent Materials:
        </Heading>
        <Button variation="primary" alignSelf="center" onClick={addMaterial}>
          <AiOutlinePlusCircle />
        </Button>
        <Flex direction="column">
          {Array.from(Array(counter)).map((c, index) => (
            <Flex
              key={c}
              wrap="wrap"
              justifyContent="center"
              alignItems="center"
            >
              <SelectField
                label="Material Name"
                name="name"
                onSelect={onMaterialSelect}
              >
                {materialNames.map((matName) => (
                  <option value={matName.name}>{matName.name}</option>
                ))}
              </SelectField>
              <SelectField name="name" label="Quality Used">
                {materialNames.map((matName) => (
                  <option value={matName.name}>{matName.name}</option>
                ))}
              </SelectField>
              <TextField
                label="Weight (in gms)"
                //   value={product?.name}
                //   onChange={handleChange}
                name="weight"
              />
            </Flex>
          ))}
        </Flex>
        <Button variation="primary" marginTop={40}>Save Product</Button>
    </div>
  );
};

export default AddProduct;
