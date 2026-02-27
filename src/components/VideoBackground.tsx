

const VideoBackground = () => {
  return (
    <video
      autoPlay
      loop
      muted
      className="video-background"
    >
      <source
        src="https://cdn.pixabay.com/video/2022/12/28/144580-785095777_large.mp4"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoBackground;