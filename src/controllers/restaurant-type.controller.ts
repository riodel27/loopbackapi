import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {restaurant_type} from '../models';
import {RestaurantTypeRepository} from '../repositories';

export class RestaurantTypeController {
  constructor(
    @repository(RestaurantTypeRepository)
    public restaurantTypeRepository : RestaurantTypeRepository,
  ) {}

  @post('/restaurant_type', {
    responses: {
      '200': {
        description: 'RestaurantType model instance',
        content: {'application/json': {schema: {'x-ts-type': restaurant_type}}},
      },
    },
  })
  async create(@requestBody() restaurantType: restaurant_type): Promise<restaurant_type> {
    return await this.restaurantTypeRepository.create(restaurantType);
  }

  @get('/restaurant_type/count', {
    responses: {
      '200': {
        description: 'RestaurantType model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(restaurant_type)) where?: Where<restaurant_type>,
  ): Promise<Count> {
    return await this.restaurantTypeRepository.count(where);
  }

  @get('/restaurant_type', {
    responses: {
      '200': {
        description: 'Array of RestaurantType model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': restaurant_type}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(restaurant_type)) filter?: Filter<restaurant_type>,
  ): Promise<restaurant_type[]> {
    return await this.restaurantTypeRepository.find(filter);
  }

  @patch('/restaurant_type', {
    responses: {
      '200': {
        description: 'RestaurantType PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() restaurantType: restaurant_type,
    @param.query.object('where', getWhereSchemaFor(restaurant_type)) where?: Where<restaurant_type>,
  ): Promise<Count> {
    return await this.restaurantTypeRepository.updateAll(restaurantType, where);
  }

  @get('/restaurant_type/{id}', {
    responses: {
      '200': {
        description: 'RestaurantType model instance',
        content: {'application/json': {schema: {'x-ts-type': restaurant_type}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<restaurant_type> {
    return await this.restaurantTypeRepository.findById(id);
  }

  @patch('/restaurant_type/{id}', {
    responses: {
      '204': {
        description: 'RestaurantType PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() restaurantType: restaurant_type,
  ): Promise<void> {
    await this.restaurantTypeRepository.updateById(id, restaurantType);
  }

  @put('/restaurant_type/{id}', {
    responses: {
      '204': {
        description: 'RestaurantType PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() restaurantType: restaurant_type,
  ): Promise<void> {
    await this.restaurantTypeRepository.replaceById(id, restaurantType);
  }

  @del('/restaurant_type/{id}', {
    responses: {
      '204': {
        description: 'RestaurantType DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.restaurantTypeRepository.deleteById(id);
  }
}
