import {Request, Response, NextFunction } from 'express';
import { CreateVandorInput } from '../dto';
import { Vandor } from '../models';

export const CreateVandor = async(req : Request, res: Response, next: NextFunction) => {
    const {name, address, pincode, foodType, email, password, ownerName, phone} = <CreateVandorInput>req.body;

    const createdVandor = await Vandor.create({
        name : name,
        address : address,
        pincode : pincode,
        foodType : foodType,
        email : email,
        password : password,
        salt : '',
        ownerName : ownerName,
        phone : phone,
        rating : 0,
        serviceAvailable : false,
        coverImages : []
    });

    return res.json({name, address, pincode, foodType, email, password, ownerName, phone});
}