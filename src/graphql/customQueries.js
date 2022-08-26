export const getProductID = `
query getProductID($eq: String) {
  listProducts(filter: {name: {eq: $eq}}) {
    items {
      id
    }
  }
}
`;

export const listQualities = `
query ListQualities($eq: String = "") {
  listMaterials(filter: {name: {eq: $eq}}) {
    items {
      qualities
    }
  }
}
`;

export const createImpactProduct = `
mutation MyMutation($brand: String = "", $date: String = "", $energyFP: Float = 1.5, $energyUsed: String = "", $logistics: String = "", $materialsUsed: String = "", $name: String = "", $packagingUsed: String = "", $totalCarbonFootprint: Float = 1.5, $waterConsumption: Float = 1.5) {
  createImpactProduct(input: {brand: $brand, date: $date, energyFP: $energyFP, energyUsed: $energyUsed, logistics: $logistics, materialsUsed: $materialsUsed, name: $name, packagingUsed: $packagingUsed, totalCarbonFootprint: $totalCarbonFootprint, waterConsumption: $waterConsumption}) {
    brand
    name
    totalCarbonFootprint
    waterConsumption
  }
}`;
