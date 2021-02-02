const { v4: uuiv4 } = require('uuid');

class Place {
    constructor(name, description) {
        this.id = uuiv4();
        this.name = name;
        this.votes = 0;
        this.description = description;
    }
}


module.exports={
    Place
}