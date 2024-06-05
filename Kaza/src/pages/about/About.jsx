import Banner from "../../components/banner/Banner";
import Dropdown from "../../components/dropdown/Dropdown";
import "./about.scss";

const aboutData = [
   {
      title: "Fiabilité",
      text: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
   },
   {
      title: "Respect",
      text: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
   },
   {
      title: "Service",
      text: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
   },
   {
      title: "Sécurité",
      text: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
   },
];

const bannerProps = {
   imageSrc: "./src/assets/landscape2.jpeg",
   imageAlt: "photographie d'une montagne et d'un fleuve",
};


export default function About() {
   return (
      <div className="pagesContainer">
         <Banner {...bannerProps} />
         <div className="dropdownContainer">
            {aboutData.map((item, index) => (
               <Dropdown key={index} title={item.title} text={item.text} />
            ))}
         </div>
      </div>
   );
}
