import React, { useEffect, useRef } from "react";
import Moment from "react-moment";

const Message = ({ msg, user1 }) => {
  document.querySelectorAll(" p * div ");

  const scrollRef = useRef();

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msg]);

  return (
    <li
      className={`${msg.from === user1 ? "sent" : "replies"}`}
      ref={scrollRef}
    >
      <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />

      <p className="messagetext">
        <div className="messagetextwrap">
          {msg.media ? (
            <a href={msg.media} download>
              <div>
                <embed
                  src={msg.media}
                  style={{overflow:"hidden"}}
                  frameBorder="0"
                  
                  width="200px"
                  height="200px"
                />
              </div>
            </a>
          ) : null}
          {msg.text}
        </div>
        <small>
          <Moment fromNow>{msg.createdAt.toDate()}</Moment>
        </small>
      </p>
    </li>
  );
};

export default Message;
