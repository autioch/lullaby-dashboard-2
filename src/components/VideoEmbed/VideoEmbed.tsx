import './VideoEmbed.css';
import { useDashboardStore } from '@/stores/useDashboardStore';

export default function VideoEmbed() {
  const videoUrl = useDashboardStore(
    (state) => state.lists[state.selectedIndex]?.youtubeUrl ?? null
  );

  const src = videoUrl ? `${videoUrl}&autoplay=1` : '';

  return (
    <figure className="c-video">
      <iframe
        className="c-video__iframe"
        src={src}
        title="YouTube video player"
        frameBorder="0"
        allow="autoplay; fullscreen; encrypted-media; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </figure>
  );
}
