import React from 'react';
import { useContext } from 'react';
import { RoomContext } from '../context';
import Title from '../components/Title';



// get unique values 
const getUniqueValues = (items,value) =>{
    return [...new Set(items.map(item => item[value]))]
}
export default function RoomsFilter({rooms}) {
    const context = useContext(RoomContext);
   
    const { 
        handleChange, type, capacity, price, minPrice, maxaPrice, minSize, maxSize, breakfast, pets
    } = context;
    // get unique types 
    let types = getUniqueValues(rooms, 'type');
    // add 'all' type 
    types = ['all', ...types];
    // map to jsx 
    types = types.map((item, index)=>{
        return <option value={item} key={index}>
            {item}
        </option>
    })

    let guests = getUniqueValues(rooms,'capacity');
    guests = guests.map((item, index)=>{
        return <option key={index} value={item}>{item}</option>
    });
    return (
        <section className="filter-container">
            <Title title="search rooms" />
            <form className="filter-form">
                {/* select type  */}
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select name="type" id="type" value={type}className="form-control" onChange={handleChange}>
                        {types}
                    </select>
                </div>
                {/* end select type  */}
                 {/* guests type  */}
                <div className="form-group">
                    <label htmlFor="capacity">Guests</label>
                    <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange}>
                        {guests}
                    </select>
                </div>
                {/* end guests type  */}
            </form>
        </section>
    )
}
