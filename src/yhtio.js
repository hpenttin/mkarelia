import React from "react";

const Kokemus =
  "Metsä-Karelia Oy - puukauppaa ja metsäpalveluita yli 40 vuoden kokemuksella";
const Esittely = (
  <div>
    <img
      className="responsive"
      src="https://metsakarelia.fi/wp-content/uploads/2017/12/seppo2.jpg"
      alt="Metsä-Karelia Seppo"
      style={{ float: "left", paddingRight: "50px", maxWidth: "300px" }}
    />
    <p>
      Metsä-Karelia Oy on täyden palvelun puukauppa ja metsäpalveluyritys.
      Tarinamme alkoi vuonna 2013 halusta tarjota paikallinen ja riippumaton
      vaihtoehto metsänomistajille Itä-Suomessa. Tehokaan organisaatiomme avulla
      pystymme tuottamaan laadukkaita metsänhoidon ja puukaupan palveluita
      kilpailukykyiseen hintaan.
    </p>
    <p>
      Toimitamme puuta useille tehtaille ja tehdasyhtiöille ja joista
      markkinatilanteen mukaan valitsemme parhaimman toimitusvaihtoehdon. Olemme
      myös ylpeitä mahdollisuudesta tarjota paikallinen kumppaniverkosto korjuu-
      ja metsuritöihin.
    </p>
    <p>
      Metsäpalveluita toimitamme Joensuun, Ilomantsin, Kiteen ja Tohmäjärven
      alueille. Työllistämme useita kokeneita metsäalan asiantuntijoita sekä
      muutamia nuoria alan taitajia.
    </p>
    <p>
      Tervetuloa metsäyhtiömme sivuille ja tutustumaan metsäpaveluihimme
      tarkemmin
    </p>
  </div>
);

const Jatkuvakasvatus = (
  <div>
    <img
      src="https://metsakarelia.s3.eu-north-1.amazonaws.com/jatkuva-kasvatus.jpg"
      alt=""
      className="responsive"
      style={{ float: "right", marginLeft: "100px", maxWidth: "600px" }}
    />
    <p>
      Jatkuvasta kasvatuksesta puhutaan paljon ja se kiinnostaa yhä suurempaa
      osaa metsänomistajista. Erirakenteinen metsänkasvatus eli jatkuva kasvatus
      tarkoittaa metsänhoitoa ilman avohakkuita. Tällöin metsästä kaadetaan vain
      järeimpiä puita, ja joista maksetaan myös korkeinta hintaa. Hakkuun
      jälkeen uusia puita nousee alikasvosreservistä ja lisää syntyy
      luontaisesti, joten metsänomistaja säästää taimikonhoitokustannuksissa.
    </p>
    <p>
      Toteutamme jatkuvan kasvatuksen mukaisia puukauppoja ja hakkuita avaimet
      käteen periaatteella. Meillä on niistä kokemusta ja näyttöjä. Halutessasi
      järjestämme tutustumiskäyntejä referenssikohteisiimme. Ota yhteys
      asiantuntijaamme ja kysy tarjous.
    </p>
  </div>
);

export default Kokemus;
export { Esittely };
export { Jatkuvakasvatus };
