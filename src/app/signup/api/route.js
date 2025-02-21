import connectDB from "@/lib/connectDB";

export const POST = async (request)=>{
const newUser = await request.json();
try {
    const db = await connectDB();
    const userCollection = db.collection('car-doctor');
    const existUser = userCollection.findOne({email: newUser.email });
    if(existUser){
        return Response.json({message : "User Exist"}, {status :  304});
    }
    const res = await userCollection.insertOne(newUser)
    return Response.json({message: "user Create"}, {status:200});
} catch (error) {
    return Response.json({message : "something went wrong"}, {status: 500 })
}
}