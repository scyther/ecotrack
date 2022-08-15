/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateLocations = /* GraphQL */ `
  subscription OnCreateLocations {
    onCreateLocations {
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
export const onUpdateLocations = /* GraphQL */ `
  subscription OnUpdateLocations {
    onUpdateLocations {
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
export const onDeleteLocations = /* GraphQL */ `
  subscription OnDeleteLocations {
    onDeleteLocations {
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
      consumerOption
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
      consumerOption
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
      consumerOption
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
