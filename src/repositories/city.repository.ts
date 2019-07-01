import {DefaultCrudRepository,juggler} from '@loopback/repository';
import {city, CityRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CityRepository extends DefaultCrudRepository<
  city,
  typeof city.prototype.id,
  CityRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(city, dataSource);
  }
}
