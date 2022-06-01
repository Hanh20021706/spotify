import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { getSongById, songSelecter } from "../redux/slice/SongSlice";
import DetailSong from "./DetailSong";

const Playing = () => {
  const dispatch = useDispatch();

  const { song } = useSelector(songSelecter);

  const handleclickNext = () => {
      dispatch(getSongById(song.id +1));
  }
  const handleclickPre = () => {
    dispatch(getSongById(song.id -1));
  }

  return (
    <footer className="footer-app">
      <div className="playlist-music row">
        <DetailSong/>
        <div className="col-md-10 play-song">
          <div>
            <AudioPlayer
              className="music-play"
              src={song.url}
              layout="stacked-reverse"
              showSkipControls={true}
              showJumpControls={false}
              onClickNext={handleclickNext}
              onClickPrevious={handleclickPre}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Playing;
