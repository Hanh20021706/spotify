import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSongById } from "../redux/slice/SongSlice";
import { getListSong, songsSelecter } from "../redux/slice/SongsSlice";

const ListSong = () => {
  const [IdSong, setIdSong] = useState(0);

  const { songs } = useSelector(songsSelecter);

  const dispatch = useDispatch();

  const hanldePlaysong = (IdSong) => {
    setIdSong(IdSong);
    dispatch(getSongById(IdSong))

  }

  useEffect(() => {
    dispatch(getListSong(IdSong));
  }, []);

  return (
    <div>
      <div className="table-list">
        <div className="title-table-list">
          <h3>Popular</h3>
          <h5>
            <a href>see all</a>
          </h5>
        </div>
      </div>
      <div className="playlist-music">
        <table className="table table-list-song">
          <thead>
            <tr >
              <th scope="col">#</th>
              <th scope="col">name </th>
              <th scope="col">author</th>
              <th scope="col">
                <i className="fa-solid fa-download" />
              </th>
            </tr>
          </thead>
          <tbody>
            {songs.map((song, index) => (
              <tr key={index} className={`"hover-song" ${IdSong === song.id && "hover-new"}`}  onClick={() => hanldePlaysong(song.id)} >
                <td>{index + 1}</td>
                <td>{song.name}</td>
                <td>{song.author}</td>
                <td>
                  {" "}
                  <i className="fa-solid fa-download" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListSong;
