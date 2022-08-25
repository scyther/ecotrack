import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
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

const ProductJeans = () => {
  const { state } = useLocation();
  const { imageURL } = state;

  const getNearbyAreas = async (keyword) => {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522%2C151.1957362&radius=1500&keyword=${keyword}&key=AIzaSyCX7inrmE2tWAs7_7l9m9ASN3lHXtML7kw`
    );
    console.log(response)
  };
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
          alt="Jeans"
          height="150px"
          className="pImage"
          border="1px solid var(--amplify-colors-black)"
        />
        <h1>Jeans</h1>
        <Text as="span" marginBottom={9}>
          A Jeans has a carbon Footprint of 27.6 kg of CO2
        </Text>
        <Flex
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
          alignContent="flex-start"
          wrap="nowrap"
          gap="1rem"
        >
          <Expander type="single" isCollapsible={true}>
            <ExpanderItem title="Share" value="Share">
              <Card variation="outlined" className="cardComponent">
                <Flex
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Heading level={5}>Share</Heading>
                  <Divider />
                  <Text as="span">
                    You can post an advertisement to sell it on OLX.
                  </Text>
                  <a
                    href="https://www.olx.in/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button variation="primary">OLX</Button>
                  </a>
                  {/* <Button variation="primary">
                        <GoFileMedia />
                        Please Click a picture of Dustbin
                      </Button>
                      <Button variation="primary">
                        <GoLocation /> Attach Location
                      </Button> */}
                </Flex>
              </Card>
            </ExpanderItem>
            <ExpanderItem title="Donate" value="Donate">
              <Card variation="outlined" className="cardComponent">
                <Flex
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Heading level={5}>Donate</Heading>
                  <Divider />
                  <Text as="span">Here is a list of NGO's near you</Text>
                  <Button variation="primary" onClick={getNearbyAreas}>Get nearby NGO</Button>
                </Flex>
              </Card>
            </ExpanderItem>
            <ExpanderItem title="Refurbish" value="Refurbish">
              <Card variation="outlined" className="cardComponent">
                <Flex
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Heading level={5}>Refurbish</Heading>
                  <Divider />
                  <Text as="span">Here is a list of tailors near you</Text>
                </Flex>
              </Card>
            </ExpanderItem>
            <ExpanderItem title="Recycle" value="Recycle">
              <Card variation="outlined" className="cardComponent">
                <Flex
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Heading level={5}>Recycle</Heading>
                  <Divider />
                  <Text as="span">
                    If you have Jeans available for recycling,we can generate a
                    pickup for you
                  </Text>
                  <Button variation="primary">Generate Pickup</Button>
                </Flex>
              </Card>
            </ExpanderItem>
          </Expander>
        </Flex>
      </ScrollView>
    </div>
  );
};

export default ProductJeans;
