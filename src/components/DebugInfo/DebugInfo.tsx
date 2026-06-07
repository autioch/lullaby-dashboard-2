import { Overlay } from '../Overlay/Overlay';
import { APIS, UNITS } from './consts';
import { isUnitSupported, getFeatures } from './units';
import './DebugInfo.css';
import type { DebugItem, SupportItem } from './types';

export function DebugInfo() {
  const debugItems: DebugItem[] = [
    { label: 'Origin', value: window.location.origin },
    { label: 'Pathname', value: window.location.pathname },
    { label: 'User Agent', value: window.navigator.userAgent },
    { label: 'Window width', value: window.innerWidth },
    { label: 'Window height', value: window.innerHeight },
  ];

  const features = getFeatures();

  return (
    <Overlay>
      <DebugSection items={debugItems} />
      <div className="c-debug__items">
        <ItemSupported
          label="CSS.supports"
          supported={typeof globalThis.CSS.supports === 'function'}
        />
        {APIS.map((api) => (
          <ItemSupported key={api} label={api} supported={api in window} />
        ))}
      </div>
      <div className="c-debug__items">
        {UNITS.map((unit) => (
          <ItemSupported
            key={unit}
            label={unit}
            supported={isUnitSupported(unit)}
          />
        ))}
      </div>
      <div className="c-debug__items">
        {features.map((item) => (
          <ItemSupported
            key={item.label}
            label={item.label}
            supported={item.supported}
          />
        ))}
      </div>
    </Overlay>
  );
}

function DebugSection({ items }: { items: DebugItem[] }) {
  return (
    <div className="c-debug-section">
      {items.map((item) => (
        <>
          <span>{item.label}:</span>
          <span>{item.value}</span>
        </>
      ))}
    </div>
  );
}

function ItemSupported(props: SupportItem) {
  const { supported, label } = props;

  return (
    <div className={supported ? 'c-debug--yes' : 'c-debug--no'}>{label}</div>
  );
}
