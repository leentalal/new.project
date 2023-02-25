 import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database';
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Category from 'App/Models/Category';

export default class CategoriesController {


    public async getById(ctx: HttpContextContract) {
        var id =ctx.params.id;
       var result=await Category.findOrFail(id);
       return result;
    }


    public async getAll(ctx: HttpContextContract) {
       var result=await Category.all();
       return result;

    // var object = await ctx.auth.use('api').authenticate();
    // console.log(object);
    // var result = await Category.all();
    // return result;
    }
    public async create(ctx: HttpContextContract) {
        const newSchema = schema.create({
            name: schema.string(),
           
        });
        var fields =await ctx.request.validate({schema:newSchema});
       
        var categories = new  Category();
        categories.name = fields.name;
       
        var result = await categories.save();
        return result;
    }
    public async update(ctx: HttpContextContract) {

        const newSchema = schema.create({
            name: schema.string(),
            id:schema.number()
           
        });
        var fields =await ctx.request.validate({schema:newSchema});
        // var id =ctx.params.id;
        var id = fields.id;
        var categories = await Category.findOrFail(id);
        categories.name = fields.name;
        
        var result = await categories.save();
        return { message: "The categories has been updated!" };
    }

    public async destory(ctx: HttpContextContract) {
       // var id = ctx.params.id;

       var id = ctx.params.id;

        var categories = await Category.findOrFail(id);
        await categories.delete();
        return { message: "The categories has been deleted!" };














}}
