
const API_KEY = '3cdab82538b633c1ec33f2e98e9d397f';  

async function weather(city) {  
  try {  
    const response = await fetch(` https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`);  
    if (!response.ok) throw new Error('Failed to fetch');  
    return await response.json();  
  } catch (error) {  
    console.error(error.message);  
  }  
} 

async function fetchcitiesweather() {   
    const cities = ['London', 'Paris', 'Tokyo'];  
    const promises = cities.map((city) => weather(city));  
    const users = await Promise.all(promises);  
    console.log(users);  
}  

filteredData = new Map (data);


fetchcitiesweather();