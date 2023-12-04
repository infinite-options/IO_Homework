import React, { useState, useEffect } from "react";
import axios from "axios";

function FetchData() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://kfc19k33sc.execute-api.us-west-1.amazonaws.com/dev/api/v2/businesses"
      )
      .then((res) => setData(res.data.result))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="container">
      <div classNmae="mt-3">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user, index) => {
              return (
                <tr key={index}>
                  <td>{user.business_uid}</td>
                  <td>{user.business_name}</td>
                  <td>{user.business_type}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FetchData;
