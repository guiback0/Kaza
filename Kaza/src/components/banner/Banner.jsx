import "./banner.scss";
import PropTypes from "prop-types";


export default function Banner({ imageSrc, imageAlt, title }) {
   return (
      <div className="banner">
         <img className="imgBanner" src={imageSrc} alt={imageAlt} />
         {title && <h2 className="textBanner">{title}</h2>}
      </div>
   );
}

Banner.propTypes = {
   imageSrc: PropTypes.string.isRequired,
   imageAlt: PropTypes.string.isRequired,
   title: PropTypes.string,
};