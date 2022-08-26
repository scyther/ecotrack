/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPackaging = /* GraphQL */ `
  query GetPackaging($id: ID!) {
    getPackaging(id: $id) {
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
export const listPackagings = /* GraphQL */ `
  query ListPackagings(
    $filter: ModelPackagingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPackagings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncPackagings = /* GraphQL */ `
  query SyncPackagings(
    $filter: ModelPackagingFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPackagings(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getMaterial = /* GraphQL */ `
  query GetMaterial($id: ID!) {
    getMaterial(id: $id) {
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
export const listMaterials = /* GraphQL */ `
  query ListMaterials(
    $filter: ModelMaterialFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMaterials(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncMaterials = /* GraphQL */ `
  query SyncMaterials(
    $filter: ModelMaterialFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMaterials(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getCategories = /* GraphQL */ `
  query GetCategories($id: ID!) {
    getCategories(id: $id) {
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
export const listCategories = /* GraphQL */ `
  query ListCategories(
    $filter: ModelCategoriesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCategories = /* GraphQL */ `
  query SyncCategories(
    $filter: ModelCategoriesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCategories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getImpactProduct = /* GraphQL */ `
  query GetImpactProduct($id: ID!) {
    getImpactProduct(id: $id) {
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
export const listImpactProducts = /* GraphQL */ `
  query ListImpactProducts(
    $filter: ModelImpactProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listImpactProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncImpactProducts = /* GraphQL */ `
  query SyncImpactProducts(
    $filter: ModelImpactProductFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncImpactProducts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getLocations = /* GraphQL */ `
  query GetLocations($id: ID!) {
    getLocations(id: $id) {
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
export const listLocations = /* GraphQL */ `
  query ListLocations(
    $filter: ModelLocationsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
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
      nextToken
      startedAt
    }
  }
`;
export const syncLocations = /* GraphQL */ `
  query SyncLocations(
    $filter: ModelLocationsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLocations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
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
      nextToken
      startedAt
    }
  }
`;
export const getConsumerOptions = /* GraphQL */ `
  query GetConsumerOptions($id: ID!) {
    getConsumerOptions(id: $id) {
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
export const listConsumerOptions = /* GraphQL */ `
  query ListConsumerOptions(
    $filter: ModelConsumerOptionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listConsumerOptions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncConsumerOptions = /* GraphQL */ `
  query SyncConsumerOptions(
    $filter: ModelConsumerOptionsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncConsumerOptions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        description
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
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
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncProducts = /* GraphQL */ `
  query SyncProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProducts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        description
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getImpactProductPackaging = /* GraphQL */ `
  query GetImpactProductPackaging($id: ID!) {
    getImpactProductPackaging(id: $id) {
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
export const listImpactProductPackagings = /* GraphQL */ `
  query ListImpactProductPackagings(
    $filter: ModelImpactProductPackagingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listImpactProductPackagings(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        packagingID
        impactProductID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncImpactProductPackagings = /* GraphQL */ `
  query SyncImpactProductPackagings(
    $filter: ModelImpactProductPackagingFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncImpactProductPackagings(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        packagingID
        impactProductID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getCategoriesImpactProduct = /* GraphQL */ `
  query GetCategoriesImpactProduct($id: ID!) {
    getCategoriesImpactProduct(id: $id) {
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
export const listCategoriesImpactProducts = /* GraphQL */ `
  query ListCategoriesImpactProducts(
    $filter: ModelCategoriesImpactProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategoriesImpactProducts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        categoriesID
        impactProductID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCategoriesImpactProducts = /* GraphQL */ `
  query SyncCategoriesImpactProducts(
    $filter: ModelCategoriesImpactProductFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCategoriesImpactProducts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        categoriesID
        impactProductID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getProductConsumerOptions = /* GraphQL */ `
  query GetProductConsumerOptions($id: ID!) {
    getProductConsumerOptions(id: $id) {
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
export const listProductConsumerOptions = /* GraphQL */ `
  query ListProductConsumerOptions(
    $filter: ModelProductConsumerOptionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProductConsumerOptions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        consumerOptionsID
        productID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncProductConsumerOptions = /* GraphQL */ `
  query SyncProductConsumerOptions(
    $filter: ModelProductConsumerOptionsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProductConsumerOptions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        consumerOptionsID
        productID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
