import React from "react";
import "./Playlist.css";
import Search_icon from "./Search_icon.svg";
import Navbar from "../Navbar/Navbar";

const Playlist = () => {
  return (
    <div className="playlist">
      <Navbar/>
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
          <tr className="heading">
            <th>Serial Number</th>
            <th>Playlist Name</th>
            <th>Author</th>
            <th>Date Added</th>
          </tr>
          <tr className="contents">
            <td colSpan={4}> &nbsp;A </td>
          </tr>
          <br />
          <tr className="contents">
            <td colSpan={4}> - </td>
          </tr>
          <br />
          <tr className="contents">
            <td colSpan={4}> - </td>
          </tr>
          <br />
        </table>
      </div>
    </div>
  );
};

export default Playlist;
