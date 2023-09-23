const URL='mongodb+srv://admin:admin123@my-cluster.dldeqez.mongodb.net/userdb?retryWrites=true&w=majority'

import mongoose from "mongoose";

const promise=mongoose.connect(URL);

promise.then(data=>{
    console.log('Database connected');
}).catch(err=>{
    console.log('Error encountered',err)
})

export default mongoose;