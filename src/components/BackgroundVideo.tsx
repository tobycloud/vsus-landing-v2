interface Props {
  video: string;
  isHome: boolean;
}

const BackgroundVideo = (props: Props) => {
  return (
    <div
      style={{
        top: 0,
        left: 0,
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
          objectFit: "fill",
          width: "100vw",
          height: "120%",
          overflow: "hidden",
          filter: "blur(5px) brightness(50%)",
          pointerEvents: "none",
        }}
      >
        <source src={props.video} type="video/mp4" />
      </video>
    </div>
  );
};

export default BackgroundVideo;
