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
            </form>
        </section>
    )
}
