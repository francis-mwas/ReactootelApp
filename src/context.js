import React, { Component } from 'react';
import items from './data';


const RoomContext = React.createContext();



 class RoomProvider extends Component {

    state = {
        rooms: [],
        sortedRooms:[],
        featuredRooms: [],
        loading: true
    };

    // get data
    componentDidMount(){
        let rooms = this.formatData(items);
        let featuredRooms = rooms.filter(room => room.featured === true);

        this.setState({
            rooms, featuredRooms, sortedRooms: rooms, loading: false
        });
    }
    formatData(dataItems){
        let tempItems = dataItems.map(item =>{
        let id = item.sys.id;
        let images = item.fields.images.map(image => image.fields.file.url);

        let room = {...item.fields,images, id};

        return room;
        });

        return tempItems;
       
    }

    getRoom = (slug)=> {
        let tempRooms = [...this.state.rooms];
        const room = tempRooms.find((room)=> room.slug === slug);
        return room;
    }

    render() {
     
        return (
            <RoomContext.Provider value={{...this.state, getRoom: this.getRoom}}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer;

// using HOC to access context in functional component 
export function withRoomConsumer(Component){
    return function(props){
        return (
            <RoomConsumer>
                {value=> <Component {...props} context={value}/>}
            </RoomConsumer>
        )
    }
}

export { RoomProvider, RoomConsumer, RoomContext };