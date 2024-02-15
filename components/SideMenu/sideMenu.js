"use client";
import styled from "styled-components";
import { useSideMenu } from "../../context/sideMenuContext";
import { countGamesByFilter } from "../../utils/countGamesByFilter";

const Root = styled.div`
  flex: 0.3;
  color: black;
  background-color: #cdcdcd;
  padding: 0.5rem;
  height: 100%;
  border-radius: 4px;
  @media (max-width: 768px) {
    font-size: 10px;
  }
`;
const FiltersTitle = styled.h2`
  padding: 0;
`;
const FiltersWrapper = styled.ul`
  padding: 0;
`;

const FilterButton = styled.li((props) => ({
  background: props.$background,
  listStyleType: "none",
  padding: "0.5rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderRadius: "4px",

  "&:hover": {
    backgroundColor: "#E6E1E6",
    cursor: "pointer",
  },
}));
const FilterGamesCount = styled.span`
  background: #1e1e1e;
  color: #ffff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 4px;
  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;

const SideMenu = (props) => {
  const { selectedFilter, setFilterSelected } = useSideMenu();

  const handleItemClick = (item) => {
    setFilterSelected(item);
  };

  console.log(props);
  return (
    <Root>
      <FiltersTitle>Filters</FiltersTitle>
      <FiltersWrapper>
        <FilterButton
          onClick={() => handleItemClick("All")}
          $background={selectedFilter === "All" ? "#E6E1E6" : ""}
        >
          <span>All</span>
          <FilterGamesCount>{props.games.length}</FilterGamesCount>
        </FilterButton>
        <FilterButton
          onClick={() => handleItemClick("Result")}
          $background={selectedFilter === "Result" ? "#E6E1E6" : ""}
        >
          Result
          <FilterGamesCount>
            {countGamesByFilter("finished", props.games)}
          </FilterGamesCount>
        </FilterButton>
        <FilterButton
          onClick={() => handleItemClick("Live")}
          $background={selectedFilter === "Live" ? "#E6E1E6" : ""}
        >
          Live
          <FilterGamesCount>
            {countGamesByFilter("inprogress", props.games)}
          </FilterGamesCount>
        </FilterButton>
        <FilterButton
          onClick={() => handleItemClick("Upcoming")}
          $background={selectedFilter === "Upcoming" ? "#E6E1E6" : ""}
        >
          Upcoming
          <FilterGamesCount>
            {countGamesByFilter("notstarted", props.games)}
          </FilterGamesCount>
        </FilterButton>
      </FiltersWrapper>
    </Root>
  );
};

export default SideMenu;
