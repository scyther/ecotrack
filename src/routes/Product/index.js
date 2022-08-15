import React, { useState, useEffect } from "react";
import "./product.css";
import { useParams } from "react-router";
import { API,graphqlOperation  } from "aws-amplify";
import { Card, Flex, Heading, Text, View} from "@aws-amplify/ui-react";
import { getProduct} from "../../graphql/queries";
import dummyImage from '../../dummyImage.jpg'
// import {
//   createProduct as createProductMutation,
//   deleteProduct as deleteProductMutation,
// } from "../../graphql/mutations";

// const initialFormState = { name: "", description: "" };

const Product = () => {
  let {productID} = useParams()
  const [product, setProduct] = useState({});
  // const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    async function fetchProducts() {
    const apiData = await API.graphql(graphqlOperation(getProduct,{id: productID})  );
    console.log(apiData)
    setProduct(apiData.data.getProduct);
  }
    fetchProducts();
  }, [productID]);

  return (
    <div className="App">
      <img src={dummyImage} alt="Plastic Bottle"height={150} className="pImage"/>
      <h1>{product.name}</h1>
      {/* {products.map((product) => ( 
      <View>
      <Card className="cardComponent">
        <Flex direction="column" alignItems="flex-start">
          <Heading level={5}>Dry Waste</Heading>
          <Divider />
          <Text as="span">Use this for recyclabel plastic Items </Text>
        </Flex>
      </Card>
      </View>))} */}
     
      <View>
      <Card className="cardComponent">
        <Flex direction="column" alignItems="flex-start">
          <Heading level={5}>Wet Waste</Heading>
          <Text>Use this for recyclabel plastic Items </Text>
        </Flex>
      </Card>
      </View>
    </div>
  );
};

export default Product;
