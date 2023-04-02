import { FeedPageInfo } from "../component/FeedPageInfo";
import { MessageInterface } from "../component/Message/MessageInferace";

export function Feed() {
  return (
    <>
      <div>
        <FeedPageInfo></FeedPageInfo>

        <MessageInterface></MessageInterface>
      </div>
    </>
  );
}
