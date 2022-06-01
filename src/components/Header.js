import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSongById, songSelecter } from "../redux/slice/SongSlice";

const Header = () => {
  return (
    <div>
      <div>
        <div className="header-main-page">
          <div className="icon-page">
            <i className="fa-solid fa-chevron-left" />
            <i className="fa-solid fa-chevron-right" />
          </div>
          <div className="form-search">
            <i className="fa-solid fa-magnifying-glass" />
            <input type="text" name id />
          </div>
        </div>
        <div className="banner-page">
          {/* <div className="info-banner-artist">
            <p>artist</p>
            <h2 className="title-banner">
              <a href> taylor swift</a>
            </h2>
            <p>23.444.543 monthy listeners</p>
          </div> */}
          <a href>
            <img
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f087cf68-b2b8-4da2-9949-6fd0c96da365/d5yh0rw-9ab466ea-fbe5-49bd-ba3e-bc8a7f3d3cd0.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2YwODdjZjY4LWIyYjgtNGRhMi05OTQ5LTZmZDBjOTZkYTM2NVwvZDV5aDBydy05YWI0NjZlYS1mYmU1LTQ5YmQtYmEzZS1iYzhhN2YzZDNjZDAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.eVkAIGXeb-EZWWU4rWIXmhrGwbtFtA5WCVknXu0S9ng"
              className="banner-astist"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
