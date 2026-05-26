import "./VideoEmbed.css";

type VideoEmbedProps = {
  videoUrl?: string;
};

export default function VideoEmbed({ videoUrl }: VideoEmbedProps) {
  const src = videoUrl ? `${videoUrl}&autoplay=1` : "";

  return (
    <iframe
      className="video-embed__iframe"
      src={src}
      title="YouTube video player"
      frameBorder="0"
      allow="autoplay; fullscreen; encrypted-media; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  );
}
