import {Entity, model, property} from '@loopback/repository';



@model({settings: {strict: false}})

export class restaurant_type extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  _id?: string;

  @property({
    type: 'object',
    required: true,
  })
  name: object;

  @property({
    type: 'number',
    required: true,
  })
  order: number;

  @property({
    type: 'string',
    required: true,
  })
  searchSpec: string;

  @property({
    type: 'string',
  })
  iosSearch?: string;

  @property({
    type: 'string',
  })
  iosSort?: string;

  @property({
    type: 'boolean',
    default: true,
  })
  isActive?: boolean;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<restaurant_type>) {
    super(data);
  }
}

export interface RestaurantTypeRelations {
  // describe navigational properties here
}

export type RestaurantTypeWithRelations = restaurant_type & RestaurantTypeRelations;
