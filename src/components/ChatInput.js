import React, { useState } from "react";
import styled from "styled-components";

import { Button } from "@material-ui/core";
import { auth, db } from "../firebase.js";
import firebase from "firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function ChatInput({ channelName, channelId, chatRef }) {
  const [input, setInput] = useState("");
  const [user] = useAuthState(auth);

  const sendMessage = (e) => {
    e.preventDefault();

    if (!channelId) {
      return false;
    }

    db.collection("rooms").doc(channelId).collection("messages").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: user.displayName,
      img: user.photoURL,
    });

    // scroll back down
    chatRef.current.scrollIntoView({
      behavior: "smooth",
    });

    // clear after sending message
    setInput("");
  };
  return (
    <ChatInputContainer>
      <form action="">
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
          placeholder={`Message #${channelName}`}
        />
        <Button hidden type="submit" onClick={sendMessage}>
          Send message
        </Button>
      </form>
    </ChatInputContainer>
  );
}

export default ChatInput;

const ChatInputContainer = styled.div`
  border-radius: 20px;
  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }
  > form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
  }

  > form > button {
    display: none !important;
  }
`;
