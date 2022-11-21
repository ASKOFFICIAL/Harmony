import { useState, useEffect } from "react";
import "./Playlist.css";
import Search_icon from "./Search_icon.svg";

import axiosInstance from "../utils/axiosInstance";

const Playlist = () => {
  const [playlists, setPlaylists] = useState()

  useEffect(() => {
    axiosInstance.get('/user/playlists').then((res) => {
      console.log(res)
    })
    
  }, [])

  return (
    <div className="playlist">
      {/* <Navbar /> */}
      <div className="searchbar">
        <form>
          <label>
            <img src={Search_icon} />
          </label>
          <input className="search" type="text" />
        </form>
      </div>
      <div className="tables container">
        <table className="play_lists">
          <thead className="heading">
            <tr>
              <th>Serial Number</th>
              <th>Playlist Name</th>
              <th>Author</th>
              {/* <th>Date Added</th> */}
            </tr>
          </thead>
          <tbody>
            {playlists && playlists.map(playlist => {
              return(
                <tr className="contents">
                  <td>{playlist.id}</td>
                  <td>{playlist.name}</td>
                  <td>{playlist.owner.display_name}</td>
                  {/* <td>{playlist.}</td> */}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Playlist;
