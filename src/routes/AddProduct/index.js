import React, { useEffect, useState } from "react";
import {
  Heading,
  Button,
  SelectField,
  TextField,
  Divider,
  Flex,
  Text,
} from "@aws-amplify/ui-react";
import { API, graphqlOperation } from "aws-amplify";
import { listCategories, listMaterials } from "../../graphql/queries";
import { AiOutlinePlusCircle } from "react-icons/ai";
// import { listQualities } from "../../graphql/customQueries";
import pincode from "pincode-distance";
import { createImpactProduct } from "../../graphql/mutations";
// import { nanoid } from "nanoid";

const AddProduct = () => {
  const [fetchedMaterialNames, setFetchedMaterialNames] = useState([]);
  const [categories, setCategories] = useState([]);
  const [materialNames, setMaterialNames] = useState([]);
  const [qualityNames, setqualityNames] = useState([]);
  const [counter, setCounter] = useState(0);
  const [materials, setMaterials] = useState([
    {
      material: "",
      quality: "",
      weight: "",
      carbonFootprintValue: 0,
      calculatedFootprint: 0,
    },
  ]);
  const [packagingUsed, setPackagingUsed] = useState({
    name: "",
    weight: "",
    calculatedCF: 0,
  });
  const [logistics, setLogistics] = useState({
    mpin: 0,
    dpins: "",
    averageDistance: 0,
    calculatedCF: 0,
  });
  const [waterConsumed, setWaterConsumed] = useState({
    waterperDay: "",
    jeansperDay: "",
    cottonperJeans: "",
  });
  const [product, setProduct] = useState({
    name: "",
    category: "",
    brand: "",
    date: "",
    waterConsumed: 0,
    energyUsed: 0,
    energyFP: 0,
    totalCF: "",
  });

  const materialObject = {
    material: "",
    quality: "",
    weight: "",
    carbonFootprintValue: 0,
    calculatedFootprint: 0,
  };

  const packingCF = {
    ThermoPlastic: "290.59",
    Cardboard: "101.84",
    Paper: "81.84",
  };

  const cfbyRoad = "1.3";
  const waterperKgCotton = "22500";
  const Pincode = new pincode();
  // Calculate AverageDistance

  const CalculateDistance = () => {
    let distances = [];
    let dpinsArray = logistics.dpins.split(",");
    dpinsArray.forEach((dpin) => {
      let distance = Pincode.getDistance(logistics.mpin, dpin);
      distances.push(distance);
    });

    const average = (distances) =>
      distances.reduce((prev, curr) => prev + curr) / distances.length;
    let distance = average(distances);
    let CFperKg = cfbyRoad;
    let CFperg = CFperKg / 1000;
    let calculatedCF = CFperg * logistics.averageDistance;
    setLogistics({
      ...logistics,
      averageDistance: distance.toFixed(2),
      calculatedCF: calculatedCF.toFixed(2),
    });
  };

  const handleChange = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };

  const handleMaterialsChange = (i, e) => {
    let newMaterials = [...materials];
    newMaterials[i][e.target.name] = e.target.value;
    setMaterials(newMaterials);
  };

  const calculateMatFootprint = async (i, e) => {
    handleMaterialsChange(i, e);
    let CFinKg = fetchedMaterialNames.find(
      (x) => x.quality === materials[i].quality
    ).carbonFootprint;
    let CFing = CFinKg / 1000;
    let calculatedCF = CFing * materials[i].weight;
    let newMaterials = [...materials];
    newMaterials[i].calculatedFootprint = calculatedCF.toFixed(2);
    setMaterials(newMaterials);
    // const apiData = await API.graphql(graphqlOperation(getCFValueforMaterial,{id: }));
  };

  const calculatePackFootprint = (e) => {
    let CFperKG = packingCF[packagingUsed.name];
    let CFperg = CFperKG / 1000;
    let calculatedCF = CFperg * packagingUsed.weight;
    let calcCFinInt = calculatedCF.toFixed(2);
    setPackagingUsed({
      ...packagingUsed,
      calculatedCF: calcCFinInt,
      weight: e.target.value,
    });
  };
  const calculateWaterConsumption = (e) => {
    let waterperG = waterperKgCotton / 1000;
    let waterForCotton = waterperG * waterConsumed?.cottonperJeans;
    let waterusedperJeans =
      waterConsumed?.waterperDay / waterConsumed?.jeansperDay;
    let totalWaterConsumed = waterForCotton + waterusedperJeans;
    setWaterConsumed({
      ...waterConsumed,
      [e.target.name]: e.target.value,
    });
    setProduct({ ...product, waterConsumed: totalWaterConsumed.toFixed(2) });
  };

  const calculateTotalCF = () => {
    let total = 0;
    materials.forEach((material) => {
      total = total + parseFloat(material.calculatedFootprint);
    });
    total = total+ parseFloat(packagingUsed.calculatedCF);
    total = total + parseFloat(logistics.calculatedCF);
    total = total + parseFloat(product?.energyFP);
    setProduct({ ...product, totalCF: total });
  };

  const handleSaveProduct = async () => {
    const dataToSave = {
      name: product?.name,
      energyUsed: product?.energyUsed,
      brand: product?.brand,
      logistics: JSON.stringify(logistics),
      materialsUsed: JSON.stringify(materials),
      packagingUsed: JSON.stringify(packagingUsed),
      totalCarbonFootprint: product?.totalCF,
      waterConsumption: parseFloat(product?.waterConsumed),
      date: product?.date,
      energyFP: product?.energyFP,
    };
    console.log(dataToSave);
    const savedProduct = await API.graphql({
      query: createImpactProduct,
      variables: {
        input: dataToSave,
      },
    });
    console.log(savedProduct);
  };
  const addMaterial = () => {
    setCounter(counter + 1);
    setMaterials([...materials, materialObject]);
  };

  useEffect(() => {
    async function fetchCategories() {
      const apiData = await API.graphql(graphqlOperation(listCategories));
      setCategories(apiData.data.listCategories.items);
    }
    fetchCategories();

    async function fetchMaterials() {
      const apiData = await API.graphql(graphqlOperation(listMaterials));
      setFetchedMaterialNames(apiData.data.listMaterials.items);
      let materialsArray = apiData.data.listMaterials.items.map(
        (item) => item.name
      );
      let qualitiesArray = apiData.data.listMaterials.items.map(
        (item) => item.quality
      );
      let materialSet = [...new Set(materialsArray)];
      let qualitiesSet = [...new Set(qualitiesArray)];
      setqualityNames(qualitiesSet);
      setMaterialNames(materialSet);
    }
    fetchMaterials();
  }, []);

  return (
    <div>
      <Flex
        wrap="wrap"
        justifyContent="center"
        alignItems="center"
        direction="column"
      >
        <div>
          <Heading level={3}>Environment Impact Calculator</Heading>
        </div>
        <div>
          <SelectField
            descriptiveText="What is the category of Product?"
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
          <label htmlFor="start">Date:</label>

          <input
            type="date"
            id="start"
            name="date"
            value={product?.date}
            onChange={handleChange}
            min="2022-01-01"
            max="2024-12-31"
          ></input>
        </div>
        <Divider margin={10} />

        {/* Materials Used */}

        <Heading level={5} marginBottom={5}>
          Add Substituent Materials:
        </Heading>
        <Button variation="primary" alignSelf="center" onClick={addMaterial}>
          <AiOutlinePlusCircle />
        </Button>

        <Flex direction="column">
          {materials.map((c, index) => {
            return (
              <Flex
                key={index}
                wrap="wrap"
                justifyContent="center"
                alignItems="center"
              >
                <SelectField
                  color="white"
                  label="Material Name"
                  name="material"
                  onChange={(e) => handleMaterialsChange(index, e)}
                  value={c.material}
                >
                  {materialNames.map((matName) => (
                    <option value={matName} color="white">
                      {matName}
                    </option>
                  ))}
                </SelectField>
                <SelectField
                  name="quality"
                  label="Quality Used"
                  value={c.quality}
                  onChange={(e) => handleMaterialsChange(index, e)}
                >
                  {qualityNames.map((quality) => (
                    <option value={quality}>{quality}</option>
                  ))}
                </SelectField>

                <TextField
                  label="Weight (in gms)"
                  value={c.weight}
                  onChange={(e) => calculateMatFootprint(index, e)}
                  name="weight"
                />
                <Text>{c.calculatedFootprint} kg CO2</Text>
              </Flex>
            );
          })}
        </Flex>
        <Divider margin={10} />

        {/* Packaging USed */}

        <Heading level={5} marginBottom={5}>
          Add Packaging:
        </Heading>
        <Flex wrap="wrap" justifyContent="center" alignItems="center">
          <SelectField
            name="Packaging Used"
            label="Packaging Used"
            value={packagingUsed.name}
            onChange={(e) => {
              setPackagingUsed({ ...packagingUsed, name: e.target.value });
            }}
          >
            <option value="ThermoPlastic">ThermoPlastic</option>
            <option value="Cardboard">Cardboard</option>
            <option value="Paper">Paper</option>
          </SelectField>
          <TextField
            label="Weight (in gms)"
            value={packagingUsed.weight}
            onChange={(e) => {
              calculatePackFootprint(e);
            }}
          ></TextField>
          <Text>{packagingUsed.calculatedCF} kg CO2</Text>
        </Flex>

        {/* Logistic */}
        <Divider margin={10} />
        <Heading level={5} marginBottom={5}>
          Add Logistics:
        </Heading>
        <Flex
          direction="column"
          wrap="wrap"
          justifyContent="center"
          alignItems="center"
        >
          <TextField
            label="Manufacturing Address PinCode"
            value={logistics.mpin}
            onChange={(e) => {
              setLogistics({ ...logistics, mpin: e.target.value });
            }}
          />
          <TextField
            label="Distributors Address PinCode (Enter Mutiple distributors by separating with comma)"
            value={logistics.dpins}
            onChange={(e) => {
              setLogistics({ ...logistics, dpins: e.target.value });
            }}
          ></TextField>
          <Button
            onClick={() => {
              CalculateDistance();
            }}
          >
            Calculate Average Distance
          </Button>
          {logistics.averageDistance && (
            <Text>{parseInt(logistics.averageDistance)} kms</Text>
          )}
          <Text>{logistics.calculatedCF} kg CO2</Text>
        </Flex>

        {/* Water Consumption */}
        <Divider margin={10} />
        <Heading level={5} marginBottom={5}>
          Water Consumption:
        </Heading>
        <Flex
          direction="column"
          wrap="wrap"
          justifyContent="center"
          alignItems="center"
        >
          <TextField
            label="Water Consumed in Manufacturing Plant"
            value={waterConsumed.waterperDay}
            name="waterperDay"
            onChange={calculateWaterConsumption}
          ></TextField>
          <TextField
            label="Jeans manufactured at that day"
            value={waterConsumed.jeansperDay}
            name="jeansperDay"
            onChange={calculateWaterConsumption}
          ></TextField>
          <TextField
            label="Organic cotton weight per jeans"
            value={waterConsumed.cottonperJeans}
            name="cottonperJeans"
            onChange={calculateWaterConsumption}
          ></TextField>
          <Text>{product.waterConsumed} L</Text>
        </Flex>
        {/* Energy Used */}
        <Divider margin={10} />
        <Heading level={5} marginBottom={5}>
          Energy Used:
        </Heading>
        <Flex
          direction="column"
          wrap="wrap"
          justifyContent="center"
          alignItems="center"
        >
          <TextField
            label="Electricity Units consumed by Manufacturing Unit (for 1 Day)"
            value={product?.energyUsed}
            onChange={(e) => {
              setProduct({
                ...product,
                energyUsed: e.target.value,
                energyFP: 3.5 * e.target.value,
              });
            }}
          ></TextField>
          <Text>{product.energyFP} kg C02</Text>
          <Button variation="primary" marginTop={40} onClick={calculateTotalCF}>
            Calculate Total Impact
          </Button>
          <Text>Total Carbon FootPrint = {product?.totalCF} kg CO2</Text>
          <Text>Total Water Consumed = {product?.waterConsumed} L</Text>
          <Button
            variation="primary"
            marginTop={40}
            onClick={handleSaveProduct}
          >
            Save Product
          </Button>
        </Flex>
      </Flex>
    </div>
  );
};

export default AddProduct;
