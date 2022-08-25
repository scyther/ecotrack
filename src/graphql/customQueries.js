export const getProductID = `
query getProductID($eq: String) {
  listProducts(filter: {name: {eq: $eq}}) {
    items {
      id
    }
  }
}
`;