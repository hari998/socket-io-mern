import { useSendMessage } from "../../../hooks/SendMessageHook";

export function InputMessageBox({ sendDataToParent }) {
  const { values, handleChange, handleSubmit, data, isLoading } =
    useSendMessage();

  return (
    <>
      <div>
        <div>
          <form onSubmit={handleSubmit}>
            <h1>Notebook</h1>
            <label>
              <b>Message</b>
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
          <p>{!data ? "" : sendDataToParent(data)}</p>
        </div>
      </div>
    </>
  );
}
