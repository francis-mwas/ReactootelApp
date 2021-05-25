import React, { Component } from 'react'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";


class Services extends Component {

state = {
    services:[
        {
            icon: <FaCocktail />,
            title: "Free cocktails",
            info: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, culpa? Consequuntur ad ex ratione obcaecati molestias commodi"
        },
         {
            icon: <FaHiking />,
            title: "Hikings",
            info: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, culpa? Consequuntur ad ex ratione obcaecati molestias commodi"
        },
         {
            icon: <FaShuttleVan />,
            title: "Free shuttle",
            info: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, culpa? Consequuntur ad ex ratione obcaecati molestias commodi"
        },
         {
            icon: <FaBeer />,
            title: "Strongest beer",
            info: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, culpa? Consequuntur ad ex ratione obcaecati molestias commodi"
        }
    ]
}


    render() {
        return (
            <section className="services"> 
               <Title title="services" />
               <div className="services-center">
                {this.state.services.map((item, index)=>{
                    return <artitle key="index" className="service">
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                       <p>{item.info}</p>
                    </artitle>
                })}
                </div>
            </section>
        )
    }
}
export default  Services;
