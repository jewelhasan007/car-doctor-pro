import connectDB from "@/lib/connectDB"
import { ObjectId } from "mongodb";


export const DELETE = async (request, {params}) =>{
    const db = await connectDB();
    const bookingCollection = db.collection('new-bookings')
    try {
       const resp = await bookingCollection.deleteOne({_id: new ObjectId(params.id)});

       return Response.json({message: "deleted the bookings", response : resp})
    } catch (error) {
        return Response.json({message: "something went wrong"})
    }
}

export const PATCH = async (request, {params}) =>{
    const db = await connectDB();
    const bookingCollection = db.collection('new-bookings')
    const {date, phone, address} = await request.json()
    try {
       const resp = await bookingCollection.updateOne({_id: new ObjectId(params.id)},
    {
        $set : {
            date,
            phone,
            address
        }
    },
    {
        upsert : true
    }
);

       return Response.json({message: "updated the bookings", response : resp})
    } catch (error) {
        return Response.json({message: "something went wrong"})
    }
}

export const GET = async (request, {params}) =>{
    const db = await connectDB();
    const bookingCollection = db.collection('new-bookings')
    try {
       const resp = await bookingCollection.findOne({_id: new ObjectId(params.id)});

       return Response.json({message: "booking found", response : resp})
    } catch (error) {
        return Response.json({message: "something went wrong"})
    }
}