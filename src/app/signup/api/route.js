import connectDB from "@/lib/connectDB";
export const POST = async (request)=>{
   
try {
    const db = await connectDB();
    const userCollection = db.collection('users');
    const newUser = await request.json();
    console.log('new User is', newUser)
     const existUser = await userCollection.findOne({email: newUser.email });
    if(existUser){
        return Response.json({message : "User Exist"}, {status :  304});
    }
    const res = await userCollection.insertOne(newUser)
    return Response.json({message: "user Create"}, {status:200});
} catch (error) {
    return Response.json({message : "something went wrong"}, {status: 500 })
}
}

