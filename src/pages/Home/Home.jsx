import React, { useState, useEffect, useRef } from "react";
import "./Home.css";

import tag from "../../assets/codigo.png";

// Hooks
import { useAuthentication } from "../../hooks/useAuthentication";

// Context
import { useAuthValue } from "../../context/AuthContxt";
import Header from "../../components/Header";

const Home = () => {
  const [height, setHeight] = useState("auto");
  const textareaRef = useRef(null);

  const [posts, setPosts] = useState([]);

  const [text, setText] = useState("");

  const [toufImage, setOnOffImage] = useState(false);
  const [toufTags, setOnOffTags] = useState(false);

  const { user } = useAuthValue();

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const imageClick = () => {
    toufImage ? setOnOffImage(false) : setOnOffImage(true);
  };

  const tagsClick = () => {
    toufTags ? setOnOffTags(false) : setOnOffTags(true);
  };

  useEffect(() => {
    if (user) {
      setHeight("auto");
      // Reset height to auto to allow shrinkage
      setHeight(`${textareaRef.current.scrollHeight}px`);
      // Set to the scrollHeight to fit content
      if (text == "") {
        setHeight("auto");
      }
    }
  }, [text]);

  return (
    <div className="home">
      <Header />

      {user && (
        <div className="updload_post">
          <form className="formPost">
            <h3>Hi {user.displayName} , how about making a post?</h3>
            <textarea
              ref={textareaRef}
              value={text}
              style={{ height: height, overflow: "hidden" }}
              onChange={handleChange}
              id="coment"
              type="text"
              required
            />

            {toufImage && (
              <>
                <label htmlFor="image">Image</label>

                <input
                  type="text"
                  name="image"
                  placeholder="URL the image..."
                />
              </>
            )}

            {toufTags && (
              <>
                <label htmlFor="tags">Tags</label>
                <input
                  type="text"
                  name="tags"
                  placeholder="Insert the tags separating them with a comma: javascripy, php"
                />
              </>
            )}

            <div className="photo_post">
              <div className="image_tags">
                <div className="icon_photo" onClick={imageClick}>
                  <ion-icon name="image"></ion-icon>
                  <label name="image">Image</label>
                </div>

                <div className="icon_tags" onClick={tagsClick}>
                  <img id="tag" src={tag} />
                  <label name="image">Tags</label>
                </div>
              </div>

              <button id="btn_post">Publish</button>
            </div>
          </form>
        </div>
      )}

      <div className="postSingle">
        <h4>André</h4>
        <img src="" alt="" />
        <h5>comments:</h5>
        <div className="comentSingle">
          <p>
            <b>Felipe</b>: oi, Boa noite
          </p>
        </div>
      </div>

      {/*  */}
    </div>
  );
};

export default Home;
