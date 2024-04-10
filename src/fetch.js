async function fetchFunction(apiUrl,method,payload,nextFunction) {
    try {
      if(method && method.toLowerCase().includes("options")){
		  method = "GET"
	  }
      const options = {
        method: method || 'GET', // Default to GET if method is not provided
        headers: {
          'Content-Type': 'application/json', // Set content type to JSON
          "x-auth-token": "None",
        }
      };
  
      if (payload) {
        options.body = JSON.stringify(payload); // Include payload in request body if provided
      }
  
      const response = await fetch(apiUrl, options);
    
      const data = await response.json();
      nextFunction(data); // Send data to the next function
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
}

export default fetchFunction;
  