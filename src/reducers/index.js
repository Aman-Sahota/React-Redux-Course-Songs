import { combineReducers } from "redux";

const songReducer = () => {
  return [
    { title: "Darlin", duration: "2:14" },
    { title: "Hooked on a Feeling", duration: "2:48" },
    { title: "Silence", duration: "3:07" },
    { title: "Better", duration: "3:58" },
    { title: "Lovely", duration: "3:21" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songReducer,
  selectedSong: selectedSongReducer
});
