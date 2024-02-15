"use client";
import styled from "styled-components";
import { useSideMenu } from "../../context/sideMenuContext";
import GamesListItem from "../GamesListItem/gamesListItem";

const Root = styled.div`
  color: white;
  width: 100%;
  @media (max-width: 768px) {
    font-size: 10px;
  }
`;
const GamesList = (props) => {
  const { selectedFilter } = useSideMenu();

  // Filter the games based on the selectedFilter
  const filteredGames = props.gamesList.filter((game) => {
    if (selectedFilter === "All") {
      return game;
    } else if (selectedFilter === "Result") {
      return game.status.type === "finished";
    } else if (selectedFilter === "Live") {
      return game.status.type === "inprogress";
    } else if (selectedFilter === "Upcoming") {
      return game.status.type === "notstarted";
    }
  });

  return (
    <Root>
      {filteredGames.map((game) => {
        return <GamesListItem key={game.id} game={game} />;
      })}
      <span>{selectedFilter}</span>
    </Root>
  );
};
export default GamesList;
