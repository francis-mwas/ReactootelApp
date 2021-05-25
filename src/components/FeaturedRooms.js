import React, { Component } from 'react'
import { RoomContext } from "../context";

 class FeaturedRooms extends Component {
    static contextType = RoomContext;

    render() {
        const { email, name } = {email:"mwas@gmail.com", name:"mwas"};

        console.log(email, name);

        return (
            <div>
                <h1>Hello { name }, is this your email: { email }</h1>
            </div>
        )
    }
}

export default FeaturedRooms;