const fs = require('fs');

// create version files for local build
fs.writeFileSync('version.json', '');
fs.writeFileSync('version-dev.json', '');
