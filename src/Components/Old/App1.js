import React, { useEffect, useState } from "react";

function App() {
  const [values, setValues] = useState([]);
  const [options, setOptions] = useState();
  useEffect(() => {
    fetch(
      "https://kfc19k33sc.execute-api.us-west-1.amazonaws.com/dev/api/v2/businesses"
    )
      .then((data) => data.json())
      .then((val) => setValues(val));
  }, []);

  console.log(values, "values");
  return (
    <div>
      <select onChange={(e) => setOptions(e.target.value)}>
        {values.map((opts, i) => (
          <option key={i}>{opts.business_name}</option>
        ))}
      </select>
      <h1>{options}</h1>
    </div>
  );
}

export default App;
