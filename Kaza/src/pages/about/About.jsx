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
      text: "Nous sommes à votre écoute pour vous fournir une expérience de qualité. N'hésitez pas à nous contacter si vous avez des questions ou des suggestions.",
   },
   {
      title: "Sécurité",
      text: "La sécurité est notre priorité absolue. Tous les logements proposés sur notre plateforme sont conformes aux normes de sécurité en vigueur.",
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
