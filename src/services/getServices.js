import axios from 'axios'

export const getServicesDB = async () =>{
    const resp = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}services/api/get-all`);
    return resp.data;
}

export const getServicesDetails = async (id) =>{
    const resp = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}services/api/${id}`);
 
    return resp.data;
}

