import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ selectedSong }) => {
  if (!selectedSong) {
    return (
      <div>
        <h1>Select a Song</h1>
      </div>
    );
  }
  return (
    <div>
      <h1>
        Title:{selectedSong.title}
        <br />
        Duration:{selectedSong.duration}
      </h1>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    selectedSong: state.selectedSong
  };
};

export default connect(mapStateToProps)(SongDetail);
