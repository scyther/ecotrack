// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Packaging, Material, Categories, ImpactProduct, Locations, Product, ConsumerOptions, ProductConsumerOptions } = initSchema(schema);

export {
  Packaging,
  Material,
  Categories,
  ImpactProduct,
  Locations,
  Product,
  ConsumerOptions,
  ProductConsumerOptions
};