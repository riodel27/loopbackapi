import {Entity, model, property} from '@loopback/repository';

// this will work if string
@model({settings: {strict: false}})

// when this is enable, can't search or get city by id
// guessing this is an issue with ObjectId when searching.


// @model({settings: {strictObjectIDCoercion: true}})


export class city extends Entity {
  @property({
    type: 'string',
    id: true
    // required: true,
  })
  _id: string;

  // @property({
  //   type: 'string',
  //   id: true
  //   // required: true,
  // })
  // id: string;

  @property({
    type: 'object',
    required: true,
  })
  name: object;

  @property({
    type: 'string',
    required: true,
  })
  country: string;

  @property({
    type: 'string',
    required: true,
  })
  shortname: string;

  @property({
    type: 'object',
  })
  location?: object;

  @property({
    type: 'object',
  })
  description?: object;

  @property({
    type: 'boolean',
    required: true,
    default: true,
  })
  isLive: boolean;

  @property({
    type: 'boolean',
    required: true,
    default: true,
  })
  isActive: boolean;

  @property({
    type: 'object',
  })
  coordinate?: object;

  @property({
    type: 'string',
  })
  timezone?: string;


  // missing image key
  // model : Image

  // missing restaurant_types
  // via cities

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<city>) {
    super(data);
  }
}

export interface CityRelations {
  // describe navigational properties here
}

export type CityWithRelations = city & CityRelations;
