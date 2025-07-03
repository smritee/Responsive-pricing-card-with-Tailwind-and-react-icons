import PropTypes from "prop-types";
import { RxCheckCircled } from "react-icons/rx";

const Feature = ({feature}) => {
    return (
        <div>
            <p className="flex items-center"><RxCheckCircled className="text-red-600 font-extrabold m-3" ></RxCheckCircled>{feature}</p>
        </div>
    );
};

Feature.propTypes={
    feature:PropTypes.string
}
export default Feature;