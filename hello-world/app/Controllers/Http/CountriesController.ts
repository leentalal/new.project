import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database';
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Country from 'App/Models/Country';

export default class CountriesController {



    public async getAll(ctx: HttpContextContract){
       var result= await Country.all();
       return result;
    // var object = await ctx.auth.use('api').authenticate();
    // console.log(object);
    // var result = await Country.all();
    // return result;
            }
            public async getById(ctx: HttpContextContract) {
                var id = ctx.params.id
                var result= await Country.findOrFail(id);
       return result;
            }

          


          
            public async create(ctx: HttpContextContract) {
const newSchema=schema.create({
    country:schema.string()

})
                var fields = ctx.request.validate({schema:newSchema});
                // const result = await Database
                //     .table('countries')
                //     .insert({
                        
                //         country: fields.country,
                //     });
                // var id = result[0];
        
                // var newObject = await Database.from("countries").select("*").where("id", id)
                // return newObject[0];
                var countries=new Country();
                countries.country=(await fields).country
                var result=await countries.save();
                return result;


            }
            public async update(ctx: HttpContextContract) {
                const newSchema=schema.create({
                    country:schema.string(),
                    id:schema.number()
                
                });
                                var fields = await ctx.request.validate({schema:newSchema});
                var id =fields.id;
                var countries=await Country.findOrFail(id)
                countries.country=  fields.country
                var result=await countries.save();

                return { message: "The countries has been updated!" };
            }
        
            public async destory(ctx: HttpContextContract) {
                var id = ctx.params.id;
                var countries=await Country.findOrFail(id)
                await countries.delete();
              
                return { message: "The countries has been deleted!" };














}}
