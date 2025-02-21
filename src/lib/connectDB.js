const { MongoClient, ServerApiVersion } = require("mongodb");

let db;

const connectDB = async () =>{
if(db) return db

try{
    // const uri = process.env.NEXT_PUBLIC_MONGODB_URI
    // const uri = "mongodb+srv://next-js:<db_password>@cluster0.edet6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
    const uri = "mongodb+srv://car-doctor-pro:IAsaNIGmCbgvUS8W@cluster0.edet6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true
        },
    });
    db = client.db('car-doctor')
    return db
}
catch(error){

}
}
export default connectDB

// id: car-doctor-pro
// pass: IAsaNIGmCbgvUS8W