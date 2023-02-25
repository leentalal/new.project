 import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Inventory from "App/Models/Inventory";

export default class InventoriesController {

    public async getAll(ctx: HttpContextContract){
var result =await Inventory.all()
return result;

        
    }

public async getStoreid(ctx: HttpContextContract){
    var result=await Inventory.query().preload("storeId").preload("filmId")
    return result;
}

// public async getFilmid(ctx: HttpContextContract){
//     var result=await Inventory.query().preload("filmId")
//     return result;
// }








}
