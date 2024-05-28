import { useParams } from "react-router-dom";
import logements from "../../data/logements.json";
import NotFound from "../error/NotFound";
import Badge from "../../components/badge/Badge";

export default function Rent() {
   const { id } = useParams();
   const logement = logements.find((l) => l.id === id);

   if (!logement) {
      return <NotFound />;
   }

   return (
      <div className="pagesContainer">
         <div className="rentTitle">
            <h1>{logement.title}</h1>
            <div className="rentLocation">
               {logement.location.split("-").reverse().join(", ")}
            </div>
            <div className="badges">
               {logement.tags.map((tag) => (
                  <Badge key={tag} tag={tag} />
               ))}
            </div>
         </div>
      </div>
   );
}
