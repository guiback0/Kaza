import PropTypes from "prop-types";
import "./banner.scss";

export default function Banner({ imageSrc, imageAlt, title }) {
   const imgClassName = title
      ? "banner__img"
      : "banner__img no-title";

   return (
      <div className="banner">
         <img className={imgClassName} src={imageSrc} alt={imageAlt} />
         {title && <h2 className="banner__title">{title}</h2>}
      </div>
   );
}

Banner.propTypes = {
   imageSrc: PropTypes.string.isRequired,
   imageAlt: PropTypes.string.isRequired,
   title: PropTypes.string,
};
