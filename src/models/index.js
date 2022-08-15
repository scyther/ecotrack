// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Locations, Product, ConsumerOptions, ProductConsumerOptions } = initSchema(schema);

export {
  Locations,
  Product,
  ConsumerOptions,
  ProductConsumerOptions
};