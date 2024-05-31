import Banner from "../../components/banner/Banner";
import Card from "../../components/card/Card";
import logements from "../../data/logements.json";
import "./index.scss";


export default function Index() {
   return (
      <div className="pagesContainer">
         <Banner />
         <div className="cards-container">
            <div className="grid">
               {logements.map((logement) => (
                  <Card
                     key={`${logement.title}-${logement.id}`}
                     id={logement.id}
                     title={logement.title}
                     cover={logement.cover}
                  />
               ))}
            </div>
         </div>
      </div>
   );
}
