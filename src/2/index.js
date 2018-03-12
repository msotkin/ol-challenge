const fs = require('fs');

function findShittyListings(rootDirectory) {
  const stack = [rootDirectory];
  const filesWithLink = [];

  while (stack.length) {
    const currentPath = stack.pop();
    const currentFile = fs.statSync(currentPath);

    // if it's a directory, put its contents in our stack
    if (currentFile.isDirectory()) {
      fs.readdirSync(currentPath).forEach(fileName => {
          stack.push(`${currentPath}/${fileName}`);
        });
    // if it's a file and contains the url, store the pathname in our array
    } else {
      const fileToCheck = fs.readFileSync(currentPath, { encoding: 'utf8' });
      if (fileToCheck.includes('shittylistings.com')) {
        filesWithLink.push(currentPath);
      }
    }
  }

  return filesWithLink;
}

module.exports = findShittyListings;
