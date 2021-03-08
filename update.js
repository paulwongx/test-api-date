const fs = require('fs');

const update = () => {
    const dateObj = {Date: new Date().toISOString()}
    fs.writeFileSync('./date.json',JSON.stringify(dateObj));
}

update();