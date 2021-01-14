export const playAudio = (isPlaying, audioRef) => {
    if (isPlaying) {
        setTimeout(() => {
            audioRef.current.play();
        }, 1);
    }
}