 import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Address from 'App/Models/Address'

export default class AddressesController {
public async getAll(ctx: HttpContextContract){
    var result=await Address.all();
    return result;

    // var object = await ctx.auth.use('api').authenticate();
    // console.log(object);
    // var result = await Address.all();
    // return result;
}
public async getCityid(ctx: HttpContextContract){
    var result=await Address.query().preload("cityId");
    return result;
}


}
