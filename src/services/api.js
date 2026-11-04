
async function apiFetch({url, request}) {
    const token = localStorage.getItem("token");

    let { auth, ...fetchOptions } = request; 
    
    if(fetchOptions.body) {
        fetchOptions.body = JSON.stringify(fetchOptions.body);
    }    

    fetchOptions.headers = {
        ...fetchOptions.headers,
        "Content-Type" : "application/json"
    }
    
    if(auth === true) {
        fetchOptions = {
            ...fetchOptions,
            headers: {
                ...fetchOptions.headers,
                Authorization: `Bearer ${token}`
            }
        };
   }

   

    const response = await fetch(url, fetchOptions);

    if(!response.ok) {
        const body = await response.json();

        console.log(body);
        throw new Error(body.message || "API Petition Error");
    }

    const data = await response.json();
    
    return data;

}

export default apiFetch;