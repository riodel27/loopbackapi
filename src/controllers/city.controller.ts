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
import {city} from '../models';
import {CityRepository} from '../repositories';

export class CityController {
  constructor(
    @repository(CityRepository)
    public cityRepository : CityRepository,
  ) {}

  @post('/city', {
    responses: {
      '200': {
        description: 'City model instance',
        content: {'application/json': {schema: {'x-ts-type': city}}},
      },
    },
  })
  async create(@requestBody() city: city): Promise<city> {
    return await this.cityRepository.create(city);
  }

  @get('/city/count', {
    responses: {
      '200': {
        description: 'City model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(city)) where?: Where<city>,
  ): Promise<Count> {
    return await this.cityRepository.count(where);
  }

  @get('/city', {
    responses: {
      '200': {
        description: 'Array of City model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': city}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(city)) filter?: Filter<city>,
  ): Promise<city[]> {
    const data = await  this.cityRepository.find(filter)
    return data
    // return await this.cityRepository.find(filter);
  }

  @patch('/city', {
    responses: {
      '200': {
        description: 'City PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() city: city,
    @param.query.object('where', getWhereSchemaFor(city)) where?: Where<city>,
  ): Promise<Count> {
    return await this.cityRepository.updateAll(city, where);
  }

  @get('/city/{id}', {
    responses: {
      '200': {
        description: 'City model instance',
        content: {'application/json': {schema: {'x-ts-type': city}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<city> {
    console.log('id: ',id)
    return await this.cityRepository.findById(id);
  }

  @patch('/city/{id}', {
    responses: {
      '204': {
        description: 'City PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() city: city,
  ): Promise<void> {
    await this.cityRepository.updateById(id, city);
  }

  @put('/city/{id}', {
    responses: {
      '204': {
        description: 'City PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() city: city,
  ): Promise<void> {
    await this.cityRepository.replaceById(id, city);
  }

  @del('/city/{id}', {
    responses: {
      '204': {
        description: 'City DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.cityRepository.deleteById(id);
  }
}
