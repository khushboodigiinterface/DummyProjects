const BASE_URL = 'https://dummyjson.com';

// Function to generate the authentication token
export const generateToken = async () => {
  try {
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: 'kminchelle', 
        password: '0lelplR'    
      })
    });
    const json = await response.json();
    return json.token;
  } catch (error) {
    console.error('Error generating token:', error);
    throw error;
  }
};

// Function to fetch products
export const fetchProducts = async (token) => {
  try {
    const response = await fetch(`${BASE_URL}/products?limit=10`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    const json = await response.json();
    return json.products;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};
