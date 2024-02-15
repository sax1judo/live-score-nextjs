"use client";
import styled from "styled-components";
import SideMenu from "../SideMenu/sideMenu";

const Root = styled.div`
  max-width: 1080px;
  margin: auto;
  display: flex;
  color: gray;
`;
const ContentWrapper = styled.div`
  display: flex;
  flex: 0.7;
`;
const Layout = (props) => {
  return (
    <Root>
      <SideMenu games={props.gamesList} />
      <ContentWrapper>{props.children}</ContentWrapper>
    </Root>
  );
};
export default Layout;
