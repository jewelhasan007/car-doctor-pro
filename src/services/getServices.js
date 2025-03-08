import axios from 'axios'

export const getServicesDB = async () =>{
    const resp = await axios.get('http://localhost:3000/services/api/get-all');
    return resp.data;
}

export const getServicesDetails = async (id) =>{
    const resp = await axios.get(`http://localhost:3000/services/api/${id}`);
 
    return resp.data;
}

