import connectDB from "@/lib/connectDB";

export const POST = async (request) => {
const newBooking = await request.json();
const db = await connectDB();
const bookingsCollection = db.collection('new-bookings')
try {
    const res = await bookingsCollection.insertOne(newBooking)
    return NextResponse.json({message : "New Booking Successfully"}, {status : 200})
} catch (error) {
    return NextResponse.json({message : "Somethings went wrong"}, {status : 400})   
}
}