"use client";
import styled from "styled-components";
import Link from "next/link";
import { parseDate } from "../../utils/parseDate";

const GamesListItem = (props) => {
  const Root = styled.div`
    color: #1e1e1e;
    background-color: #cdcdcd;
    margin: 0.5rem;
    padding: 1rem;
    display: flex;
    flex-direction: row;
    font-weight: 900;
    border-radius: 4px;
    &:hover {
      background-color: #999999;
      cursor: pointer;
    }
  `;
  const ListItem = styled.div`
    margin: 0 0 0 1rem;
  `;

  return (
    <Link
      href={{
        pathname: "/game/[id]",
        query: { data: JSON.stringify(props.game) }, // Convert the object to a JSON string and pass through router to [id].js
      }}
      as={`/game/${props.game.id}`}
      style={{ textDecoration: "none" }}
    >
      <Root>
        <ListItem>{props.game.id}</ListItem>
        <ListItem>{parseDate(props.game.date, props.game.time)}</ListItem>
        <ListItem> {props.game.name}</ListItem>
      </Root>
    </Link>
  );
};
export default GamesListItem;
