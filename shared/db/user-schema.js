import { SchemaTypes } from "mongoose";
import mongoose from "./connection.js";

const schema=mongoose.Schema;

const userSchema=new schema({
    "email":{type:SchemaTypes.String,required:true,unique:true},
    "password":{type:SchemaTypes.String,required:true},
    "name":{type:SchemaTypes.String,required:true},
    "phone":{type:SchemaTypes.String}
});

export const userModel=mongoose.model('users',userSchema);