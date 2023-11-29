import React, { useEffect, useState } from "react";

function Fetchfile() {
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://kfc19k33sc.execute-api.us-west-1.amazonaws.com/dev/api/v2/businesses"
        ); // API endpoint
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setJsonData(data);
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
        // <p>{jsonData.business_uid}</p>

        <pre>{JSON.stringify(jsonData.result[0].business_uid, null, 2)}</pre>
      ) : (
        //<pre>{JSON.stringify(jsonData, null, 2)}</pre>
        // Render loading state or an error message if needed
        <p></p>
      )}
    </div>
  );
}

export default Fetchfile;
