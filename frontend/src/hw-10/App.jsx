import { useState } from "react";
import { useFormik } from "formik";
import "./App.css";

const MEME_IMAGES = [
  "https://i.imgflip.com/2eeunw.jpg",
  "https://i.imgflip.com/1yxkcp.jpg",
  "https://i.imgflip.com/3eqjd8.jpg",
  "https://i.imgflip.com/434i5j.png",
  "https://i.imgflip.com/1bij.jpg",
  "https://i.imgflip.com/1o00in.jpg",
];

export const MemeGenerator = () => {
  // მიმდინარე სურათის state-ის შექმნა, საწყისი მნიშვნელობით MEME_IMAGES მასივის პირველი ელემენტი
  const [currentImage, setCurrentImage] = useState(MEME_IMAGES[0]);

  // შემთხვევითი სურათის არჩევის ფუნქცია
  // 1. იღებს შემთხვევით ინდექსს 0-დან MEME_IMAGES მასივის სიგრძემდე
  // 2. აახლებს მიმდინარე სურათს ახალი შემთხვევითი სურათით
  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * MEME_IMAGES.length);
    setCurrentImage(MEME_IMAGES[randomIndex]);
  };

  // Formik-ის ინიციალიზაცია საწყისი მნიშვნელობებით
  const formik = useFormik({
    initialValues: {
      topText: "",
      bottomText: "",
      textColor: "#FFFFFF",
    },
  });

  return (
    <div className="container">
      <h1>Meme genarotor</h1>

      <form>
        <div className="controls">
          {/* ზედა ტექსტის შესაყვანი ველი */}
          <div>
            <label>Top text</label>
            <input
              type="text"
              name="topText"
              value={formik.values.topText}
              onChange={formik.handleChange}
            />
          </div>

          {/* ქვედა ტექსტის შესაყვანი ველი */}
          <div>
            <label>Bottom text</label>
            <input
              type="text"
              name="bottomText"
              value={formik.values.bottomText}
              onChange={formik.handleChange}
            />
          </div>

          {/* ტექსტის ფერის ასარჩევი ველი */}
          <div>
            <label>color</label>
            <input
              type="color"
              name="textColor"
              value={formik.values.textColor}
              onChange={formik.handleChange}
            />
          </div>

          {/* ახალი სურათის არჩევის ღილაკი */}
          <button type="button" onClick={getRandomImage}>
            new image
          </button>
        </div>

        {/* მემის ჩვენების სექცია */}
        <div className="meme">
          <img src={currentImage} />
          <div className="top-text" style={{ color: formik.values.textColor }}>
            {formik.values.topText}
          </div>
          <div
            className="bottom-text"
            style={{ color: formik.values.textColor }}
          >
            {formik.values.bottomText}
          </div>
        </div>
      </form>
    </div>
  );
};
