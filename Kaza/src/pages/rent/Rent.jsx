import { useParams } from "react-router-dom";
import "./rent.scss";
import logements from "../../data/logements.json";
import NotFound from "../error/NotFound";
import Carousel from "../../components/carousel/Carousel";
import Badge from "../../components/badge/Badge";
import Dropdown from "../../components/dropdown/Dropdown";
import Rating from "../../components/rating/Rating";
import Profil from "../../components/profil/Profil";

export default function Rent() {
   const { id } = useParams();
   const logement = logements.find((l) => l.id === id);

   if (!logement) {
      return <NotFound />;
   }

   return (
      <div className="pagesContainer">
         <div className="rentPictures">
            <Carousel pictures={logement.pictures} name={logement.title} />
         </div>
         <div className="rentContent">
            <div className="rentInfo">
               <div className="rentTitle">
                  <h1>{logement.title}</h1>
               </div>
               <div className="rentLocation">
                  {logement.location.split("-").reverse().join(", ")}
               </div>
               <div className="rentBadges">
                  {logement.tags.map((tag) => (
                     <Badge key={tag} tag={tag} />
                  ))}
               </div>
            </div>

            <div className="renter">
               <div className="rentRating">
                  <Rating rating={logement.rating} />
               </div>
               <div className="rentProfil">
                  <Profil
                     hostName={logement.host.name}
                     hostPicture={logement.host.picture}
                  />
               </div>
            </div>
         </div>

         <div className="rentDropdown">
            <div className="dropdownDescription">
               <Dropdown title="Description" text={logement.description} />
            </div>
            <div className="dropdownEquipements">
               <Dropdown title="Équipements" text={logement.equipments} />
            </div>
         </div>
      </div>
   );
}
