import  express, {Application} from 'express';
import path from 'path';
const {AdminRoute, VandorRoute} = require('./../routes');

export default async(app : Application) => {

    app.use(express.json());
    app.use(express.urlencoded({extended : true}));

    app.use('/admin', AdminRoute);
    app.use('/vendor', VandorRoute);

    return app;
}