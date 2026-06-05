import './VideoEmbed.css';
import { useMissionStore } from '@/stores/useMissionStore';

export function VideoEmbed() {
  const videoUrl = useMissionStore(
    (state) => state.lists[state.selectedIndex]?.youtubeUrl ?? null
  );

  const src = videoUrl ? `${videoUrl}&autoplay=1` : '';

  return (
    <div className="c-video">
      <iframe
        className="c-video__iframe"
        src={src}
        title="YouTube video player"
        allow="autoplay; fullscreen; encrypted-media; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}
