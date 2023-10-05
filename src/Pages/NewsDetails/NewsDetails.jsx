import { useParams } from "react-router-dom";
import Navbar from "../../Shared/Navbar";


const NewsDetails = () => {
    const {id}=useParams()
    return (
        <div>
            <Navbar></Navbar>
             <h1>{id}</h1>
        </div>
    );
};

export default NewsDetails;