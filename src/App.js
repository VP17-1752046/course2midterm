import "./App.css";
import onePiece from "./assets/onepiece.png";
import onePieceBanner from "./assets/onepiece_banner.png";
import boruto from "./assets/boruto.png";
import borutoBanner from "./assets/boruto_banner.png";
import spy from "./assets/spy.png";
import spyBanner from "./assets/spy_banner.png";
import attackOnTitan from "./assets/attackontitan.png";
import attackOnTitanBanner from "./assets/attackontitan_banner.png";
import captsu from "./assets/captsu.png";
import captsuBanner from "./assets/captsu_banner.png";
import aoashi from "./assets/aoashi.png";
import aoaShiBanner from "./assets/aoashi_banner.png";
import { useState } from "react";

const data = [
  // {
  //   id: "1",
  //   movieName: "Weather With You",
  //   description:
  //     "Mùa hè năm đầu cấp Ba, Hodaka bỏ nhà ra đi. Cậu từ một hòn đảo xa xôi hẻo lánh đến Tokyo, nhưng sau đó nhanh chóng rơi vào cảnh túng thiếu và phải sống chuỗi ngày cô đơn. Nhưng cuối cùng cậu đã tìm được công việc: viết bài cho một tạp chí huyền bí. Sau khi cậu bắt đầu công việc, mưa cứ rơi mãi rơi mãi không thôi. Ở một góc thành phố đông đúc và nhộn nhịp, Hodaka đã gặp thiếu nữ tên Hina. Cô sống cùng em trai, luôn vui vẻ và kiên cường. Cô cũng có một sức mạnh vô cùng đặc biệt: “Này, từ bây giờ trời hãy hửng nắng đi nào.” Từng chút một, mưa ngừng rơi, và ánh sáng tuyệt đẹp rọi chiếu những nóc nhà trong thành phố. Chỉ bằng một lời cầu nguyện, cô đã khiến bầu trời trở nên sáng trong.",
  //   image: spyBanner,
  //   episode: "01",
  // },
  {
    id: "1",
    movieName: "Once Peace",
    description:
      "One Piece là bộ truyện tranh dành cho thiếu niên của tác giả nổi tiếng Oda Eiichiro. Bộ manga này được chuyển thể thành một series anime nhiều tập hài hước, đặc sắc. Phim Đảo Hải Tặc mở đầu câu chuyện bằng cảnh xử tử vua hải tặc Gol D. Roger. Trước khi chết ông đã tiết lộ rằng mình có một kho báu được giấu ngoài biển. Nếu ai tìm thấy kho báu thì chúng sẽ thuộc về người đó. Rất nhiều người gan dạ đã đổ xô ra biển để tìm kiếm kho báu bí ẩn của vua hải tặc Gol D. Roger.",
    image: onePiece,
    bannerImg: onePieceBanner,
    episode: "1018",
  },
  {
    id: "2",
    movieName: "Boruto: Naruto Next Generations",
    description:
      "Boruto: Naruto Next Generations kể về thế hệ sau của Naruto. Bộ phim vẫn lấy bối cảnh là thế giới Ninja nhưng nhân vật chính lần này lại là Uzumaki Boruto, con trai của Uzumaki Naruto và Hyuga Hinata. Đồng hành cùng Naruto trong lần quay lại này là Sarada Uchiha là con gái của Sasuke Uchiha, Sakura Haruno và Mitsuki – “con” của Orochimaru.",
    image: boruto,
    bannerImg: borutoBanner,
    episode: "250",
  },
  {
    id: "3",
    movieName: "Spy X Family",
    description:
      "Bộ phim là phần phim điện ảnh của series anime nổi tiếng Spy x Family. Trong bộ phim lần này, sau khi nhận được yêu cầu thay thế mình trong Chiến dịch Strix, Loid Forger quyết định giúp con gái Anya chiến thắng trong cuộc thi nấu ăn tại Học viện Eden bằng cách nấu bữa ăn yêu thích của hiệu trưởng để tránh bị thay thế khỏi nhiệm vụ mật. Nhưng từ đây, gia đình Forger phát hiện ra bí mật kinh hoàng ảnh hưởng đến hòa bình thế giới",
    image: spy,
    bannerImg: spyBanner,
    episode: "07",
  },
  {
    id: "4",
    movieName: "Shingeki no kyojin",
    description:
      "Câu chuyện của Đại chiến Titan tập trung vào một nền văn minh bên trong ba bức tường đồ sộ quây tròn đồng tâm, nơi được cho là duy nhất mà nhân loại còn tồn tại. Ba bức tường được đặt tên theo tên ba người con gái của vị vua đầu tiên có tên là Maria, Rose và Sina. Người dân ở đó, được gọi là dân tộc Eldia, đã tin rằng hơn một trăm năm trước, loài người đã bị đẩy đến bờ vực tuyệt chủng sau sự xuất hiện của những người khổng lồ hình dáng con người, được gọi là Titan.",
    image: attackOnTitan,
    bannerImg: attackOnTitanBanner,
    episode: "28",
  },
  {
    id: "5",
    movieName: "Captain Tsubasa",
    description:
      "Tsubasa Oozora là nhân vật chính trong bộ truyện này. Khi còn nhỏ, cậu đã thoát chết nhờ một quả bóng bất ngờ. Điều đó đã thúc đẩy cậu trở thành một fan hâm mộ bóng đá. Câu chuyện tập trung vào các trận đấu bóng đá hấp dẫn, đem lại những bất ngờ cho khán giả. Đây là bản làm lại của 'Tsubasa Giấc mơ sân cỏ', với những chi tiết được thêm hoặc bỏ, để cộng thêm nét đặc trưng vào bộ truyện. Bộ phim này đã làm vợi lên kí ức về tuổi thơ của biết bao người.",
    image: captsu,
    bannerImg: captsuBanner,
    episode: "28",
  },
  {
    id: "6",
    movieName: "Ao Ashi",
    description:
      "Ashito Aoi là một cầu thủ bóng đá trẻ, đầy khát vọng đến từ một thị trấn vùng nông thôn ở Nhật Bản. Hy vọng vào được một trường trung học với một câu lạc bộ bóng đá giỏi đã tan thành mây khói khi anh gây ra một sự cố trong một trận đấu quan trọng cho đội của mình, dẫn đến việc họ bị loại khỏi giải đấu. Tuy nhiên, anh đã lọt vào mắt xanh của một người quan trọng tình cờ đến thăm từ Tokyo. Mọi chuyện sẽ diễn ra như thế nào đối với Ashito?",
    image: aoashi,
    bannerImg: aoaShiBanner,
    episode: "28",
  },
];

function App() {
  const [film, setFilm] = useState(data);
  const [selectedFilm, setSelectedFilm] = useState(data[0]);

  const changeFilm = (item) => {
    setSelectedFilm(item);
  };

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
        <img
          className="banner__img"
          src={selectedFilm.bannerImg}
          alt="banner"
        />
        <div className="banner__content">
          <span className="banner__content-title">
            {selectedFilm.movieName}
          </span>
          <span className="banner__content-desc">
            {selectedFilm.description}
          </span>
        </div>
      </div>
      <div className="list">
        <div className="list-title">New Release</div>
        <div className="list-items">
          {/* <div className="list-item">
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
          </div> */}
          {film.map((item) => (
            <div
              key={item.id}
              className="list-item"
              onClick={() => changeFilm(item)}
            >
              <img src={item.image} alt={item.movieName} />
              <div className="list__content">
                <div className="list__content-ep">Episode {item.episode}</div>
                <div className="list__content-name">{item.movieName}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
