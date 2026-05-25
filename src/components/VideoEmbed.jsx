export default function VideoEmbed({ videoUrl }) {
  const src = videoUrl ? `${videoUrl}&autoplay=1` : '';

  return (
    <iframe
      className="video"
      src={src}
      title="YouTube video player"
      frameBorder="0"
      allow="autoplay; fullscreen; encrypted-media; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  );
}
