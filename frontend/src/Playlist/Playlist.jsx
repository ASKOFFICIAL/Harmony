import { useEffect, useState } from "react";
import "./Playlist.css";
import Search_icon from "./Search_icon.svg";
import Navbar from "../Navbar/Navbar";

import { useLogin } from '../utils/LoginContext';

const Playlist = () => {
  const { data } = useLogin();

  return (
    <div className="playlist">
      <Navbar />
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
            {data && data.items.map(playlist => {
              <tr className="contents">
                <td>{playlist.id}</td>
                <td>{playlist.name}</td>
                <td>{playlist.owner.display_name}</td>
                {/* <td>{playlist.}</td> */}
              </tr>
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Playlist;
