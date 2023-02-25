import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Address from './Address'
import Store from './Store'

export default class Customer extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ serializeAs: 'store_id' })
  public storeId: number
  @column({ serializeAs: ' first_name' })
  public firstName: string
  @column({ serializeAs: ' last_name' })
  public lastName: string
  @column({ serializeAs: ' email' })
  public email: string
  @column({ serializeAs: ' address_id' })
  public addressId: number
  @column({ serializeAs: ' active' })
  public active: boolean
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime
  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Store, {
    foreignKey: 'storeId',
  })
  public StoreId: BelongsTo<typeof Store>

  @belongsTo(() => Address, {
    foreignKey: 'addressId',
  })
  public AddressId: BelongsTo<typeof Address>
}