import React from "react";
import "../styles.css";
import { newFilms, trendFilms, recommendationsFilms } from "../../data/Data";
let all = "all";
let MyFavorites = "favorites";
let Recommendations = "Recommendations";
let trends = "trends";
let newF = "new";
function SelectCategory(category) {
  console.log(category);
}
function Home() {
  return (
    <div>
      <h1>Films</h1>
      <header>
        <ul>
          <li onClick={SelectCategory(all)}>All</li>
          <li onClick={SelectCategory(MyFavorites)}>My Favorites</li>
          <li onClick={SelectCategory(Recommendations)}>Recommendations</li>
          <li onClick={SelectCategory(newF)}>New Relases</li>
          <li onClick={SelectCategory(trends)}>Trends</li>
        </ul>
      </header>
      <div className="container">
        {/* <div>
                    <div className="img">
                        <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQRXvIzyj9A7YYNKQ1sd7AAbzj0X8LJMSVeDcfjRaCVkKDIPdUa"/>
                    </div>
                    <div className="info">
                        <p>Buster's Mal eart</p>
                        <button className="one">
                            WATCH NOW
                        </button>
                        <button>
                            MORE INFO
                        </button>
                    </div>
                </div> */}
        {newFilms.map((peliculas) => (
          <div>
            <div className="img">
              <img src={peliculas.linkIMg}/>
            </div>
            <div className="info">
              <p>{peliculas.tittle}</p>
              <button className="one">WATCH NOW</button>
              <button>MORE INFO</button>
            </div>
          </div>
        ))
        }
        {
        trendFilms.map((peliculas) => (
            <div>
              <div className="img">
                <img src={peliculas.linkIMg}/>
              </div>
              <div className="info">
                <p>{peliculas.tittle}</p>
                <button className="one">WATCH NOW</button>
                <button>MORE INFO</button>
              </div>
            </div>
          ))
        }
        {
            recommendationsFilms.map((peliculas) => (
                <div>
                  <div className="img">
                    <img src={peliculas.linkIMg}/>
                  </div>
                  <div className="info">
                    <p>{peliculas.tittle}</p>
                    <button className="one">WATCH NOW</button>
                    <button>MORE INFO</button>
                  </div>
                </div>
              ))
        }
      </div>
    </div>
  );
}
export default Home;
