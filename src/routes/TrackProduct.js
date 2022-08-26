import React, { useEffect, useState } from "react";
import BarChart from "react-easy-bar-chart";
import { Flex, Heading, SelectField } from "@aws-amplify/ui-react";
import { API, graphqlOperation } from "aws-amplify";
import { getDateswithValues, getProducts } from "../graphql/customQueries";

const TrackProduct = () => {
  const [product, setproduct] = useState("");
  const [productOptions, setproductOptions] = useState([]);

  useEffect(() => {
    async function fetchProductNames() {
      const apiData = await API.graphql(graphqlOperation(getProducts));
      setproductOptions(apiData.data.listImpactProducts.items);
    }
    fetchProductNames();
  }, []);

  const onProductSelect = async (e) => {
    setproduct(e.target.value);
    const apiData = await API.graphql(graphqlOperation(getDateswithValues,{name: product}));
    console.log(apiData.data)
  }

  const data = [
    {
      title: "23th",
      value: 10,
      color: "#2e4053",
    },
    {
      title: "24th",
      value: 40,
      color: "#ff6f1d",
    },
    {
      title:  "25th",
      value: 15,
      color: "#d35400",
    },
    {
      title:  "26th",
      value: 12,
      color: " #a9cce3",
    },
  ];
  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      marginTop={30}
    >
      <Heading level={3}>Track Product Carbon Impact</Heading>
      <SelectField
        descriptiveText="which product you want to track?"
        name="product"
        onSelect={onProductSelect}
      >
        {productOptions.map((p) => (
          <option value={p.name}>{p.name}</option>
        ))}
      </SelectField>
      <BarChart
        xAxis="Date"
        yAxis="Carbon Footprint"
        height={400}
        width={800}
        data={data}
      />
    </Flex>
  );
};

export default TrackProduct;
