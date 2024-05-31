import PropTypes from "prop-types";
import "./badge.scss";

export default function Badge({ tag }) {
   return (
      <div className="badge">
         <span>{tag}</span>
      </div>
   );
}

Badge.propTypes = {
   tag: PropTypes.string.isRequired,
};
