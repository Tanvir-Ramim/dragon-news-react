import Header from "../../Shared/Header";
import Navbar from "../../Shared/Navbar";
import BreakingNews from "./BreakingNews";
import LeftSideHome from "./LeftSideHome";
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
                <div className="md:col-span-2 border">
              <h1>New Coming soon </h1>
                </div>
                <div className="border">
                 <RightSideHome></RightSideHome>
                </div>
            </div>
        </div>
    );
};

export default Home;