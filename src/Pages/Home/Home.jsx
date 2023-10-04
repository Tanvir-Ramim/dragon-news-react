import Header from "../../Shared/Header";
import Navbar from "../../Shared/Navbar";
import BreakingNews from "./BreakingNews";
import LeftSideHome from "./LeftSideHome";
import MiddleSide from "./MiddleSide/MiddleSide";

import RightSideHome from "./RightSideHome";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4 gap-6">
                <div className="border">
            <LeftSideHome></LeftSideHome>
                </div>
                {/* this is middle position of page */}
                <div className="md:col-span-2 ">
               <MiddleSide></MiddleSide>
                </div>
                <div className="border">
                 <RightSideHome></RightSideHome>
                </div>
            </div>
        </div>
    );
};

export default Home;