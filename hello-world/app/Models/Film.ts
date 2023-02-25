import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Language from './Language'

export default class Film extends BaseModel {
  public static table='films'

  @column({ isPrimary: true })
  public id: number

  @column ({serializeAs:"title"})
  public title:string
  @column ({serializeAs:"description"})
  public description:string;
  @column ({serializeAs:"release_year"})
  public release_year:number
  @ column ({serializeAs:"language_id"})
  public  language_id:number
  @column ()
  public original_language_id:number
  @column ()
  public rental_rate:number

  @column ()
  public length:number

  @column ()
  public replacement_cost:number
  @column ()
  public rating:number
  @column ()
  public special_features:number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany (()=>  Language,{
    foreignKey:'language_id'
  }
  ) public languageId :HasMany<typeof Language>
}
