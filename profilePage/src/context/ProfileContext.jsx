import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
export const DataContext = createContext();
 
const profileContext = ({children}) =>{
const [Count, setCount] = useState(0);
const [Data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3030/profile');
        setData(response.data); // Directly set fetched data
        console.log("Fetched Data:", response.data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  // console.log(Data);
  return (
    <div>
      <DataContext.Provider value={Data}>
        {children}
      </DataContext.Provider>
    </div>
  )
}
export default profileContext