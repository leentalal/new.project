import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Customer from './Customer';
import Staff from './Staff';

export default class Payment extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column ({serializeAs:"customer_id"})
  public customer_id:number
  @column ({serializeAs:"staff_id"})
  public staff_id:number;
  @column ({serializeAs :"rental_id"})
  public rental_id:number
  @ column ({serializeAs :"amount"})
  public  amount:number
  
 





  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

@hasMany (()=> Customer,{
  foreignKey:'customer_id'
}
)public customerId:HasMany<typeof Customer> 

@hasMany(()=> Staff,{
  foreignKey:'staff_id'
}
)public staffId :HasMany<typeof Staff>
}
