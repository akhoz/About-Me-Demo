import PropTypes from 'prop-types';

function CustomCard(props) {
    return (
        <div className="transition-transform duration-150 ease-in-out max-w-sm rounded-xl overflow-hidden shadow-lg">
            <img className="w-full " src={`./public/cards${props.imgSrc}`} alt={props.alt} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                    {props.title}
                </div>
                <p className="text-gray-700 text-base">
                    {props.description}
                </p>
            </div>
        </div>
    );
}

CustomCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default CustomCard;
