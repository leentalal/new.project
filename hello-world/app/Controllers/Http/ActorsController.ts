import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import { schema, rules } from '@ioc:Adonis/Core/Validator'


export default class ActorsController {

    public async getAll(ctx: HttpContextContract) {
        return Database.from('actors').select('*')
    }
    public async getById(ctx: HttpContextContract) {
        var id = ctx.params.id;
        var result = await Database.from("actors").select("*").where("id", id);
        return result[0];
    }
    
    public async create(ctx: HttpContextContract) {

        var fields = ctx.request.all();
        const result = await Database
            .table('actors')
            .insert({


                first_name: fields.first_name,
                last_name: fields.last_name,
            });
        var id = result[0];

        var newObject = await Database.from("actors").select("*").where("id", id)
        return newObject[0];
    }
    public async update(ctx: HttpContextContract) {

        var fields = ctx.request.all();
        // var id =ctx.params.id;
        await Database
            .from('actors')
            .where('id', fields.id)
            .update({ first_name: fields.first_name, last_name: fields.last_name });
        return { message: "The actors has been updated!" };
    }

    public async destroy(ctx: HttpContextContract) {
        var id = ctx.params.id;

        await Database
            .from('actors')
            .where('id', id)
            .delete();
        return { message: "The actors has been deleted!" };














    }
    public async create1(ctx: HttpContextContract) {
        const newPostSchema=schema.create({

            first_name: schema.string(),
            last_name: schema.string(),
        })
        var fields =await ctx.request.validate({ schema: newPostSchema })
        
        const result = await Database
            .table('actors')
            .insert({fields,
                slug:fields.first_name,
                slug2:fields


            });
        var id = result[0];

        var newObject = await Database.from("actors").select("*").where("id", id)
        return newObject[0];
    }



}