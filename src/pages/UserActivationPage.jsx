import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../functions/requestMethods";
import { useParams } from "react-router-dom";

const UserActivationPage = () => {
  // URL PARAMS
  let { activation_token } = useParams();

  // RESPONSE VARIABLE
  const [response, setResponse] = useState(null);

  // FUNCTION TO CALL THE ACTIVATE USER ENDPOINT
  const activateUser = async () => {
    console.log(activation_token);
    try {
      await axios
        .post(
          `${BASE_URL}/user/activate`,
          { activation_token },
          {
            headers: {
              withCredentials: true,
              // "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
              // Accept: "application/json",
              // "Access-Control-Allow-Credentials": "true",
            },
          }
        )
        .then((res) => {
          console.log(res);
          setResponse(res);
        });
    } catch (error) {
      setResponse(error);
      console.log(error);
    }
  };

  // USEEFFECT TO CALL THE ACTIVATE USER FUNCTION

  useEffect(() => {
    activateUser();
    // eslint-disable-next-line
  }, []);

  // USEEFFECT TO UPDATE RESPONSE STATE
  // useEffect(() => {
  //   console.log(response);
  // }, [response]);
  return (
    <div className="flex items-center h-screen bg-blue-100 justify-center">
      {response?.response?.status === 409 || response?.response?.status === 200
        ? "Account has been seccessfylly activated"
        : response?.response?.data?.message ||
          (response?.data?.message === "jwt expired" &&
            "The token you provided has expired, please try again with a fresh token")}
    </div>
  );
};

export default UserActivationPage;
