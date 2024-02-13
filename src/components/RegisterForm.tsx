import React, { useState } from "react";

export default function RegisterForm() {
  const [inputField, setInputField] = useState({
    firstName: "",
    lastName: "",
    emailName: "",
    phone: "",
    cellPhone: "",
    adress: "",
    zipCode: "",
  });

  const handleOnChange = (e: any) => {
    setInputField((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  console.log(inputField);
  return (
    <div className="container">
      <form action="#">
        <input type="text" name="firstName" onChange={handleOnChange} />
        <input type="text" name="lastName" onChange={handleOnChange} />
        <input type="text" name="emailName" onChange={handleOnChange} />
        <input type="text" name="phone" onChange={handleOnChange} />
        <input type="text" name="cellPhone" onChange={handleOnChange} />
        <input type="text" name="adress" onChange={handleOnChange} />
        <input type="text" name="zipCode" onChange={handleOnChange} />
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
}
