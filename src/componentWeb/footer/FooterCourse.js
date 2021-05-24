import React from "react";
// import "./footerCourse.css";
const FooterCourse = () => {
  return (
    <div className="profile-footer">
      <div
        style={{
          width: "992px",
          margin: "0 auto",
          display: "flex",
          alignTtems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        <b4-col-sm-3>
          <div className="column_container">
            <h5 className="column_header">Coursera</h5>
            <div className="column_dropdown">
              <ul className="column_list">
                <li className="column_list_item">
                  <a className="column_list_item_link" href="#">
                    À propos
                  </a>
                </li>
                <li className="column_list_item">
                  <a className="column_list_item_link" href="#">
                    Direction
                  </a>
                </li>
                <li className="column_list_item">
                  <a className="column_list_item_link" href="#">
                    Carrières
                  </a>
                </li>
                <li className="column_list_item">
                  <a className="column_list_item_link" href="#">
                    Catalogue
                  </a>
                </li>
                <li className="column_list_item">
                  <a className="column_list_item_link" href="#">
                    Certificats
                  </a>
                </li>
                <li className="column_list_item">
                  <a className="column_list_item_link" href="#">
                    Certificats MasterTrack™
                  </a>
                </li>
                <li className="column_list_item">
                  <a className="column_list_item_link" href="#">
                    Diplômes
                  </a>
                </li>
                <li className="column_list_item">
                  <a className="column_list_item_link" href="#">
                    Enterprise
                  </a>
                </li>
                <li className="column_list_item">
                  <a className="column_list_item_link" href="#">
                    Government
                  </a>
                </li>
                <li className="column_list_item">
                  <a className="column_list_item_link" href="#">
                    campus
                  </a>
                </li>
                <li className="column_list_item">
                  <a className="column_list_item_link" href="#">
                    Décision relative au coronavirus
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </b4-col-sm-3>

        <b4-col-sm-3>
          <div className="column_container">
            <h5 className="column_header">Communauté</h5>
            <div className="column_dropdown">
              <ul className="column_list">
                <li className="column_list_item">
                  <a className="column_list_item_link" href="#">
                    Étudiants
                  </a>
                </li>
                <li className="column_list_item">
                  <a className="column_list_item_link" href="#">
                    Partenaires
                  </a>
                </li>
                <li className="column_list_item">
                  <a className="column_list_item_link" href="#">
                    Développeurs
                  </a>
                </li>
                <li className="column_list_item">
                  <a className="column_list_item_link" href="#">
                    Testeurs bêta
                  </a>
                </li>
                <li className="column_list_item">
                  <a className="column_list_item_link" href="#">
                    Traducteurs
                  </a>
                </li>

                <li className="column_list_item">
                  <a className="column_list_item_link" href="#">
                    Blog
                  </a>
                </li>
                <li className="column_list_item">
                  <a className="column_list_item_link" href="#">
                    Blog Tech
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </b4-col-sm-3>
        <b4-col-sm-3>
          <div className="column_container">
            <h5 className="column_header">Plus</h5>
            <div className="column_dropdown">
              <ul className="column_list">
                <li className="column_list_item">
                  <a className="column_list_item_link" href="#">
                    Conditions
                  </a>
                </li>
                <li className="column_list_item">
                  <a className="column_list_item_link" href="#">
                    Confidentialité
                  </a>
                </li>
                <li className="column_list_item">
                  <a className="column_list_item_link" href="#">
                    Aide
                  </a>
                </li>
                <li className="column_list_item">
                  <a className="column_list_item_link" href="#">
                    Accessibilité
                  </a>
                </li>
                <li className="column_list_item">
                  <a className="column_list_item_link" href="#">
                    Presse
                  </a>
                </li>
                <li className="column_list_item">
                  <a className="column_list_item_link" href="#">
                    Contact
                  </a>
                </li>
                <li className="column_list_item">
                  <a className="column_list_item_link" href="#">
                    Répertoire
                  </a>
                </li>
                <li className="column_list_item">
                  <a className="column_list_item_link" href="#">
                    Filiales
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </b4-col-sm-3>
        <b4-col-sm-3>
          <div className="column_container">
            <h5 className="column_header">Application mobile</h5>
            <div className="column_dropdown">
              <ul className="column_list">
                <li
                  className="column_list_item"
                  style={{ marginBottom: "10px" }}
                >
                  <a className="column_list_item_link" href="#">
                    <img
                      src="https://d3njjcbhbojbot.cloudfront.net/web/images/icons/download_on_the_app_store_badge_fr.svg"
                      alt="Télécharger dans l'App Store"
                      height="45"
                      data-reactid="290"
                    />
                  </a>
                </li>
                <li className="column_list_item">
                  <a className="column_list_item_link" href="#">
                    <img
                      src="https://d3njjcbhbojbot.cloudfront.net/web/images/icons/fr_generic_rgb_wo_45.png"
                      alt="Disponible sur Google Play"
                      height="45"
                      data-reactid="292"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </b4-col-sm-3>
      </div>
    </div>
  );
};

export default FooterCourse;
