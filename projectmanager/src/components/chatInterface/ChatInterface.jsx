import React, { useEffect, useState,useRef } from "react";
import "./chatInterface.css";
import SendIcon from "@mui/icons-material/Send";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { db, auth, storage } from "../../firebase";
import {
  collection,
  query,
  where,
  onSnapshot,
  addDoc,
  Timestamp,
  orderBy,
  setDoc,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import Message from "../message/Message";


const ChatInterface = (props) => {
  const { taskId, user1, user2 } = props;
  
  const [chat, setChat] = useState("");
  const [text, setText] = useState("");
  const [file, setfile] = useState("");
  const [msgs, setMsgs] = useState([]);

  useEffect(() => {
    const getmsg = async () => {

      const msgsRef = collection(db, "messages", taskId, "chat");
      const q = query(msgsRef, orderBy("createdAt", "asc"));
  
      onSnapshot(q, (querySnapshot) => {
        let msgs = [];
        querySnapshot.forEach((doc) => {
          msgs.push(doc.data());
        });
        setMsgs(msgs);
      });
  
      // get last message b/w logged in user and selected user
      const docSnap = await getDoc(doc(db, "lastMsg", taskId));
      // if last message exists and message is from selected user
      if (docSnap.data() && docSnap.data().from !== user1) {
        // update last message doc, set unread to false
        await updateDoc(doc(db, "lastMsg", taskId), { unread: false });
      }
    };
     getmsg()
     // make sure to catch any error
    .catch(console.error); 
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();

    let url;
    if (file) {
      const fileRef = ref(
        storage,
        `filess/${new Date().getTime()} - ${file.name}`
      );
      const snap = await uploadBytes(fileRef, file);
      const dlUrl = await getDownloadURL(ref(storage, snap.ref.fullPath));
      url = dlUrl;
    }

    await addDoc(collection(db, "messages", taskId, "chat"), {
      text,
      from: user1,
      to: user2,
      createdAt: Timestamp.fromDate(new Date()),
      media: url || "",
    });

    await setDoc(doc(db, "lastMsg", taskId), {
      text,
      from: user1,
      to: user2,
      createdAt: Timestamp.fromDate(new Date()),
      media: url || "",
      unread: true,
    });

    setText("");
    setfile("");
  };


 

  return (
    <div className="chatInterface">
      <div id="frame">
        <div class="content">
          <div class="contact-profile">
            <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
            <p>Harvey Specter</p>
          </div>
          <div class="messages">
            <ul>
              <li class="sent">
                <img src="http://emilcarlsson.se/assets/mikeross.png" alt="" />
                <p>
                  How the hell am I supposed to get a jury to believe you when I
                  am not even sure that I do?!
                </p>
              </li>
              <li class="replies">
                <img
                  src="http://emilcarlsson.se/assets/harveyspecter.png"
                  alt=""
                />
                <p>
                  When you're backed against the wall, break the god damn thing
                  down.
                </p>
              </li>
              <li class="replies">
                <img
                  src="http://emilcarlsson.se/assets/harveyspecter.png"
                  alt=""
                />
                <p>Excuses don't win championships.</p>
              </li>
              <li class="sent">
                <img src="http://emilcarlsson.se/assets/mikeross.png" alt="" />
                <p>Oh yeah, did Michael Jordan tell you that?</p>
              </li>
              <li class="replies">
                <img
                  src="http://emilcarlsson.se/assets/harveyspecter.png"
                  alt=""
                />
                <p>No, I told him that.</p>
              </li>
              {msgs.length
                ? msgs.map((msg, i) => (
                    <Message key={i} msg={msg} user1={user1} />
                  ))
                : null}
             
            </ul>
          </div>
          <form className="message_form" onSubmit={handleSubmit}>
          <div class="message-input">
            <div class="wrap">
              <input
                type="text"
                placeholder="Write your message..."
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <input
                onChange={(e) => setfile(e.target.files[0])}
                type="file"
                id="file-input"
                accept="image/*"
                style={{ display: "none" }}
              />
              <label for="file-input">
                <FileUploadIcon className="attachment" />
              </label>
              <button class="submit">
                <SendIcon className="chatsendicon" />
              </button>
            </div>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
