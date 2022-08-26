/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPackaging = /* GraphQL */ `
  mutation CreatePackaging(
    $input: CreatePackagingInput!
    $condition: ModelPackagingConditionInput
  ) {
    createPackaging(input: $input, condition: $condition) {
      id
      name
      carbonFootprint
      quality
      impactproducts {
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
export const updatePackaging = /* GraphQL */ `
  mutation UpdatePackaging(
    $input: UpdatePackagingInput!
    $condition: ModelPackagingConditionInput
  ) {
    updatePackaging(input: $input, condition: $condition) {
      id
      name
      carbonFootprint
      quality
      impactproducts {
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
export const deletePackaging = /* GraphQL */ `
  mutation DeletePackaging(
    $input: DeletePackagingInput!
    $condition: ModelPackagingConditionInput
  ) {
    deletePackaging(input: $input, condition: $condition) {
      id
      name
      carbonFootprint
      quality
      impactproducts {
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
export const createMaterial = /* GraphQL */ `
  mutation CreateMaterial(
    $input: CreateMaterialInput!
    $condition: ModelMaterialConditionInput
  ) {
    createMaterial(input: $input, condition: $condition) {
      id
      name
      carbonFootprint
      quality
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateMaterial = /* GraphQL */ `
  mutation UpdateMaterial(
    $input: UpdateMaterialInput!
    $condition: ModelMaterialConditionInput
  ) {
    updateMaterial(input: $input, condition: $condition) {
      id
      name
      carbonFootprint
      quality
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteMaterial = /* GraphQL */ `
  mutation DeleteMaterial(
    $input: DeleteMaterialInput!
    $condition: ModelMaterialConditionInput
  ) {
    deleteMaterial(input: $input, condition: $condition) {
      id
      name
      carbonFootprint
      quality
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createCategories = /* GraphQL */ `
  mutation CreateCategories(
    $input: CreateCategoriesInput!
    $condition: ModelCategoriesConditionInput
  ) {
    createCategories(input: $input, condition: $condition) {
      id
      name
      ImpactProducts {
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
export const updateCategories = /* GraphQL */ `
  mutation UpdateCategories(
    $input: UpdateCategoriesInput!
    $condition: ModelCategoriesConditionInput
  ) {
    updateCategories(input: $input, condition: $condition) {
      id
      name
      ImpactProducts {
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
export const deleteCategories = /* GraphQL */ `
  mutation DeleteCategories(
    $input: DeleteCategoriesInput!
    $condition: ModelCategoriesConditionInput
  ) {
    deleteCategories(input: $input, condition: $condition) {
      id
      name
      ImpactProducts {
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
export const createImpactProduct = /* GraphQL */ `
  mutation CreateImpactProduct(
    $input: CreateImpactProductInput!
    $condition: ModelImpactProductConditionInput
  ) {
    createImpactProduct(input: $input, condition: $condition) {
      id
      name
      brand
      categoriess {
        nextToken
        startedAt
      }
      Packagings {
        nextToken
        startedAt
      }
      totalCarbonFootprint
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateImpactProduct = /* GraphQL */ `
  mutation UpdateImpactProduct(
    $input: UpdateImpactProductInput!
    $condition: ModelImpactProductConditionInput
  ) {
    updateImpactProduct(input: $input, condition: $condition) {
      id
      name
      brand
      categoriess {
        nextToken
        startedAt
      }
      Packagings {
        nextToken
        startedAt
      }
      totalCarbonFootprint
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteImpactProduct = /* GraphQL */ `
  mutation DeleteImpactProduct(
    $input: DeleteImpactProductInput!
    $condition: ModelImpactProductConditionInput
  ) {
    deleteImpactProduct(input: $input, condition: $condition) {
      id
      name
      brand
      categoriess {
        nextToken
        startedAt
      }
      Packagings {
        nextToken
        startedAt
      }
      totalCarbonFootprint
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      geoCordinates
      PinCode
      picked
      address
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      geoCordinates
      PinCode
      picked
      address
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      geoCordinates
      PinCode
      picked
      address
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createImpactProductPackaging = /* GraphQL */ `
  mutation CreateImpactProductPackaging(
    $input: CreateImpactProductPackagingInput!
    $condition: ModelImpactProductPackagingConditionInput
  ) {
    createImpactProductPackaging(input: $input, condition: $condition) {
      id
      packagingID
      impactProductID
      packaging {
        id
        name
        carbonFootprint
        quality
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      impactProduct {
        id
        name
        brand
        totalCarbonFootprint
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
export const updateImpactProductPackaging = /* GraphQL */ `
  mutation UpdateImpactProductPackaging(
    $input: UpdateImpactProductPackagingInput!
    $condition: ModelImpactProductPackagingConditionInput
  ) {
    updateImpactProductPackaging(input: $input, condition: $condition) {
      id
      packagingID
      impactProductID
      packaging {
        id
        name
        carbonFootprint
        quality
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      impactProduct {
        id
        name
        brand
        totalCarbonFootprint
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
export const deleteImpactProductPackaging = /* GraphQL */ `
  mutation DeleteImpactProductPackaging(
    $input: DeleteImpactProductPackagingInput!
    $condition: ModelImpactProductPackagingConditionInput
  ) {
    deleteImpactProductPackaging(input: $input, condition: $condition) {
      id
      packagingID
      impactProductID
      packaging {
        id
        name
        carbonFootprint
        quality
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      impactProduct {
        id
        name
        brand
        totalCarbonFootprint
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
export const createCategoriesImpactProduct = /* GraphQL */ `
  mutation CreateCategoriesImpactProduct(
    $input: CreateCategoriesImpactProductInput!
    $condition: ModelCategoriesImpactProductConditionInput
  ) {
    createCategoriesImpactProduct(input: $input, condition: $condition) {
      id
      categoriesID
      impactProductID
      categories {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      impactProduct {
        id
        name
        brand
        totalCarbonFootprint
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
export const updateCategoriesImpactProduct = /* GraphQL */ `
  mutation UpdateCategoriesImpactProduct(
    $input: UpdateCategoriesImpactProductInput!
    $condition: ModelCategoriesImpactProductConditionInput
  ) {
    updateCategoriesImpactProduct(input: $input, condition: $condition) {
      id
      categoriesID
      impactProductID
      categories {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      impactProduct {
        id
        name
        brand
        totalCarbonFootprint
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
export const deleteCategoriesImpactProduct = /* GraphQL */ `
  mutation DeleteCategoriesImpactProduct(
    $input: DeleteCategoriesImpactProductInput!
    $condition: ModelCategoriesImpactProductConditionInput
  ) {
    deleteCategoriesImpactProduct(input: $input, condition: $condition) {
      id
      categoriesID
      impactProductID
      categories {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      impactProduct {
        id
        name
        brand
        totalCarbonFootprint
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
