import "./banner.scss";

export default function Banner() {
   return (
      <div className="banner">
         <img
            className="imgBanner"
            src="./src/assets/landscape1.jpeg"
            alt="photographie d'une plage en bord de falaise"
         />
         <h2 className="textBanner">Chez vous, partout et ailleurs</h2>
      </div>
   );
}
