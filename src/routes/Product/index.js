import React, { useState, useEffect } from "react";
import "./product.css";
import { useParams, useLocation } from "react-router";
import { API, graphqlOperation } from "aws-amplify";
import {
  Card,
  Divider,
  Flex,
  Heading,
  Image,
  Loader,
  Text,
  ScrollView,
  Expander,
  ExpanderItem,
  Button,
} from "@aws-amplify/ui-react";
import { getProduct } from "../../graphql/queries";
import {GoLocation,GoFileMedia} from 'react-icons/go'

const Product = () => {
  let { productID } = useParams();
  const { state } = useLocation();
  const { imageURL } = state;
  const [product, setProduct] = useState({});

  useEffect(() => {
    async function fetchProducts() {
      const apiData = await API.graphql(
        graphqlOperation(getProduct, { id: productID })
      );
      console.log(apiData);
      setProduct(apiData.data.getProduct);
    }
    fetchProducts();
  }, [productID]);
  console.log(product?.ConsumerOptions?.items);

  return (
    <div className="App">
      <ScrollView
        as="div"
        backgroundColor="var(--amplify-colors-white)"
        borderRadius="6px"
        border="1px solid var(--amplify-colors-black)"
        boxShadow="3px 3px 5px 6px var(--amplify-colors-neutral-60)"
        color="var(--amplify-colors-blue-60)"
        height="100%"
        maxWidth="100%"
        padding="1rem"
        width="25rem"
        margin="10px auto"
        className="scrollView"
      >
        <Image
          src={imageURL}
          alt="Plastic Bottle"
          height="150px"
          className="pImage"
          border="1px solid var(--amplify-colors-black)"
        />
        <h1>{product.name || <Loader />}</h1>
        <Flex
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
          alignContent="flex-start"
          wrap="nowrap"
          gap="1rem"
        >
          <Expander type="single" isCollapsible={true}>
            {Boolean(Object.keys(product).length) &&
              product.ConsumerOptions.items.map((product) => (
                <ExpanderItem
                  title={product.consumerOptions.name}
                  value={product.consumerOptions.name}
                >
                  <Card
                    variation="outlined"
                    className="cardComponent"
                  >
                    <Flex direction="column" alignItems="center" justifyContent='center'>
                      <Heading level={5}>
                        {product.consumerOptions.name}
                      </Heading>
                      <Divider />
                      <Text as="span">
                        {product.consumerOptions.description}
                      </Text>
                      <Button variation="primary"><GoFileMedia />Please Click a picture of Dustbin</Button>
                      <Button variation="primary"><GoLocation /> Attach Location</Button>
                    </Flex>
                  </Card>
                </ExpanderItem>
              ))}
          </Expander>
        </Flex>
      </ScrollView>
    </div>
  );
};

export default Product;
