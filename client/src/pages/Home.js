import { Outlet } from "react-router-dom";
import { Header } from "../component/Header";

export const Home = () => {
  return (
    <>
      <div>
        <div>
          <p>this is Home, ie path as "/"</p>
        </div>

        <div>
          <p>
            this is Header below and outlet below, ((outlet renders all elements
            mentioned on parent path ("here parent path is "/", see router.js)
            ))
          </p>
        </div>

        <Header />
        <p>now, here below is outlet</p>
        <Outlet />
      </div>
    </>
  );
};
