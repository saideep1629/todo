import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Label, Spinner, TextInput } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/user/userSlice.js";

function Login() {
  const [formData, setFormData] = useState({}); // State to store form data
  const { loading, error: errorMessage } = useSelector((state) => state.user); // Extract loading state and error from Redux
  const dispatch = useDispatch(); // Redux dispatch function
  const navigate = useNavigate(); // React Router hook for navigation

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value }); // Update form state dynamically
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(login(formData)); // Dispatch login action
    navigate("/add-todo"); // Navigate after login
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-500">
      <div className="w-full max-w-md bg-white p-10 rounded-lg shadow-md">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <Label value="Your email" />
            <TextInput
              type="email"
              placeholder="name@company.com"
              id="email"
              onChange={handleChange}
            />
          </div>
          <div>
            <Label value="Your password" />
            <TextInput
              type="password"
              placeholder="*****"
              id="password"
              onChange={handleChange}
            />
          </div>
          <Button
            gradientDuoTone="purpleToPink"
            type="submit"
            disabled={loading}
          >
            {loading ? (
              <>
                <Spinner size="sm" />
                <span className="pl-3">Loading...</span>
              </>
            ) : (
              "Login"
            )}
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
