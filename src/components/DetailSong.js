
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSongById, songSelecter } from "../redux/slice/SongSlice";

const DetailSong = () => {

    const dispatch = useDispatch();

    const {song} = useSelector(songSelecter);

    useEffect(() => {
        dispatch(getSongById(0));
    }, [])

  return (
    <div className="col-md-2">
      <div className="artist-song" style={{ marginTop: "15px" }}>
        <div className="img-song">
          <img
            src={song.links.images[0].url}
            className="img-song-artist"
            alt=""
          />
        </div>
        <div className="info-song">
          <h4>
            <a href>{song.name}</a>
          </h4>
          <h5 style={{color: '#fff'}}>
            <a href>{song.author}</a>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default DetailSong;
