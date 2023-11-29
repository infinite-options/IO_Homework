import React, { useEffect, useState } from "react";
import axios from "axios";

function Axiosfile() {
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://example.com/api/data"); // Replace with your API endpoint
        setJsonData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once when the component mounts

  return (
    <div>
      {jsonData ? (
        // Render your component with the fetched JSON data
        <pre>{JSON.stringify(jsonData, null, 2)}</pre>
      ) : (
        // Render loading state or an error message if needed
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Axiosfile;
