import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Store from './Store';
import Film from './Film';

export default class Inventory extends BaseModel {
  public static table='inventories'

  @column({ isPrimary: true })
  public id: number
  @column({serializeAs:'film_id'})
  public film_id:number;
  @column({serializeAs:'store_id'})
public store_id:number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany (()=> Store,{
    foreignKey:'store_id'
  }
  
  
  )public storeId:HasMany<typeof Store>

  @hasMany (()=> Film,{
    foreignKey: 'film_id'
  })public filmId:HasMany<typeof Film>

}
