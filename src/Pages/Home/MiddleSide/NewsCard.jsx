
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NewsCard = ({ data }) => {
    const {_id, image_url,  details, title, author } = data

    return (
        <div className='mb-8 border '>
            <div className='flex items-center justify-center gap-7 mb-3 bg-[#F3F3F3] p-3'>
                <div>
                    <img className='w-10 rounded-full' src={author.img} alt="" />

                </div>
                <div>
                    <p>{author.name}</p>
                    <p>{author.published_date}</p>
                </div>
            </div>
            <h1 className='text-[20px] text-[#403F3F] font-bold'>
                {title}
            </h1>
            <img className='mb-5' src={image_url} alt="" />
            {
                details.length >200 ? <h2>{details.slice(0,200)} <Link className='text-blue-600' to={`/details/${_id}`}>Read More...</Link></h2>: <h2>{details}</h2>
            }
        </div>
    );
};

NewsCard.propTypes = {
    data: PropTypes.object.isRequired
}


export default NewsCard;

