import PropTypes from 'prop-types';

function CustomCard(props) {
    return (
        <div className="max-w-sm rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-105">
            <img className="w-full h-56" src={`./public/cards${props.imgSrc}`} alt={props.alt} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                    {props.title}
                </div>
                <p className="text-gray-700 text-base italic">
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
