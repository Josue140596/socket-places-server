const { Place } = require("./Place");


class Place_list {

    constructor(){
        this.places=[
            new Place('London','London is a world unto itself. The eclectic neighborhoods, which house a blend of historical landmarks and modern-day attractions, can keep you occupied for days. If its your first time in London, save time for a visit to the Tower of London, Tate Modern, Buckingham Palace or the British Museum before sitting down to a classic afternoon tea. The best time to travel to London is during the warmer months, but be warned that this is also the busiest and most expensive time of yea'),
            new Place('Rio','Rio is a world unto itself. The eclectic neighborhoods, which house a blend of historical landmarks and modern-day attractions, can keep you occupied for days. If its your first time in London, save time for a visit to the Tower of London, Tate Modern, Buckingham Palace or the British Museum before sitting down to a classic afternoon tea. The best time to travel to London is during the warmer months, but be warned that this is also the busiest and most expensive time of yea'),
            new Place('New York',' A world unto itself. The eclectic neighborhoods, which house a blend of historical landmarks and modern-day attractions, can keep you occupied for days. If its your first time in London, save time for a visit to the Tower of London, Tate Modern, Buckingham Palace or the British Museum before sitting down to a classic afternoon tea. The best time to travel to London is during the warmer months, but be warned that this is also the busiest and most expensive time of yea'),
            new Place('Texas','London is a world unto itself. The eclectic neighborhoods, which house a blend of historical landmarks and modern-day attractions, can keep you occupied for days. If its your first time in London, save time for a visit to the Tower of London, Tate Modern, Buckingham Palace or the British Museum before sitting down to a classic afternoon tea. The best time to travel to London is during the warmer months, but be warned that this is also the busiest and most expensive time of yea'),
            new Place('Paris','London is a world unto itself. The eclectic neighborhoods, which house a blend of historical landmarks and modern-day attractions, can keep you occupied for days. If its your first time in London, save time for a visit to the Tower of London, Tate Modern, Buckingham Palace or the British Museum before sitting down to a classic afternoon tea. The best time to travel to London is during the warmer months, but be warned that this is also the busiest and most expensive time of yea'),
        ];
    }    

    // Method add place
    place_add(name, description){

        const newPlace = new Place(name, description);

        this.places.push(newPlace);

        return this.places;
    }
    // Method return all places
    get_places(){
        return this.places;
    }

    // Method Increase votes
    increase_votes(id){

        this.places = this.places.map(p=>{
            if (p.id ===  id ) {
                p.votes += 1;
            }
            return p;
        });
    }
    // Method Increase votes
    decrease_votes(id){

        this.places = this.places.map(p=>{
            if (p.id ===  id ) {
                p.votes -= 1;
            }
            return p;
        });
    }

    // method delete places
    delete_place(id){
        // Retornará  que no sean igual a ese id
        // Pero, eliminará a la que tenga ese id.
        this.places = this.places.filter(p=> p.id !== id);

    }

}

module.exports={
    Place_list
}