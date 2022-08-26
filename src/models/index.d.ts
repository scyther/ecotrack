import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type PackagingMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MaterialMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CategoriesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ImpactProductMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type LocationsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProductMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ConsumerOptionsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProductConsumerOptionsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Packaging {
  readonly id: string;
  readonly name?: string | null;
  readonly carbonFootprint?: number | null;
  readonly quality?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Packaging, PackagingMetaData>);
  static copyOf(source: Packaging, mutator: (draft: MutableModel<Packaging, PackagingMetaData>) => MutableModel<Packaging, PackagingMetaData> | void): Packaging;
}

export declare class Material {
  readonly id: string;
  readonly name?: string | null;
  readonly carbonFootprint?: number | null;
  readonly quality?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Material, MaterialMetaData>);
  static copyOf(source: Material, mutator: (draft: MutableModel<Material, MaterialMetaData>) => MutableModel<Material, MaterialMetaData> | void): Material;
}

export declare class Categories {
  readonly id: string;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Categories, CategoriesMetaData>);
  static copyOf(source: Categories, mutator: (draft: MutableModel<Categories, CategoriesMetaData>) => MutableModel<Categories, CategoriesMetaData> | void): Categories;
}

export declare class ImpactProduct {
  readonly id: string;
  readonly name?: string | null;
  readonly brand?: string | null;
  readonly totalCarbonFootprint?: number | null;
  readonly materialsUsed?: (string | null)[] | null;
  readonly packagingUsed?: string | null;
  readonly logistics?: string | null;
  readonly waterConsumption?: number | null;
  readonly energyUsed?: string | null;
  readonly date?: string | null;
  readonly energyFP?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<ImpactProduct, ImpactProductMetaData>);
  static copyOf(source: ImpactProduct, mutator: (draft: MutableModel<ImpactProduct, ImpactProductMetaData>) => MutableModel<ImpactProduct, ImpactProductMetaData> | void): ImpactProduct;
}

export declare class Locations {
  readonly id: string;
  readonly Product?: Product | null;
  readonly geoCordinates?: string | null;
  readonly PinCode?: number | null;
  readonly picked?: boolean | null;
  readonly address?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly locationsProductId?: string | null;
  constructor(init: ModelInit<Locations, LocationsMetaData>);
  static copyOf(source: Locations, mutator: (draft: MutableModel<Locations, LocationsMetaData>) => MutableModel<Locations, LocationsMetaData> | void): Locations;
}

export declare class Product {
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly ConsumerOptions?: (ProductConsumerOptions | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Product, ProductMetaData>);
  static copyOf(source: Product, mutator: (draft: MutableModel<Product, ProductMetaData>) => MutableModel<Product, ProductMetaData> | void): Product;
}

export declare class ConsumerOptions {
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly products?: (ProductConsumerOptions | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<ConsumerOptions, ConsumerOptionsMetaData>);
  static copyOf(source: ConsumerOptions, mutator: (draft: MutableModel<ConsumerOptions, ConsumerOptionsMetaData>) => MutableModel<ConsumerOptions, ConsumerOptionsMetaData> | void): ConsumerOptions;
}

export declare class ProductConsumerOptions {
  readonly id: string;
  readonly product: Product;
  readonly consumerOptions: ConsumerOptions;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<ProductConsumerOptions, ProductConsumerOptionsMetaData>);
  static copyOf(source: ProductConsumerOptions, mutator: (draft: MutableModel<ProductConsumerOptions, ProductConsumerOptionsMetaData>) => MutableModel<ProductConsumerOptions, ProductConsumerOptionsMetaData> | void): ProductConsumerOptions;
}