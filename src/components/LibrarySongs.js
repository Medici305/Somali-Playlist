import React from "react";

const LibrarySongs = ({
    song,
    songs,
    setCurrentSong,
    audioRef,
    isPlaying,
    setSongs,
}) => {
    // Function
    const selectedSongHandler = async () => {
        await setCurrentSong(song);
        if (isPlaying) audioRef.current.play();
        const newSong = songs.map((track) => {
            if (track.id === song.id) {
                return {
                    ...track,
                    active: true,
                };
            } else {
                return {
                    ...track,
                    active: false,
                };
            }
        });
        setSongs(newSong);
    };
    return (
        <div
            onClick={selectedSongHandler}
            className={`library-container ${song.active ? "selected" : ""}`}
        >
            <img src={song.cover} alt="" />
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    );
};

export default LibrarySongs;
