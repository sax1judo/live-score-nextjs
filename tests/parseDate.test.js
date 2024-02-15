import { parseDate } from "../utils/parseDate";

describe("parseDate Function", () => {
  it("correctly parses and formats a date and time", () => {
    const gameDate = "19.5.2023";
    const gameTime = "15:30";

    // Call the parseDate function with the provided date and time
    const formattedDate = parseDate(gameDate, gameTime);

    // Assert that the formatted date matches the expected format
    expect(formattedDate).toBe("May 19, 15:30");
  });

  // Add more test cases as needed to cover different scenarios
});
