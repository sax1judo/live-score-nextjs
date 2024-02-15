export const parseDate = (gameDate, gameTime) => {
  // Parse the date and time strings
  const [day, month, year] = gameDate.split(".").map(Number);
  const [hours, minutes] = gameTime.split(":").map(Number);

  // Create a Date object with the parsed values
  const date = new Date(year, month - 1, day, hours, minutes);

  // Format the date using the toLocaleString method
  return date.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  });
};
