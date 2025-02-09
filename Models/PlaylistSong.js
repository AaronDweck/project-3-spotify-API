import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

<<<<<<< HEAD
const playlistSongSchema = new mongoose.Schema({
  id: {
    type: String,
    default: uuidv4,
    unique: true,
  },
  playlist_id: {
    type: String,
    ref: "Playlist",
    required: true,
  },
  song_id: {
    type: String,
    ref: "Strong",
    required: true,
  },
});

const PlaylistSong = mongoose.model("PlaylistSong", playlistSongSchema);
export default PlaylistSong;
=======

const playlistSongSchema = new mongoose.Schema({
    id:
})
>>>>>>> yassine/Song-model
