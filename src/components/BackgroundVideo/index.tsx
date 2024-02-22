interface Props {
  video: string;
}

const BackgroundVideo = (props: Props) => {
  return (
    <div
      style={{
        top: "-50%",
        left: "-50%",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <video
        playsInline
        autoPlay={true}
        loop
        muted
        style={{
          objectFit: "cover",
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
          filter: "blur(5px) brightness(50%)",
          pointerEvents: "none",
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          margin: "auto",
          minHeight: "50%",
          minWidth: "50%",
        }}
      >
        <source src={props.video} type="video/mp4" />
      </video>
    </div>
  );
};

export default BackgroundVideo;
