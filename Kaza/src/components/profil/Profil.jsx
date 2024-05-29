import PropTypes from "prop-types";
import "./profil.scss";

export default function ProfilIcon({ hostName, hostPicture }) {
  return (
    <>
      <div className="profil">
        <p className="name">{hostName}</p>
        <img className="picture" src={hostPicture} alt="photo de profil" />
      </div>
    </>
  );
}


ProfilIcon.propTypes = {
  hostName: PropTypes.string.isRequired,
  hostPicture: PropTypes.string.isRequired,
};