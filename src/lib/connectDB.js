const { MongoClient, ServerApiVersion } = require("mongodb");

let db;

const connectDB = async () =>{
if(db) return db

try{
   
     const uri = "mongodb+srv://car-doctor-pro:aTkKgLvjyNsKep8F@cluster0.edet6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
  
    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });
    db = client.db('car-doctor-pro')
    return db
}
catch(error){

}
}
export default connectDB

// id: car-doctor-pro
// pass: aTkKgLvjyNsKep8F

