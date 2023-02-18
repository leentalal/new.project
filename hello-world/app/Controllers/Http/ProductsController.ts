import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ProductsController {

  public async getAll(ctx: HttpContextContract){
return 'create new get '
  }



  public async getInit(ctx: HttpContextContract){
    return 'get id  '
      }
    
      public async create(ctx: HttpContextContract){
        return 'NEW GRETE POST'
          }
        

          public async update(ctx: HttpContextContract){
            return 'update id '
              }
            
          public async destory(ctx: HttpContextContract){
            return 'deleted id ' 
              }
            


}
