import connectDB from "@/lib/connectDB";
import bcrypt from "bcrypt";
export const POST = async (request)=>{
   
try {
    const db = await connectDB();
    const userCollection = db.collection('users');
    const newUser = await request.json();
    console.log('new User is', newUser)

 

     const existUser = await userCollection.findOne({email: newUser.email });
    if(existUser){
        return NextResponse.json({message : "User Exist"}, {status :  304});
    }
    const hashedPassword = bcrypt.hashSync(newUser.password, 14);

    const res = await userCollection.insertOne({...newUser, password : hashedPassword})
    
    return NextResponse.json({message: "user Create"}, {status:200});
} catch (error) {
    return NextResponse.json({message : "something went wrong"}, {status: 500 })
}
}

