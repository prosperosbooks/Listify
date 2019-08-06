import { useState } from "react";

// initialVal gets passed down FROM other component
export default initialVal => {
  const [value, setValue] = useState(initialVal);

  // set private handler functions here
  const handleChange = e => {
    setValue(e.target.value);
  };

  const reset = () => {
    setValue("");
  };

  // return private handler functions to pass down TO other component
  return [value, handleChange, reset];
};

