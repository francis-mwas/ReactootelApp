import React, { Component } from 'react';
import defaultBcg from "../images/room-1.jpeg";
import defaultImg from "../images/room-1.jpeg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext} from "../context";
import StyledHero from '../components/Styled-Hero';


 class SingleRoom extends Component {

    constructor(props){
        super(props);
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg
        }
    }
    static contextType = RoomContext;
    render() {

        const { getRoom } = this.context;
        const room = getRoom(this.state.slug);
        if(!room){
            return <div className="error">
                <h3>no such room could be found..</h3>
                <Link to="/rooms" className="btn-primary">Back rooms</Link>
            </div>
        }
        const {name, description, capacity, size, price, extras, breakfast, pets, images} = room;
       const [mainImg, ...defaultImg] = images;
       console.log("main image: "+ images);
        return (
            <>
            <StyledHero img={mainImg || this.state.defaultBcg}>
               <Banner title={`${name} room`}>
                   <Link to="/rooms" className="btn-primary">
                       back to rooms
                   </Link>
               </Banner>
            </StyledHero>
            <section className="single-room">
                <div className="single-room-images">
                   {images.map((item, index) =>(
                       <img key={index} src={item} alt={name} />
                   ))}
                </div>
                <div className="single-room-info">
                    <article className="desc">
                        <h3>Details</h3>
                        <p>{description}</p>
                    </article>
                    <article className="info">
                        <h3>Info</h3>
                        <h6>Price: ${price}</h6>
                        <h6>Size: {size}SQFT</h6>
                        <h6>Max capacity: {
                            capacity >1 ? `${capacity} people`: `${capacity} person`
                        }</h6>
                        <h6>Pets:  
                             {pets ? "pets allowed":"no pets allowed"}
                        </h6>
                        <h6>Breakfast: {breakfast && "free breakfast included"}</h6>
                    </article>
                </div>
            </section>
            <section className="room-extras">
                <h6>Extras</h6>
                <ul className="extras">
                        {extras.map((item, index)=>{
                            return <li key={index}> - {item}</li>
                        })}
                </ul>
            </section>
            </>
        )
    }
}
export default SingleRoom;