import { useEffect, useState } from "react";
import NewsCard from "./NewsCard";


const MiddleSide = () => {
      const [info,setInfo]=useState([])
      useEffect(()=>{
          fetch('news.json')
          .then(res=>res.json())
          .then(data=>setInfo(data))
      },[])
      console.log(info)
    return (
        <div>
                <h1 className="text-[#403F3F] text-[20px] font-semibold  ">Dragon News Home</h1>
                {
                   info.map(data=><NewsCard key={data._id} data={data}></NewsCard>) 
                }
        </div>
    );
};

export default MiddleSide;