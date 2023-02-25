 import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import FilmActor from "App/Models/FilmActor";

export default class FilmActorsController {
public async getAll(){
    var result = await FilmActor.all()
return result

}

public async getFilmid(ctx: HttpContextContract){
    var result = await FilmActor.query().preload("filmId").preload("actorId")
return result

}

// public async getActorid(ctx: HttpContextContract ){
//     var result = await FilmActor.query().preload("actorId")
// return result

// }



}
