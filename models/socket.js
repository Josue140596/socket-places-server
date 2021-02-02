const { Place_list } = require("./Place_list");


class Socket {
    constructor(io){
        this.io = io;
        this.place_list = new Place_list();
    }


    socketsEvents(){
        // On connection
        this.io.on('connection', (socket)=>{
           
            console.log('Connect client');

            // Send places
            socket.emit('current-places',this.place_list.get_places());

            // icrease votes
            socket.on('incre-place-vote',(id)=>{

                this.place_list.increase_votes(id);
                this.io.emit('current-places', this.place_list.get_places());    
            });
            // decrease votes
            socket.on('decre-place-vote',(id)=>{

                this.place_list.decrease_votes(id);
                this.io.emit('current-places', this.place_list.get_places());    
            });

            // delete places

            socket.on('delete-place', (id)=>{
                this.place_list.delete_place(id);        
                this.io.emit('current-places', this.place_list.get_places());
            });

            // place add
            socket.on('place-add', (name, description)=>{
                this.place_list.place_add(name, description);
                this.io.emit('current-places', this.place_list.get_places());
            });
        });
    }
}

module.exports=Socket;