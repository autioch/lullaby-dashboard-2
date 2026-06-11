import MissionSvg from '@/icons/mission.svg?react';
import RestartSvg from '@/icons/restart.svg?react';
import SettingsSvg from '@/icons/settings.svg?react';
import EditSvg from '@/icons/edit.svg?react';
import { Icon } from '@/components/Icon/Icon';
import { useControlsStore } from '@/stores/useControlsStore';
import { useMissionStore } from '@/stores/useMissionStore';
import { useTimerStore } from '@/stores/useTimerStore';
import './Menu.css';

const { openOptions, openMissionSelect, openContentEditor } =
  useControlsStore.getState();

const { resetState } = useMissionStore.getState();
const { resetTimerState } = useTimerStore.getState();

export function Menu() {
  return (
    <div className="c-menu">
      <Icon onClick={openMissionSelect}>
        <MissionSvg />
      </Icon>
      <Icon
        onClick={() => {
          const confirmed = confirm('Restart?');
          if (confirmed) {
            resetState();
            resetTimerState();
          }
        }}
      >
        <RestartSvg />
      </Icon>
      <Icon onClick={openContentEditor}>
        <EditSvg />
      </Icon>
      <Icon onClick={openOptions}>
        <SettingsSvg />
      </Icon>
    </div>
  );
}
