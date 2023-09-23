// import express from "express";
// import { userController } from "../controllers/user-controller";

// export const userRoute=express.Router();

// userRoute.post('/login',userController.login)
// userRoute.post('/register',userController.register)
// userRoute.get('/profile/:username',userController.profile)
// userRoute.put('/change-password',userController.changePassword)
// userRoute.delete('/remove-account',userController.removeAccount)

import express from 'express';
import { userController } from '../controllers/user-controller.js';


export const userRoute=express.Router();

userRoute.get('/profile/:username',userController.profile);
userRoute.post('/login',userController.login)
userRoute.post('/register',userController.register)
userRoute.put('/changer-password',userController.changePassword);
userRoute.delete('/remove-account',userController.deleteAccount);
