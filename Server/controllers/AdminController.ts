import {Request, Response, NextFunction } from 'express';
import { CreateVandorInput } from '../dto';
import { Vandor} from '../models';
import { generatePassword, generateSalt } from '../utility';

export const findvandor = async(id: string | undefined, email?: string){
    if(email){
        return await Vandor.findOne({email : email});
    }else{
        return await Vandor.findById(id);
    }
}

export const CreateVandor = async(req : Request, res: Response, next: NextFunction) => {
    const {name, address, pincode, foodType, email, password, ownerName, phone} = <CreateVandorInput>req.body;

    const existingVandor = await findvandor('', email);
    if(existingVandor){
        return res.json({
            'message' : 'A vandor with this email address is already existed'
        });
    }

    const salt = await generateSalt();
    const userPassword = await generatePassword(password, salt);

    const createdVandor = await Vandor.create({
        name : name,
        address : address,
        pincode : pincode,
        foodType : foodType,
        email : email,
        password : userPassword,
        salt : salt,
        ownerName : ownerName,
        phone : phone,
        rating : 0,
        serviceAvailable : false,
        coverImages : []
    });

    return res.status(201).json(createdVandor);
}

export const GetVandors = async(req: Request, res:Response, next: NextFunction) => {
    const Vandors = await Vandor.find();
    if(Vandors){
        return res.status(200).json(Vandors);
    }
    return res.status(400).json({'message' : 'No Vandors Found'});
}

export const GetVandorsById = async(req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    if(id){
        const vandor = await findvandor(id);
        if(vandor){
            return res.status(200).json(vandor);
        }
        return res.status(400).json({'message' : 'Vandor not found'});
    }
    return res.status(500).json({'message' : 'Vandor id not found'});
}