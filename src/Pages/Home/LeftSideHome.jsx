import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const LeftSideHome = () => {
    const [category, setCategory]= useState([])

     useEffect(()=>{
          fetch('categories.json')
          .then(res=> res.json())
          .then(data=>setCategory(data))
     },[])
    return (
        <div className="">
            <h1 className="text-[#403F3F] text-xl">All Category </h1>
            {
                category.map(item=><NavLink  className={({ isActive }) =>
                isActive ? " text-[red]" : "text-xl text-[#9F9F9F] block mt-5"
              } to={`/category/${item.id}`} key={item.id}> {item.name}</NavLink>)  
            }
            
        </div>
    );
};

export default LeftSideHome;