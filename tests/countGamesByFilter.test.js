// Import the function to be tested
import { countGamesByFilter } from '../utils/countGamesByFilter';

describe('countGamesByFilter', () => {
  // Sample game data for testing
  const games = [
    {
      id: '1',
      status: {
        type: 'finished',
      },
    },
    {
      id: '2',
      status: {
        type: 'in_progress',
      },
    },
    {
      id: '3',
      status: {
        type: 'finished',
      },
    },
  ];

  it('should count games with the specified status type', () => {
    // Define the filter and expected result
    const filter = 'finished';
    const expectedResult = 2;

    // Call the function with the filter and games
    const result = countGamesByFilter(filter, games);

    // Use Jest's expect function to make assertions
    expect(result).toBe(expectedResult);
  });

  it('should return 0 when no games match the filter', () => {
    // Define a filter that won't match any games
    const filter = 'not_found';
    const expectedResult = 0;

    // Call the function with the filter and games
    const result = countGamesByFilter(filter, games);

    // Use Jest's expect function to make assertions
    expect(result).toBe(expectedResult);
  });
});
