import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import FilmText from "App/Models/FilmText";

export default class FilmTextsController {


public async getAll(ctx: HttpContextContract){
    var result =await FilmText.all();
    return result;
}




}
