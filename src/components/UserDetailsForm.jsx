import Input from "./Input";
import InputFile from "./InputFile";
import { useState } from "react";

const UserDetailsForm = ({ onSubmit }) => {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    username: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    // Prevents to automatically refreash the view and reset the values
    e.preventDefault();
    onSubmit(details);
  };

  return (
    <>
      <div>
        <h1>Your Journey to Coding Conf 2025 Starts Here!</h1>
        <h2>Secure your spot at next year's biggest coding conference.</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <InputFile />
        <Input
          inputText="Full Name"
          inputType="text"
          placeholder=""
          onChange={handleChange}
          name="name"
        />
        <Input
          inputText="Email Address"
          inputType="email"
          placeholder="example@email.com"
          onChange={handleChange}
          name="email"
        />
        <Input
          inputText="GitHub Username"
          inputType="text"
          placeholder="@yourUserName"
          onChange={handleChange}
          name="username"
        />
        <button type="submit">Generate My Ticket</button>
      </form>
    </>
  );
};

export default UserDetailsForm;
