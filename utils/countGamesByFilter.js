export const countGamesByFilter = (filter, games) => {
  const filteredGames = games.filter((game) => game.status.type === filter);
  return filteredGames.length;
};
