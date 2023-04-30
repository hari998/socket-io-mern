import { useEffect, useState } from "react";
import "./App.css";
import { io } from "socket.io-client";

const socket = io.connect("http://localhost:8000");

function App() {
  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState("");

  const sendMessage = () => {
    socket.emit("send_message", { message: message });
  };

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  //listen to events from server-
  //this will be called whenever we receive a message
  // - because we have socket in the dependancy arrr
  useEffect(() => {
    socket.on("receive_message", (data) => {
      // console.log("data from server--", data);
      // alert("data listening-", data.message);
      setMessageReceived(data.message);
    });
  }, [socket]);

  return (
    <div className="App">
      <input placeholder="write message.." onChange={handleChange} />
      <button onClick={sendMessage}>send message</button>
      <h2>message:</h2>
      {messageReceived}
    </div>
  );
}

export default App;
