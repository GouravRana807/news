import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [data, SetData] = useState([]);
  const getNews = () => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=bitcoin&apiKey=a86c581385b245a2973fcb53c3f96a28"
      )
      .then((response) => {
        console.log(response);
        SetData(response.data.articles);
      });
  };
  return (
    <div className="container my-3">
      <button className="btn btn-primary " onClick={getNews}>
        Fetch News
      </button>

      <div className="container">
        <div className="row">
          {data.map((value) => {
            return (
              <div className="col-3">
                <div className="card" style={{ width: "18rem" }}>
                  <img

                    className="card-img-top"
                    src={value.urlToImage}
                    alt=""
                  />
                  <div className="card-body">
                    <h5 className="card-title">{value.tilte}</h5>
                    <p className="card-text">
                     {value.description}
                    </p>
                    <a href="#" className="btn btn-primary">
                    Main Nes
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;

