"use client"
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';

const page = () => {

    const session = useSession();
    const [bookings, setBookings] = useState([]);

    const loadData = async () =>{
        const resp = await fetch(`http://localhost:3000/my-bookings/api/${session?.data?.user?.email}`);
        const data = await resp.json();
        console.log(data)
        setBookings(data?.myBookings)
    }

    useEffect(()=>{
        loadData();
    },[session])

    const handleDelete = async (id) =>{
      const deleted = await fetch(`http://localhost:3000/my-bookings/api/delete-booking/${id}`, {
        method : "DELETE"
      })
      console.log(deleted)
      const resp = await deleted.json()
      console.log(resp)
      if(resp?.response?.deletedCount > 0) {
        loadData();
      }

    }

    return (
        <div>
           <div className='container mx-auto'>
           <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Service Name</th>
        <th>Price</th>
        <th>Booking Date</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
        bookings?.map(({_id, date, price, serviceTitle })=> (
            <tr key={_id}>
            <th>1</th>
            <td>{serviceTitle}</td>
            <td>{price}</td>
            <td>{date}</td>
            <td>
                <div className='flex space-x-4'>
                    <button className='btn btn-primary'>Edit</button>
                    <button onClick={()=> handleDelete(_id)} className='btn btn-error'>Delete</button>
                </div>

            </td>
          </tr>
        ))
     }
      
    </tbody>
  </table>
</div>

           </div>
        </div>
    );
};

export default page;