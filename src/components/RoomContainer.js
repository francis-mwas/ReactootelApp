import React from 'react'
import RoomsFilter from './RoomsFilter';
import RoomsList from "./RoomsList";

 function RoomContainer() {
    return (
        <div>
            <h2>Hello from rooms container</h2>
            <RoomsFilter />
            <RoomsList />
        </div>
    )
}
export default RoomContainer;
