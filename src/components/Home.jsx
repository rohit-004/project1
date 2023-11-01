import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillAmazonCircle,
  AiFillGoogleCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>MindOFF</h1>
          <p>Keep your mind off anything</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            to stop you from worrying or thinking about a problem or pain, often
            by forcing you to think about other things
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>How to Do it?</h1>
          <p>
            Physical exercise, fresh air, and sleeping are fantastic ways to get
            things off your mind and improve memory. Taking more breaks helps to
            increase your effectiveness. Meditation can help you practice
            mindfulness and overcome negative feelings. Using apps makes it easy
            to practice the techniques. If you’re having trouble sleeping,
            working a meditation practice at the end of your day or your nightly
            routine will improve your quality of life.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
