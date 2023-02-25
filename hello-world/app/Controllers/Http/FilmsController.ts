 import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Film from 'App/Models/Film'

export default class FilmsController {

    public async getAll(ctx: HttpContextContract){
      var result = await Film.all();
      return result;
          }
          public async getLanguageid(ctx: HttpContextContract){
 var result = await Film.query().preload("languageId") 
 return result;


          }
        
        








}
