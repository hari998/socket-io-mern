import axios from "axios";
import { useState } from "react";
import { socket } from "../socket";

export function useSendMessage() {
  //socket- for button , disabling after send button has been pressed
  const [isLoading, setIsLoading] = useState(false);

  //state
  const [values, setValues] = useState({});
  const [data, setData] = useState(null);

  const handleChange = (event) => {
    event.preventDefault();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setData("sending...");

    //socket
    socket.timeout(5000).emit("socket:send", values, () => {
      setIsLoading(false);
    });

    const payload = { ...values };

    //config
    const config = {
      method: "POST",
      maxBodyLength: Infinity,
      url: "/send",
      data: payload,
    };

    // console.log("config--", config);

    let response = await axios(config);

    // console.log("response---", response);

    const dat = await response.data;
    if (dat) {
      setData(dat.message);
    }
  };

  return {
    values,
    handleChange,
    handleSubmit,
    data,
    isLoading,
  };
}
