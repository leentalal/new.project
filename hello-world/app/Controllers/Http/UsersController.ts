 import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { Test } from '@japa/runner';
import { schema, rules } from '@ioc:Adonis/Core/Validator'

import User from 'App/Models/User'
import Schema from '@ioc:Adonis/Lucid/Schema';

export default class UsersController {

public async getAll(ctx:HttpContextContract){
// var test=await User.all();
// return test
var object = await ctx.auth.use('api').authenticate();
console.log(object);
var result = await User.all();
return result;


}
public async store({request,response}:HttpContextContract){

    User.create({email:request.input('email'),password:request.input('password')

    }) 
    // const newSchema = schema.create({
    //     password: schema.string(),
   
    //         email: schema.string()
    // });
    // const fields = await ctx.request.validate({schema:newSchema})
    // var users = new User();
 
    // users.email = fields.email;
    // users.password = fields.password;
    // var newUser = await users.save();
    // return newUser;
    // var object = ctx.request.all();

    // var email = object.email;
    // var password = object.password;

    // var result = await ctx.auth.attempt(email, password);
    // return result;
    return response.send('created')
    
    }
    public async login(ctx: HttpContextContract) {
        var object = ctx.request.all();
        var email = object.email;
        var password = object.password;

        var result = await ctx.auth.use('api').attempt(email, password);
        return result;

        // const data =schema.create({
        //     email:schema.string({},[
        //         rules.email(),rules.unique({
        //             table: "users",
        //             column: 'email'
        //         }),
        //         password:schema.string({},[rules.confirmed()

        //         ])

        //     ])
        // })// User.create({}) 
        // return data
    }


    public async logout(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        await ctx.auth.logout();
        return { message: "Logout" }
    }
}
