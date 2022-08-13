/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text, View } from "@aws-amplify/ui-react";
import Logo from "./Logo";
import ItemCard from "./ItemCard";
export default function Product(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="360px"
      height="640px"
      overflow="hidden"
      position="relative"
      border="1px SOLID rgba(0,0,0,1)"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(40,44,52,1)"
      {...rest}
      {...getOverrideProps(overrides, "Product")}
    >
      <Text
        fontFamily="Inter"
        fontSize="24px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="30px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="402px"
        height="36px"
        position="absolute"
        top="211px"
        left="-23px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Consumer Options"
        {...getOverrideProps(overrides, "Consumer Options")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="24px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        letterSpacing="0.01px"
        width="304px"
        height="30px"
        position="absolute"
        top="148px"
        left="34px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Product Category&#xA;"
        {...getOverrideProps(overrides, "Product Category")}
      ></Text>
      <Flex
        gap="2px"
        position="absolute"
        top="0px"
        left="0px"
        width="360px"
        height="47px"
        justifyContent="center"
        alignItems="center"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Logo")}
      >
        <Logo
          width="33px"
          height="30px"
          shrink="0"
          overflow="hidden"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "logo")}
        ></Logo>
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="400"
          color="rgba(255,255,255,1)"
          textTransform="capitalize"
          lineHeight="23.4375px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Eco-Track"
          {...getOverrideProps(overrides, "Eco-Track")}
        ></Text>
      </Flex>
      <Image
        width="95px"
        height="92px"
        position="absolute"
        top="47px"
        left="132px"
        borderRadius="60px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Rectangle 1")}
      ></Image>
      <ItemCard
        display="flex"
        gap="16px"
        position="absolute"
        top="266px"
        left="18px"
        direction="column"
        width="320px"
        padding="16px 16px 16px 16px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "ItemCard31483810")}
      ></ItemCard>
      <ItemCard
        display="flex"
        gap="16px"
        position="absolute"
        top="391px"
        left="18px"
        direction="column"
        width="320px"
        padding="16px 16px 16px 16px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "ItemCard31483951")}
      ></ItemCard>
      <ItemCard
        display="flex"
        gap="16px"
        position="absolute"
        top="516px"
        left="18px"
        direction="column"
        width="320px"
        padding="16px 16px 16px 16px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "ItemCard31483967")}
      ></ItemCard>
    </View>
  );
}
