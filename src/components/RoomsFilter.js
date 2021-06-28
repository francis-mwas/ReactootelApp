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
        handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets
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
                {/* filter by room price */}
                <div className="form-group">
                    <label htmlFor="price">
                        room price ${price}
                        <input type="range" name="price" min={minPrice} max={maxPrice} id="price" value={price} onChange={handleChange} className="form-control"/>
                    </label>
                </div>
                {/* end of filter by room price */}
                {/* filter by size */}
                <div className="form-group">
                    <label htmlFor="size">room size</label>
                    <div className="size-inputs">
                        <input type="number" name="minSize" id="size" value={minSize} onChange={handleChange} className="size-input"/>
                     <input type="number" name="maxSize" id="size" value={maxSize} onChange={handleChange} className="size-input"/>  
                    </div>
                </div>
                {/* end of filter by size  */}
                 {/* filter by extras */}
                <div className="form-group">
                <div className="single-extra">
                    <input
                    type="checkbox"
                    name="breakfast"
                    id="breakfast"
                    checked={breakfast}
                    onChange={handleChange}
                    />
                    <label htmlFor="breakfast">breakfast</label>
                </div>
                <div className="single-extra">
                    <input
                    type="checkbox"
                    name="pets"
                    checked={pets}
                    onChange={handleChange}
                    />
                    <label htmlFor="breakfast">pets</label>
                </div>
                </div>
        {/* end of filtering by extras */}
            </form>
        </section>
    )
}
