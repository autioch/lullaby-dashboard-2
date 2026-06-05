import './VideoEmbed.css';
import { useMission } from '@/stores/useMissionStore';

export function VideoEmbed() {
  const mission = useMission();

  if (!mission || !mission.youtubeUrl) {
    return null;
  }

  return (
    <div className="c-video">
      <iframe
        className="c-video__iframe"
        src={`${mission?.youtubeUrl}&autoplay=1`}
        title="YouTube video player"
        allow="autoplay; fullscreen; encrypted-media; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}
