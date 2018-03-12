const axios = require('axios');

const getDistanceFromShowing = require('./index');

jest.mock('axios');

describe('getDistanceFromShowing', () => {
  it('should handle a successful API response', async () => {
    const response = {
      data: {
        rows: [{
          elements: [{
            distance: {
              text: '100 mi',
            }
          }]
        }]
      }
    };
    axios.get.mockResolvedValue(response);
    const origin = 'Los Angeles, CA';
    const destination = 'Seattle, WA';
    
    return getDistanceFromShowing(origin, destination).then((res) => {
      expect(res).toBe(response.data.rows[0].elements[0].distance.text);
    })
  });
})
