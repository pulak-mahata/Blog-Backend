import mongoose from "mongoose"



export const Connection = async (username, password) => {

    const URL = `mongodb://${username}:${password}@ac-n9eczbd-shard-00-00.emi0ptu.mongodb.net:27017,ac-n9eczbd-shard-00-01.emi0ptu.mongodb.net:27017,ac-n9eczbd-shard-00-02.emi0ptu.mongodb.net:27017/?ssl=true&replicaSet=atlas-ovvimg-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{

       await mongoose.connect(URL, {useNewUrlParser:true});
       console.log("Databse Connected Sucessfully");

    } catch(error){
        console.log(`Error while connecting the dtabase` , error )
        console.log("kolkata")
    }
}

export default Connection;