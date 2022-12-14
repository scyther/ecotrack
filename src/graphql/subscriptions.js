/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePackaging = /* GraphQL */ `
  subscription OnCreatePackaging {
    onCreatePackaging {
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
export const onUpdatePackaging = /* GraphQL */ `
  subscription OnUpdatePackaging {
    onUpdatePackaging {
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
export const onDeletePackaging = /* GraphQL */ `
  subscription OnDeletePackaging {
    onDeletePackaging {
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
export const onCreateMaterial = /* GraphQL */ `
  subscription OnCreateMaterial {
    onCreateMaterial {
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
export const onUpdateMaterial = /* GraphQL */ `
  subscription OnUpdateMaterial {
    onUpdateMaterial {
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
export const onDeleteMaterial = /* GraphQL */ `
  subscription OnDeleteMaterial {
    onDeleteMaterial {
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
export const onCreateCategories = /* GraphQL */ `
  subscription OnCreateCategories {
    onCreateCategories {
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
export const onUpdateCategories = /* GraphQL */ `
  subscription OnUpdateCategories {
    onUpdateCategories {
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
export const onDeleteCategories = /* GraphQL */ `
  subscription OnDeleteCategories {
    onDeleteCategories {
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
export const onCreateImpactProduct = /* GraphQL */ `
  subscription OnCreateImpactProduct {
    onCreateImpactProduct {
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
export const onUpdateImpactProduct = /* GraphQL */ `
  subscription OnUpdateImpactProduct {
    onUpdateImpactProduct {
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
export const onDeleteImpactProduct = /* GraphQL */ `
  subscription OnDeleteImpactProduct {
    onDeleteImpactProduct {
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
export const onCreateLocations = /* GraphQL */ `
  subscription OnCreateLocations {
    onCreateLocations {
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
export const onUpdateLocations = /* GraphQL */ `
  subscription OnUpdateLocations {
    onUpdateLocations {
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
export const onDeleteLocations = /* GraphQL */ `
  subscription OnDeleteLocations {
    onDeleteLocations {
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
export const onCreateConsumerOptions = /* GraphQL */ `
  subscription OnCreateConsumerOptions {
    onCreateConsumerOptions {
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
export const onUpdateConsumerOptions = /* GraphQL */ `
  subscription OnUpdateConsumerOptions {
    onUpdateConsumerOptions {
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
export const onDeleteConsumerOptions = /* GraphQL */ `
  subscription OnDeleteConsumerOptions {
    onDeleteConsumerOptions {
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
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct {
    onCreateProduct {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct {
    onUpdateProduct {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct {
    onDeleteProduct {
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
export const onCreateImpactProductPackaging = /* GraphQL */ `
  subscription OnCreateImpactProductPackaging {
    onCreateImpactProductPackaging {
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
export const onUpdateImpactProductPackaging = /* GraphQL */ `
  subscription OnUpdateImpactProductPackaging {
    onUpdateImpactProductPackaging {
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
export const onDeleteImpactProductPackaging = /* GraphQL */ `
  subscription OnDeleteImpactProductPackaging {
    onDeleteImpactProductPackaging {
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
export const onCreateCategoriesImpactProduct = /* GraphQL */ `
  subscription OnCreateCategoriesImpactProduct {
    onCreateCategoriesImpactProduct {
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
export const onUpdateCategoriesImpactProduct = /* GraphQL */ `
  subscription OnUpdateCategoriesImpactProduct {
    onUpdateCategoriesImpactProduct {
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
export const onDeleteCategoriesImpactProduct = /* GraphQL */ `
  subscription OnDeleteCategoriesImpactProduct {
    onDeleteCategoriesImpactProduct {
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
export const onCreateProductConsumerOptions = /* GraphQL */ `
  subscription OnCreateProductConsumerOptions {
    onCreateProductConsumerOptions {
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
export const onUpdateProductConsumerOptions = /* GraphQL */ `
  subscription OnUpdateProductConsumerOptions {
    onUpdateProductConsumerOptions {
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
export const onDeleteProductConsumerOptions = /* GraphQL */ `
  subscription OnDeleteProductConsumerOptions {
    onDeleteProductConsumerOptions {
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
