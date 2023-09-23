// export const userController={
//     register(request,response){
//         console.log("Body is",body)
//         response.json({message:"Register"})
//     },

//     login(request,response){
//         response.json({message:"Login"})
//     },

//     changePassword(request,response){
//         response.json({message:"Cng pass"})
//     },

//     profile(request,response){
//         response.json({message:"Profile" +username})
//     },

//     removeAccount(request,response){
//         response.json({message:"Rem Acc"})
//     }

// }

import { userModel } from "../../../shared/db/user-schema.js";
import { hashing } from "../../../shared/encryption/encrypt.js";

export const userController = {
  profile(request, response) {
    const userName = request.params.username;
    response.json({ message: userName + " profile" });
  },
  async login(request, response) {
    const userInfo = request.body;
    const doc= await userModel.findOne({'email':userInfo.email}).exec();
    if(doc && doc._id){
      const plainPass=userInfo.password;
      const dbPass=doc.password;
      if(hashing.comparePassword(plainPass,dbPass)){
        response.json({ message: "Welcome "+doc.name});
      }
      else{
        response.json({ message: "Invalid email or password" });
      }
    }
    else{
      response.json({ message: "Invalid email or password"  });
    }
    // console.log("Request body is", body);
    
  },
  async register(request, response) {
    try {
      const userInfo = request.body;
      userInfo.password=hashing.passwordHash(userInfo.password);
      const doc = await userModel.create(userInfo);
      if (doc && doc._id) {
        response.json({ message: "Registered successfully" });
      }
      else{
        response.json({message:"Registration unsuccessfull"})
      }
    } catch (err) {
      console.log("Error shown in user-controller", err);
    }
  },
  changePassword(request, response) {
    response.json({ message: "changePassword" });
  },
  deleteAccount(request, response) {
    response.json({ message: "deleteAccount" });
  },
};
