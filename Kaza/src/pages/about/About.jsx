import AboutBanner from "../../components/banner/AboutBanner";
import Dropdown from "../../components/dropdown/Dropdown";
import "./about.scss";

export default function About() {
   return (
      <div className="pagesContainer">
         <AboutBanner />
         <div className="dropdownContainer">
            <Dropdown
               title="Fiabilité"
               text="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulierement vérifiées par nos équipes."
            />
            <Dropdown
               title="Respect"
               text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme."
            />
            <Dropdown
               title="Service"
               text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme."
            />
            <Dropdown
               title="Sécurité"
               text="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
            />
         </div>
      </div>
   );
}
