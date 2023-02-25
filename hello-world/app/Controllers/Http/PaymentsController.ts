 import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Customer from 'App/Models/Customer';
import Payment from 'App/Models/Payment';
import Staff from 'App/Models/Staff';

export default class PaymentsController {

    public async getAll(ctx: HttpContextContract){
        var result =await Payment.all();
        return result;
            }
    

    public async getStaffid(ctx: HttpContextContract) {

        var result = await Payment.query().preload("staffId").preload("customerId");
        return result;
    // }  public async getCustomerid(ctx: HttpContextContract) {

    //     var result = await Payment.query().preload("customerId");
    //     return result;
    // }

    }
}
