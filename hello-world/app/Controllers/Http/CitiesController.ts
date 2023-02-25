 import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import City from "App/Models/City";

export default class CitiesController {

public async getCountryid(ctx: HttpContextContract){
    var result =await City.query().preload("countryId")
    return result;
}
public async getAll(ctx: HttpContextContract){
    var result =await City.all()
    return result;
    // var object = await ctx.auth.use('api').authenticate();
    // console.log(object);
    // var result = await City.all();
    // return result;
}

}
