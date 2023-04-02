export function MessageBox({ dataFromParent }) {
  //render the incoming data map the object
  return (
    <>
      <div className="message-box">
        <p className="message-text">{dataFromParent}</p>
      </div>
    </>
  );
}
