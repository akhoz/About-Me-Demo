import PropTypes from 'prop-types';
import { Card } from 'flowbite-react';

function CustomCard(props) {
    return (
        <Card className="max-w-sm" imgSrc={props.imgSrc} horizontal>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {props.title}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                {props.description}
            </p>
        </Card>
    );
}

CustomCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default CustomCard;
