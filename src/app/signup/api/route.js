import connectDB from "@/lib/connectDB";

export const POST = async (request)=>{
    const newUser = await request.json();
    console.log('new User is', newUser)
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


/**
 * 
 * 
 * import connectDB from "@/lib/connectDB"

export const POST = async (request) => {
try{
const db = await connectDB();
const userCollection = db.collection('users')
const newUser = await request.json();
const res = await userCollection.insertOne(newUser)

        const filter = { email: newUser.email }; // Find the user by username
        const update = { $set: { password: newUser.password } }; // Add the password field

        const result = await userCollection.updateOne(filter, update);

return Response.json({message: "new user created"})

}
catch(error){
    console.log('error message is=', error.message)
return Response.json({message: "something went wrong"})
}
}
 */