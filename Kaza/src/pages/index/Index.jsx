import Banner from "../../components/banner/Banner";
import Card from "../../components/card/Card";
import logements from "../../data/logements.json";
import "./index.scss";

const bannerProps = {
   imageSrc: "./src/assets/landscape1.jpeg",
   imageAlt: "photographie d'une plage en bord de falaise",
   title: "Chez vous, partout et ailleurs",
};

export default function Index() {
   return (
      <div className="index">
         <Banner {...bannerProps} />
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
