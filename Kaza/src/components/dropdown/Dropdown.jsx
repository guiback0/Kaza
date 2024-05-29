import { useState } from "react";
import PropTypes from "prop-types";
import "./dropdown.scss";

export default function Dropdown({ title, text }) {
   const [isOpen, setIsOpen] = useState(false);

   const toggleDropdown = () => {
      setIsOpen(!isOpen);
   };

   return (
      <div className="dropdown">
         <button className="dropdown-toggle" onClick={toggleDropdown}>
            <h2>{title}</h2>
            <svg
               className={`${isOpen ? "rotate-arrow" : ""}`}
               width="16"
               viewBox="0 0 32 33"
               fill="none"
               xmlns="http://www.w3.org/2000/svg">
               <path
                  d="M17.2103 21.8522C16.5409 22.5216 15.4538 22.5216 14.7843 21.8522L4.50206 11.5699C3.83265 10.9005 3.83265 9.81332 4.50206 9.1439C5.17148 8.47448 6.25862 8.47448 6.92804 9.1439L16 18.2159L25.072 9.14926C25.7414 8.47984 26.8285 8.47984 27.4979 9.14926C28.1674 9.81868 28.1674 10.9058 27.4979 11.5752L17.2157 21.8575L17.2103 21.8522Z"
                  fill="white"
               />
            </svg>
         </button>
         <ul className={`dropdown-content ${isOpen ? "dropdown-open" : ""}`}>
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
