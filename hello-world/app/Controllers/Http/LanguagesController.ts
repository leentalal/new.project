 import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Language from 'App/Models/Language'

export default class LanguagesController {


    public async getAll(ctx:HttpContextContract){
        var result=await Language.all()
            return result
        
        
    }
}
