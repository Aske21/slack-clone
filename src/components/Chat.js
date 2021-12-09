import React from "react";
import styled from "styled-components";
import ChatInput from "./ChatInput";

// mui
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";

import { useSelector } from "react-redux";
import { selectRoomId } from "../features/appSlice";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";

function Chat() {
  const roomId = useSelector(selectRoomId);
  const [roomDetails] = useCollection(
    roomId && db.collection("rooms").doc(roomId)
  );
  const [roomMessage] = useCollection(
    roomId &&
      db
        .collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
  );

  return (
    <ChatContainer>
      <>
        <Header>
          <HeaderLeft>
            <h4>
              <strong>#Room-name</strong>
            </h4>
            <StarBorderOutlinedIcon />
          </HeaderLeft>
          <HeaderRight>
            <p>
              <InfoOutlinedIcon /> Details
            </p>
          </HeaderRight>
        </Header>
        <ChatMessages></ChatMessages>
        <ChatInput channelId={roomId} channelName={roomDetails?.data().name} />
      </>
    </ChatContainer>
  );
}

export default Chat;

const ChatContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 60px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid lightgray;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  > h4 {
    display: flex;
    text-transform: lowercase;
    margin-right: 10px;
  }

  > h4 > MuiSvgIcon-root {
    margin-left: 20px;
    font-style: 18px;
  }
`;

const HeaderRight = styled.div`
  > p {
    display: flex;
    align-items: center;
    font-size: 14px;
  }

  > p > MuiSvgIcon-root {
    margin-right: 5px !important;
    font-style: 16px;
  }
`;

const ChatMessages = styled.div``;
