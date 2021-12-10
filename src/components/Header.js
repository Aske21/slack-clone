import React from "react";
import styled from "styled-components";

// material UI
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

function Header() {
  const [user] = useAuthState(auth);

  return (
    <div>
      <HeaderContainer>
        <HeaderLeft>
          <HeaderAvatar
            onClick={() => auth.signOut()}
            alt={user?.displayName}
            src={user?.photoUrl}
          />
          <AccessTimeIcon />
        </HeaderLeft>

        <HeaderSearch>
          <SearchIcon />
          <input type="text" placeholder="Search New Workspace" />
        </HeaderSearch>

        <HeaderRight>
          <HelpOutlineIcon />
        </HeaderRight>
      </HeaderContainer>
    </div>
  );
}

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  padding: 10px 0;
  align-items: center;
  justify-content: space-between;
  background-color: var(--slack-color);
  color: white;
  box-shadow: 0 1px 0 0 rgb(255 255 255 / 10%);
  // height: 20px;
`;

const HeaderAvatar = styled(Avatar)`
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;

const HeaderLeft = styled.div`
  display: flex;
  flex: 0.3;
  align-items: center;
  margin-left: 20px;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
`;

const HeaderSearch = styled.div`
  display: flex;
  flex: 0.4;
  opacity: 1;
  border-radius: 6px;
  background-color: #421f44;
  text-align: center;
  padding: 0px;
  color: white;
  border: 1px solid gray;

  > input {
    background-color: transparent;
    border: none;
    min-width: 30vw;
    outline: none;
    color: white;
  }
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  flex: 0.3;
  align-items: flex-end;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 20px;
  }
`;
