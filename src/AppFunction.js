import React from "react";
import ReactDOM from "react-dom";
import { vadiveluComedy, goundermaniComedy, subscribe } from "./index";
import { useDispatch, useSelector } from "react-redux";

const AppFunction = () => {
  const comedies = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <>
      <p>{comedies.isSubscribed ? "true" : "false"}</p>
      <img src={comedies.img} />
      <button
        disabled={!comedies.isSubscribed}
        onClick={() => dispatch(vadiveluComedy())}
      >
        Vadivelu
      </button>
      &nbsp;
      <button
        disabled={!comedies.isSubscribed}
        onClick={() => dispatch(goundermaniComedy())}
      >
        Goundamani
      </button>
      <button onClick={() => dispatch(subscribe())}>
        {!comedies.isSubscribed ? "Subscribe" : "Unsubscribe"}
      </button>
    </>
  );
};

export default AppFunction;
