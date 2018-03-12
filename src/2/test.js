const mock = require('mock-fs');

const findShittyListings = require('./index');

afterEach(() => {
  mock.restore();
});

describe('findShittyListings', () => {
  it('should return an array of file names if they contain the string "shittylistings.com"', () => {
    mock({
      website: {
        file1: '<a href="shittylistings.com">Link</a>',
        file2: '<h1>Great Webpage</h1>'
      }
    });

    expect(findShittyListings('./website')).toHaveLength(1);
    expect(findShittyListings('./website')[0]).toBe('./website/file1');
  });

  it('should be able to handle an empty file system', () => {
    mock({
      website: {},
    });

    expect(findShittyListings('./website')).toHaveLength(0);
    expect(findShittyListings('./website')[0]).toBe(undefined);
  })
});
