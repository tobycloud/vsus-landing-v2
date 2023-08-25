interface Props {
  video: string;
  isHome: boolean;
}

const BackgroundVideo = (props: Props) => {
  return (
    <div
      style={{
        top: "-50%",
        left: "-50%",
        width: "100vw",
        height: props.isHome ? "100vh" : "140vh",
        overflow: "hidden",
      }}
    >
      <video
        autoPlay={true}
        loop
        muted
        style={{
          objectFit: "cover",
          width: "100vw",
          height: props.isHome ? "100vh" : "140vh",
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
