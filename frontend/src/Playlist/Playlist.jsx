import React from "react";
import "./Playlist.css";
import Search_icon from "./Search_icon.svg";

const Playlist = () => {
  return (
    <div className="playlist">
      <div className="searchbar">
        <form>
          <label>
            <img src={Search_icon} />
          </label>
          <input className="search" type="text" />
        </form>
      </div>
      <div className="tables">
        <table className="play_lists" >
          <tr className="heading">
            <th>Serial Number</th>
            <th>Playlist Name</th>
            <th>Author</th>
            <th>Date Added</th>
          </tr>
          <tr className="contents">
            <td>Serial Number</td>
            <td>Playlist Name</td>
            <td>Autdor</td>
            <td>Date Added</td>
          </tr>
          <br/>
          <tr className="contents">
            <td>Serial Number</td>
            <td>Playlist Name</td>
            <td>Autdor</td>
            <td>Date Added</td>
          </tr>
          <br/>
          <tr className="contents">
            <td>Serial Number</td>
            <td>Playlist Name</td>
            <td>Autdor</td>
            <td>Date Added</td>
          </tr>
          <br/>
        </table>
      </div>
    </div>
  );
};

export default Playlist;
