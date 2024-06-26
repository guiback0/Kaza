import { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "./dropdown.scss";

export default function Dropdown({ title, text }) {
   const [isOpen, setIsOpen] = useState(false);

   const toggleDropdown = () => {
      setIsOpen(!isOpen);
   };

   return (
      <div className="dropdown">
         <button className="dropdown__toggle" onClick={toggleDropdown}>
            <h2 className="dropdown__title">{title}</h2>
            <FontAwesomeIcon
               className={`dropdown__icon ${isOpen ? "rotate-arrow" : ""}`}
               icon={faChevronUp}
            />
         </button>
         <ul className={`dropdown__content ${isOpen ? "dropdown-open" : ""}`}>
            {Array.isArray(text) ? (
               text.map((item, index) => <li key={index}>{item}</li>)
            ) : (
               <li>{text}</li>
            )}
         </ul>
      </div>
   );
}

Dropdown.propTypes = {
   title: PropTypes.string.isRequired,
   text: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
};
