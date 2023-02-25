 import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Customer from "App/Models/Customer";

export default class CustomersController {

public async getAll(ctx: HttpContextContract){
    var result = await Customer.all()
    return result;
    // var object = await ctx.auth.use('api').authenticate();
    // console.log(object);
    // var result = await Customer.all();
    // return result;
}
 
public async getStoreid(ctx: HttpContextContract){
    var result =await Customer.query().preload("StoreId").preload("AddressId")
}
// public async getAddressid(ctx: HttpContextContract){
//     var result =await Customer.query().preload("AddressId")
// }

}
