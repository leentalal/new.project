import { DateTime } from 'luxon'
//import { BaseModel, column, HasMany, hasMany } from '@adonisjs/auth'
import{BaseModel,column,HasMany,hasMany}from '@ioc:Adonis/Lucid/Orm'
import City from './City'

export default class Address extends BaseModel {
  public static table='address'

  @column({ isPrimary: true })
  public id: number


  @column ({serializeAs:"address"})
  public address:string
  @column ({serializeAs:"address2"})
  public address2:string;
  @column ({serializeAs :"district"})
  public district:string
  @ column ({serializeAs :"city_id"})
  public  city_id:number
  @column ({serializeAs :"postal_code"})
  public postal_code:string
  @column ()
  public phone:number

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
  @hasMany (()=> City,{
    foreignKey:'city_id'
  }
  )public cityId :HasMany<typeof City>
}
