import connectDB from "@/lib/connectDB"
import { ObjectId } from "mongodb";


export const DELETE = async (request, {params}) =>{
    const db = await connectDB();
    const bookingCollection = db.collection('new-bookings')
    try {
       const resp = await bookingCollection.deleteOne({_id: new ObjectId(params.id)});

       return Response.json({message: "deleted the bookings", response : resp})
    } catch (error) {
        return Response.json({message: "deleted the bookings"})
    }
}