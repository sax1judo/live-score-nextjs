"use client";
import styled from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";
import LiveProgressBar from "../../components/LiveProgressBar/LiveProgressBar";
import { parseDate } from "../../utils/parseDate";
import { gameStatusEnum } from "../../utils/enums";
import GlobalStylesWrapper from "../../components/GlobalStylesWrapper/GlobalStylesWrapper";

const Root = styled.div`
  height: 100vh;
  margin: auto;
  font-size: 1.5em;
  text-align: center;
  color: #ffffff;
  background: #3d3d3d;
`;
const InnerWrapper = styled.div`
  max-width: 900px;
  margin: auto;
`;
const CountryTitle = styled.div`
  font-size: 1.2rem;
  padding-top: 3rem;
  margin-bottom: 0.5rem;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
const LeagueTitle = styled.div`
  font-size: 2rem;
  margin-bottom: 0.5rem;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const GameStatus = styled.div((props) => ({
  fontSize: "1rem",
  marginBottom: "5rem",
  color: props.$gameStatusColor,
  textTransform: "uppercase",
  "@media (max-width: 768px)": {
    fontSize: "12px",
  },
}));

const ResultWrapper = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 5rem;
  justify-content: space-evenly;
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    font-size: 64px;
  }
`;
const TeamsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
const TeamsWrapperItem = styled.div`
  flex: 1;
  font-size: 2rem;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
const BackIcon = styled.img`
  background: url("/assets/arrow.svg");
  width: 50px;
  height: 50px;
  transform: rotate(90deg);
  border-radius: 50%;
  border: 2px solid;
`;
const Game = () => {
  const router = useRouter();
  const { data } = router.query;
  const parsedData = data ? JSON.parse(data) : null;

  const gameResult =
    parsedData.status.type === "notstarted" ||
    parsedData.status.type === "canceled"
      ? "0 - 0"
      : `${parsedData.homeScore?.current} - ${parsedData.awayScore?.current}`;

  return (
    <GlobalStylesWrapper>
      <Root>
        <InnerWrapper>
          <CountryTitle>{parsedData.country}</CountryTitle>
          <LeagueTitle>{parsedData.competition}</LeagueTitle>
          <GameStatus
            $gameStatusColor={gameStatusEnum[parsedData.status.type].color}
          >
            {gameStatusEnum[parsedData.status.type].name ===
            gameStatusEnum.notstarted.name
              ? parseDate(parsedData.date, parsedData.time)
              : gameStatusEnum[parsedData.status.type].name}
          </GameStatus>

          <ResultWrapper>{gameResult}</ResultWrapper>

          <TeamsWrapper>
            <TeamsWrapperItem>{parsedData.homeTeam.name}</TeamsWrapperItem>
            <TeamsWrapperItem>
              <LiveProgressBar progress={parsedData.liveStatus} />
            </TeamsWrapperItem>
            <TeamsWrapperItem>{parsedData.awayTeam.name}</TeamsWrapperItem>
          </TeamsWrapper>
          <Link
            href={"/"}
            style={{
              position: "fixed",
              bottom: "0",
              color: "white",
              left: "5px",
            }}
          >
            <BackIcon />
          </Link>
        </InnerWrapper>
      </Root>
    </GlobalStylesWrapper>
  );
};
export default Game;
