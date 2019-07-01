import {DefaultCrudRepository} from '@loopback/repository';
import {restaurant_type, RestaurantTypeRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class RestaurantTypeRepository extends DefaultCrudRepository<
  restaurant_type,
  typeof restaurant_type.prototype._id,
  RestaurantTypeRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(restaurant_type, dataSource);
  }
}
