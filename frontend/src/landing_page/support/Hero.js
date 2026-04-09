import React from "react";

function Hero() {
  return (
    <section id="supportHero">
      <div className="supportWrapper">
        <h5>Support Portal</h5>
        <a href="#">Track Tickets</a>
      </div>

      <div className="supportContent">
        {/* LEFT */}
        <div className="left">
          <h2>
            Search for an answer or browse help topics to create a ticket
          </h2>

          <input
            type="text"
            placeholder="Eg: how do I activate F&O, why is my order getting rejected.."
          />

          <div className="links">
            <a href="#">Track account opening</a>
            <a href="#">Track segment activation</a>
            <a href="#">Intraday margins</a>
            <a href="#">Kite user manual</a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="right">
          <h3>Featured</h3>
          <ol>
            <li>
              <a href="#">
                Current Takeovers and Delisting - January 2024
              </a>
            </li>
            <li>
              <a href="#">
                Latest Intraday leverages - MIS & CO
              </a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;