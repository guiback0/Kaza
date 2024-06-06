import PropTypes from "prop-types";
import "./profil.scss";

export default function ProfilIcon({ hostName, hostPicture }) {
   return (
      <div className="profil">
         <p className="profil__name">{hostName}</p>
         <img
            className="profil__picture"
            src={hostPicture}
            alt="photo de profil"
         />
      </div>
   );
}

ProfilIcon.propTypes = {
   hostName: PropTypes.string.isRequired,
   hostPicture: PropTypes.string.isRequired,
};
