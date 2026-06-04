import './LanguageMenu.css';
import Typography from '@/components/Typography/Typography';
import { useDashboardStore } from '@/stores/useDashboardStore';
import { useState } from 'react';

type LanguageMenuProps = {
  onClose?: () => void;
};

export default function LanguageMenu({ onClose }: LanguageMenuProps) {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const setLanguage = useDashboardStore((state) => state.setLanguage);

  return (
    <div className="app__options-wrap">
      <button
        type="button"
        className="app__options-button"
        onClick={() => setIsOptionsOpen((prev) => !prev)}
        aria-expanded={isOptionsOpen}
        aria-label="Options"
      >
        ⚙
      </button>

      {isOptionsOpen && (
        <div className="app__options-menu" role="menu" aria-label="Language">
          <button
            type="button"
            className="app__options-menu-button"
            onClick={() => {
              setLanguage('en');
              setIsOptionsOpen(false);
              onClose?.();
            }}
          >
            <Typography textKey="app.english" />
          </button>
          <button
            type="button"
            className="app__options-menu-button"
            onClick={() => {
              setLanguage('pl');
              setIsOptionsOpen(false);
              onClose?.();
            }}
          >
            <Typography textKey="app.polish" />
          </button>
        </div>
      )}
    </div>
  );
}
