 import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Actor from 'App/Models/Actor'

export default class ActorsController {

public getAll(){
    var result =await Actor.all();
}








}
