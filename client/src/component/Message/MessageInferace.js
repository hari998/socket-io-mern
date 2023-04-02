import { useEffect, useState } from "react";
import { InputMessageBox } from "./component/InputMessageBox";
import { MessageBox } from "./component/MessageBox";
import { socket } from "../../socket";
import { ConnectionState } from "../Socket/ConnectionState";
import { ConnectionManager } from "../Socket/ConnectionManager";
import { Events } from "../Socket/MyEvents";

export function MessageInterface() {
  //socket state
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [fooEvents, setFooEvents] = useState(["nothing"]);
  const [socketReceive, setSocketReceive] = useState(["xx nothing"]);

  //useEffect for socket
  useEffect(() => {
    function onConnect() {
      console.log("connected--", socket.id);
      setIsConnected(true);
    }

    function onDisconnect() {
      console.log("disconnected--", socket.id);
      setIsConnected(false);
    }

    function onFooEvent(value) {
      console.log("fooEvent--", value);

      setFooEvents((previous) => [...previous, value]);
      // setFooEvents(fooEvents => [...fooEvents, value]);
    }

    function onSocketReceive(value) {
      console.log("fooEvent--", value);

      setSocketReceive((previous) => [...previous, value]);
      // setSocketReceive(fooEvents => [...fooEvents, value]);
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.on("socket:send", onFooEvent);
    socket.on("socket:receive", onSocketReceive);

    return () => {
      //clean-up
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("socket:send", onFooEvent);
    };
  }, []);

  //state for passing data between child to parent
  const [dataFromChild, setDataFromChild] = useState("");

  const sendDataToParent = (data) => {
    setDataFromChild(data);

    // console.log("argument from Child: ", data);
  };

  // console.log("state:", dataFromChild);

  return (
    <>
      <div>
        <ConnectionState isConnected={isConnected} />
        <Events events={fooEvents} />
        <ConnectionManager />

        <MessageBox dataFromParent={dataFromChild}></MessageBox>

        <InputMessageBox sendDataToParent={sendDataToParent} />
      </div>
    </>
  );
}
