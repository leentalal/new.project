import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import { Hash } from '@adonisjs/core/build/standalone';
import Film from './Film';
import Actor from './Actor';

export default class FilmActor extends BaseModel {
  public static table='film_actors'

  @column({ isPrimary: true })
  public id: number

  @column({ serializeAs: "actor_id" })
  public actor_id: number;

  @column({ serializeAs: "film_id" })
  public film_id: number;


  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
  @hasMany(()=> Film,{
    foreignKey:'film_id'
  })public filmId :HasMany<typeof Film>
@hasMany (() => Actor,{
  foreignKey:'actor_id'
}
)public actorId:HasMany<typeof Actor >


}

