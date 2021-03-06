import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPlay,
    faStepForward,
    faStepBackward,
    faPause,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({ currentSong, isPlaying, setIsPlaying, audioRef, songInfo, setSongInfo, songs, setSongs, setCurrentSong }) => {
    // Functions
    const activeLibraryHandler = (nextPrev) => {
        const newSong = songs.map(track => {
            if (track.id === nextPrev.id) {
                return {
                    ...track,
                    active: true
                }
            } else {
                return {
                    ...track,
                    active: false
                }
            }
        })
        setSongs(newSong);
    }
    const playSongHandler = () => {
        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(!isPlaying);
        } else {
            audioRef.current.play();
            setIsPlaying(!isPlaying);
        }
    };
    const getTime = (time) => {
        return (
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        );
    };
    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value;
        setSongInfo({ ...songInfo, currentTime: e.target.value });
    };
    const skipSongHandler = async (directon) => {
        const currentIndex = songs.findIndex(song => song.id === currentSong.id);
        if (directon === 'forward') {
            await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
            activeLibraryHandler(songs[(currentIndex + 1) % songs.length]);
        }
        if (directon === 'backward') {
            if ((currentIndex - 1) % songs.length === -1) {
                await setCurrentSong(songs[songs.length - 1]);
                activeLibraryHandler(songs[songs.length - 1]);
                if (isPlaying) audioRef.current.play();
                return;
            }
            await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
            activeLibraryHandler(songs[(currentIndex - 1) % songs.length]);
        }
        if (isPlaying) audioRef.current.play();
    }
    const trackAnim = {
        transform: `translateX(${songInfo.animatePercentage}%)`
    }
    return (
        <div className="player">
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <div style={{ background: `linear-gradient(to right, ${currentSong.color})` }} className="track">
                    <input
                        type="range"
                        min={0}
                        max={songInfo.duration || 0}
                        value={songInfo.currentTime}
                        onChange={dragHandler}
                    />
                    <div style={trackAnim} className="animate-track"></div>
                </div>
                <p>{songInfo.duration ? getTime(songInfo.duration) : '0:00'}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon
                    onClick={() => skipSongHandler('backward')}
                    className="skip-back"
                    size="2x"
                    icon={faStepBackward}
                />
                <FontAwesomeIcon
                    onClick={playSongHandler}
                    className="play"
                    size="2x"
                    icon={isPlaying ? faPause : faPlay}
                />
                <FontAwesomeIcon
                    onClick={() => skipSongHandler('forward')}
                    className="skip-forward"
                    size="2x"
                    icon={faStepForward}
                />
            </div>
        </div>
    );
};

export default Player;
