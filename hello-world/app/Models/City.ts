import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Country from './Country';

export default class City extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ serializeAs: "city" })
  public city: string;

  @column({ serializeAs: "country_id" })
  public country_id: number;
  @column.dateTime({ autoCreate: true })

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany (()=> Country,{
    foreignKey:'country_id'
  }
  ) public countryId :HasMany<typeof Country>
}
