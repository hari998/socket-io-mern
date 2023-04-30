import { useSendMessage } from "../../../hooks/SendMessageHook";

export function InputMessageBox({ sendDataToParent }) {
  const { values, handleChange, handleSubmit, data, isLoading } =
    useSendMessage();

  return (
    <>
      <div className="input-message-box">
        <div>
          <form onSubmit={handleSubmit}>
            <h1>message box</h1>
            <label>
              <b>Write Message: </b>
            </label>
            <input
              type="text"
              placeholder="write a message"
              name="message"
              value={values.message}
              onChange={handleChange}
              required
            ></input>

            <button type="submit" disabled={isLoading}>
              <span>send</span>
            </button>
          </form>
        </div>

        <div>
          <p>something will appear here..</p>
          <p>{!data ? "" : sendDataToParent(data)}</p>
          <p>something will appear here..</p>
        </div>
      </div>
    </>
  );
}
