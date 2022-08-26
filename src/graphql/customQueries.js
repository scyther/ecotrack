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
mutation MyMutation($brand: String , $date: String , $energyFP: Float , $energyUsed: String , $logistics: String , $materialsUsed: String , $name: String , $packagingUsed: String , $totalCarbonFootprint: Float , $waterConsumption: Float ) {
  createImpactProduct(input: {brand: $brand, date: $date, energyFP: $energyFP, energyUsed: $energyUsed, logistics: $logistics, materialsUsed: $materialsUsed, name: $name, packagingUsed: $packagingUsed, totalCarbonFootprint: $totalCarbonFootprint, waterConsumption: $waterConsumption}) {
    brand
    name
    totalCarbonFootprint
    waterConsumption
  }
}`;

export const getProducts = `
query getProducts {
  listImpactProducts {
    items {
      name
    }
  }
}
`
export const getDateswithValues=`
query getDateswithValues($name: ModelStringInput) {
  listImpactProducts(filter: {name: $name}) {
    items {
      date
      totalCarbonFootprint
      waterConsumption
    }
  }
}
`