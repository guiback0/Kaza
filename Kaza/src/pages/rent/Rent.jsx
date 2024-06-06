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

   const {
      title,
      location,
      tags,
      rating,
      host,
      description,
      equipments,
      pictures,
   } = logement;

   return (
      <div className="rent">
         <div className="rent__pictures">
            <Carousel pictures={pictures} name={title} />
         </div>
         <div className="rent__content">
            <div className="rent__info">
               <div className="rent__title">
                  <h1>{title}</h1>
               </div>
               <div className="rent__location">
                  {location.split("-").reverse().join(", ")}
               </div>
               <div className="rent__badges">
                  {tags.map((tag) => (
                     <Badge key={tag} tag={tag} />
                  ))}
               </div>
            </div>

            <div className="rent__renter">
               <div className="rent__rating">
                  <Rating rating={rating} />
               </div>
               <div className="rent__profil">
                  <Profil hostName={host.name} hostPicture={host.picture} />
               </div>
            </div>
         </div>

         <div className="rent__dropdown">
            <div className="rent__dropdown-item">
               <Dropdown title="Description" text={description} />
            </div>
            <div className="rent__dropdown-item">
               <Dropdown title="Équipements" text={equipments} />
            </div>
         </div>
      </div>
   );
}
