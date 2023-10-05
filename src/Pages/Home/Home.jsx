
import Header from "../../Shared/Header";
import Navbar from "../../Shared/Navbar";
import BreakingNews from "./BreakingNews";
import LeftSideHome from "./LeftSideHome";
import MiddleSide from "./MiddleSide/MiddleSide";

import RightSideHome from "./RightSideHome";

const Home = () => {
    
    return (
        <div>
            <div className="sticky top-0 bg-white">
            <Header ></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            </div>
            <div className="grid md:grid-cols-4 gap-6  ">
                <div className="border max-h-screen  sticky top-[220px] ">
            <LeftSideHome></LeftSideHome>
                </div>
                {/* this is middle position of page */}
                <div className="md:col-span-2 ">
               <MiddleSide></MiddleSide>
                </div>
                <div className="border max-h- top-[220px] max-h-[800px]  sticky custom-cursor 
                overflow-y-scroll ">
                 <RightSideHome></RightSideHome>
                </div>
            </div>
        </div>
    );
};

export default Home;