/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createLocations = /* GraphQL */ `
  mutation CreateLocations(
    $input: CreateLocationsInput!
    $condition: ModelLocationsConditionInput
  ) {
    createLocations(input: $input, condition: $condition) {
      id
      Product {
        id
        name
        description
        consumerOption
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      geoCordinates
      image
      picked
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      locationsProductId
    }
  }
`;
export const updateLocations = /* GraphQL */ `
  mutation UpdateLocations(
    $input: UpdateLocationsInput!
    $condition: ModelLocationsConditionInput
  ) {
    updateLocations(input: $input, condition: $condition) {
      id
      Product {
        id
        name
        description
        consumerOption
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      geoCordinates
      image
      picked
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      locationsProductId
    }
  }
`;
export const deleteLocations = /* GraphQL */ `
  mutation DeleteLocations(
    $input: DeleteLocationsInput!
    $condition: ModelLocationsConditionInput
  ) {
    deleteLocations(input: $input, condition: $condition) {
      id
      Product {
        id
        name
        description
        consumerOption
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      geoCordinates
      image
      picked
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      locationsProductId
    }
  }
`;
export const createConsumerOptions = /* GraphQL */ `
  mutation CreateConsumerOptions(
    $input: CreateConsumerOptionsInput!
    $condition: ModelConsumerOptionsConditionInput
  ) {
    createConsumerOptions(input: $input, condition: $condition) {
      id
      name
      description
      products {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateConsumerOptions = /* GraphQL */ `
  mutation UpdateConsumerOptions(
    $input: UpdateConsumerOptionsInput!
    $condition: ModelConsumerOptionsConditionInput
  ) {
    updateConsumerOptions(input: $input, condition: $condition) {
      id
      name
      description
      products {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteConsumerOptions = /* GraphQL */ `
  mutation DeleteConsumerOptions(
    $input: DeleteConsumerOptionsInput!
    $condition: ModelConsumerOptionsConditionInput
  ) {
    deleteConsumerOptions(input: $input, condition: $condition) {
      id
      name
      description
      products {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
      id
      name
      description
      ConsumerOptions {
        nextToken
        startedAt
      }
      consumerOption
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
      id
      name
      description
      ConsumerOptions {
        nextToken
        startedAt
      }
      consumerOption
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
      id
      name
      description
      ConsumerOptions {
        nextToken
        startedAt
      }
      consumerOption
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createProductConsumerOptions = /* GraphQL */ `
  mutation CreateProductConsumerOptions(
    $input: CreateProductConsumerOptionsInput!
    $condition: ModelProductConsumerOptionsConditionInput
  ) {
    createProductConsumerOptions(input: $input, condition: $condition) {
      id
      consumerOptionsID
      productID
      consumerOptions {
        id
        name
        description
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      product {
        id
        name
        description
        consumerOption
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateProductConsumerOptions = /* GraphQL */ `
  mutation UpdateProductConsumerOptions(
    $input: UpdateProductConsumerOptionsInput!
    $condition: ModelProductConsumerOptionsConditionInput
  ) {
    updateProductConsumerOptions(input: $input, condition: $condition) {
      id
      consumerOptionsID
      productID
      consumerOptions {
        id
        name
        description
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      product {
        id
        name
        description
        consumerOption
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteProductConsumerOptions = /* GraphQL */ `
  mutation DeleteProductConsumerOptions(
    $input: DeleteProductConsumerOptionsInput!
    $condition: ModelProductConsumerOptionsConditionInput
  ) {
    deleteProductConsumerOptions(input: $input, condition: $condition) {
      id
      consumerOptionsID
      productID
      consumerOptions {
        id
        name
        description
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      product {
        id
        name
        description
        consumerOption
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
