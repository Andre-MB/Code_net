import React, { useState, useEffect, useRef } from "react";
import "./Home.css";

import logo from "../../assets/sinais-de-codigo.png";
import tag from "../../assets/codigo.png";

import { useAuthentication } from "../../hooks/useAuthentication";

// Context
import { useAuthValue } from "../../context/AuthContxt";

const Home = () => {
  const [height, setHeight] = useState("auto");
  const textareaRef = useRef(null);

  const [posts, setPosts] = useState([]);

  const [text, setText] = useState("");

  const [toufImage, setOnOffImage] = useState(false);
  const [toufTags, setOnOffTags] = useState(false);

  const { user } = useAuthValue();

  const { logout } = useAuthentication();

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
      <header>
        <div className="logo_codenet">
          <img src={logo} alt="sd" width={"30px"} height={"30px"} />
          <h1>Code_net</h1>
        </div>

        <div className="search_perf">
          <input type="text" name="search" placeholder="Search by tags ..." />

          {user && (
            <ion-icon
              id="logout"
              onClick={logout}
              name="log-out-outline"
            ></ion-icon>
          )}

          {!user && (
            <ion-icon
              id="person"
              onClick={logout}
              name="person-outline"
            ></ion-icon>
          )}
        </div>
      </header>

      {user && (
        <div className="updload_post">
          <form className="formPost">
            {/*  */}
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
              {/*  */}
              <div className="image_tags">
                {/*  */}
                <div className="icon_photo" onClick={imageClick}>
                  <ion-icon name="image"></ion-icon>
                  <label name="image">Image</label>
                </div>

                <div className="icon_tags" onClick={tagsClick}>
                  <img id="tag" src={tag} />
                  <label name="image">Tags</label>
                </div>

                {/*  */}
              </div>

              <button id="btn_post">Publish</button>
            </div>
            {/*  */}
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
