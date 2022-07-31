// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, Product, UserProduct } = initSchema(schema);

export {
  User,
  Product,
  UserProduct
};