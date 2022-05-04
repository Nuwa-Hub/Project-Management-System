import React, { useEffect, useRef } from "react";
import Moment from "react-moment";

const Message = ({ msg, user1 }) => {
  const scrollRef = useRef();

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msg]);

  return (
    <li class={`${msg.from === user1 ? "sent" : "replies"}`} ref={scrollRef}>
      <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />

      <p className="messagetext">
        <div>{msg.text}</div>
        <small>
          <Moment fromNow>{msg.createdAt.toDate()}</Moment>
        </small>
      </p>
    </li>
  );
};

export default Message;
