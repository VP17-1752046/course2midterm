import logo from "./logo.svg";
import "./App.css";
import spyBanner from "./assets/spy_banner.png";
import onePiece from "./assets/onepiece.png";
import boruto from "./assets/boruto.png";
import spy from "./assets/spy.png";
import attackOnTitan from "./assets/attackontitan.png";
import captsu from "./assets/captsu.png";
import aoashi from "./assets/aoashi.png";

function App() {
  return (
    <div className="container">
      <div className="header">
        <h1 className="header__title">Anonime</h1>
        <span className="header__home">Home</span>
        <span className="header__list">List anime</span>
        <input className="header__search" placeholder="Search anime or movie" />
      </div>
      <div className="explore">Explore</div>
      <div className="suggest">What are you gonna watch today ?</div>
      <div className="banner">
        <img className="banner__img" src={spyBanner} alt="banner" />
        <div className="banner__content">
          <span className="banner__content-title">Weather With You</span>
          <span className="banner__content-desc">
            Corrupt politicians, frenzied nationalists, and other warmongering
            forces constantly jeopardize the thin veneer of peace between
            neighboring countries Ostania and Westalis.
          </span>
        </div>
      </div>
      <div className="list">
        <div className="list-title">New Release</div>
        <div className="list-items">
          <div className="list-item">
            <img src={onePiece} alt="onePiece" />
            <div className="list__content">
              <div className="list__content-ep">Episode 1018</div>
              <div className="list__content-name">One Piece</div>
            </div>
          </div>
          <div className="list-item">
            <img src={boruto} alt="Boruto" />
            <div className="list__content">
              <div className="list__content-ep">Episode 250</div>
              <div className="list__content-name">
                Boruto Naruto Next Generations
              </div>
            </div>
          </div>
          <div className="list-item">
            <img src={spy} alt="Spy" />
            <div className="list__content">
              <div className="list__content-ep">Episode 07</div>
              <div className="list__content-name">Spy X Family</div>
            </div>
          </div>
          <div className="list-item">
            <img src={attackOnTitan} alt="Attack On TiTan" />
            <div className="list__content">
              <div className="list__content-ep">Episode 28</div>
              <div className="list__content-name">Shingeki no kyoujin</div>
            </div>
          </div>
          <div className="list-item">
            <img src={captsu} alt="Captain Tsubasa" />
            <div className="list__content">
              <div className="list__content-ep">Episode 28</div>
              <div className="list__content-name">Captain Tsubasa</div>
            </div>
          </div>
          <div className="list-item">
            <img src={aoashi} alt="Aoashi" />
            <div className="list__content">
              <div className="list__content-ep">Episode 28</div>
              <div className="list__content-name">Aoashi</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
