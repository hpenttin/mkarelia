import React from "react";
import Karuselli from "./carousel";
import Kokemus, { Esittely, Jatkuvakasvatus } from "./yhtio";
import Puukauppa, { Ilmanavohakkuuta, Metsuripalvelut } from "./palvelut";
import Vinkit from "./vinkit";
import Yhteystiedot from "./yhteystiedot";
import Lomake from "./lomake";
import Popup from "./popup";

function Etusivu() {
  return (
    <div>
      <div>
        <Karuselli />
      </div>
      <div className="kappale">
        <h1 className="ekaotsikko kappale">{Kokemus}</h1>
        <h2 className="esittely">{Esittely}</h2>
      </div>
      <div>
        <h2 className="ekaotsikko">
          Kaikki metsäpalvelut joustavasti ja kustannustehokkaasti
        </h2>
        <div className="imageholder">
          <div className="hoover center">
            <h3>Puukauppa</h3>
            <a className=" kuva" href="//metsakarelia.fi/puukauppa">
              {Puukauppa}
            </a>
          </div>
          <div className="hoover center">
            <h3>Jatkuva kasvatus</h3>
            <a className=" kuva" href="//metsakarelia.fi/jatkuva_kasvatus">
              {Ilmanavohakkuuta}
            </a>
          </div>
          <div className="hoover center">
            <h3>Metsuripalvelut</h3>
            <a className="kuva" href="//metsakarelia.fi/metsuripalvelut">
              {Metsuripalvelut}
            </a>
          </div>
          <section className="kappale">
            <h2 className="ekaotsikko ">
              Puukauppaa ja korjuuta ilman avohakkuita - jatkuva kasvatus
            </h2>
            <p className="marginaali">{Jatkuvakasvatus}</p>
          </section>
          <div>
            <h2 className="ekaotsikko">
              Yleisimpiä metsänomistajien esittämiä kysymyksiä
            </h2>
          </div>
        </div>
        <Vinkit />
      </div>
      <div className="kappale">
        <h2 className="ekaotsikko">Yhteystiedot</h2>
        <Yhteystiedot />
      </div>
      <h2 className="ekaotsikko">
        Tarjouspyyntölomake – olemme valmiina palvelemaan
      </h2>
      <p className="lomake">
        Voit jättää yhteydenottopyynnön oheisella lomakkeella. Jotta voimme
        käsitellä tarjouspyynnön tarvitsemme yhteystietosi sekä kuvauksen
        toivotusta palvelusta - kiitos.
      </p>
      <div className="lomake">
        <Lomake />
      </div>
      <div>
        <Popup />
      </div>
    </div>
  );
}

export default Etusivu;
