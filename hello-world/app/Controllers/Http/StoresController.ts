import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database';
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Store from 'App/Models/Store';

export default class StoresController {
    public async getManagerstaffid(ctx: HttpContextContract) {

        var result = await Store.query().preload("managerStaff").preload("address");
        return result;
    }
    // public async getAddressid(ctx: HttpContextContract) {

    //     var result = await Store.query().preload("");
    //     return result;
    // }

    public async getAll(ctx: HttpContextContract){
        // var result =await Store.all();
        // return result;

        var object = await ctx.auth.use('api').authenticate();
        console.log(object);
        var result = await Store.all();
        return result;
            }
            public async getById(ctx: HttpContextContract) {
                var id = ctx.params.id;
                var result =await Store.findOrFail(id);
                return result;
             
            }
            public async create(ctx: HttpContextContract) {
const newSchema=schema.create({
    manager_staff_id:schema.number(),address_id:schema.number()
})
                const fields = await ctx.request.validate({schema:newSchema});


                var stores = new Store();
                stores.managerStaffId=fields.manager_staff_id;
                stores.addressId=fields.address_id;
                var result= await stores.save();
                return result 



                // const result = await Database
                //     .table('stores')
                //     .insert({
                      
                //         manager_staff_id: fields.manager_staff_id,
                //         address_id: fields.address_id,

                //     });
                // var id = result[0];
        
                // var newObject = await Database.from("stores").select("*").where("id", id)
                // return newObject[0];
            }
            public async update(ctx: HttpContextContract) {

                // var fields = ctx.request.all();
                // await Database
                //     .from('stores')
                //     .where('id', fields.id)
                //     .update({   id: fields.id,
                //         manager_staff_id: fields.manager_staff_id,
                //         address_id: fields.address_id, });
                const newSchema=schema.create({
                    manager_staff_id:schema.number(),address_id:schema.number(),id:schema.number()
                })
                                const fields = await ctx.request.validate({schema:newSchema});
                
                var id =fields.id;
                var stores = await Store.findOrFail(id)
                stores.managerStaffId=fields.manager_staff_id;
                stores.addressId=fields.address_id;
                 var result =await stores.save();
                return { message: "The stores has been updated!" };
            }
        
            public async destory(ctx: HttpContextContract) {
                var id = ctx.params.id;

                var stores = await Store.findOrFail(id)
               await stores .delete()

               
                return { message: "The stores has been deleted!" };













}}






