
export const getServicesDB = async () =>{
    const resp = await fetch('http://localhost:3000/services/api/get-all')
    const data = resp.json()
    return data
}


export const getServicesDetails = async (id) =>{
    const resp = await fetch(`http://localhost:3000/services/api/${id}`)
    const service = resp.json()
    return service
}

