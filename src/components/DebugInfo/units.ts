import { type SupportItem } from '@/components/DebugInfo/types';

export function isUnitSupported(unit: string): boolean {
  if (
    typeof globalThis.CSS !== 'undefined' &&
    typeof globalThis.CSS.supports === 'function'
  ) {
    return CSS.supports('width', `1${unit}`);
  }

  const el = document.createElement('div');

  try {
    el.style.width = `1${unit}`;
    return el.style.width !== '';
  } catch {
    return false;
  }
}

function cssSupports(property: string, value: string) {
  try {
    return CSS?.supports?.(property, value) ?? false;
  } catch {
    return false;
  }
}

export function getFeatures(): SupportItem[] {
  return [
    // Flexbox
    {
      label: 'display:flex',
      supported: cssSupports('display', 'flex'),
    },

    {
      label: 'gap:1px ',
      supported: cssSupports('gap', '1px'),
    },

    // Grid
    {
      label: 'display:grid',
      supported: cssSupports('display', 'grid'),
    },

    {
      label: 'grid-template-areas',
      supported: cssSupports('grid-template-areas', '"header header"'),
    },

    {
      label: 'subgrid',
      supported: cssSupports('grid-template-columns', 'subgrid'),
    },

    {
      label: 'grid-template-rows:masonry',
      supported: cssSupports('grid-template-rows', 'masonry'),
    },

    // Sizing
    {
      label: 'aspect-ratio',
      supported: cssSupports('aspect-ratio', '16 / 9'),
    },

    {
      label: 'min()',
      supported: cssSupports('width', 'min(100px, 50%)'),
    },

    {
      label: 'max()',
      supported: cssSupports('width', 'max(100px, 50%)'),
    },

    {
      label: 'clamp()',
      supported: cssSupports('width', 'clamp(100px, 50%, 300px)'),
    },

    // Positioning
    {
      label: 'position:sticky',
      supported: cssSupports('position', 'sticky'),
    },

    // Container Queries
    {
      label: 'container-type',
      supported: cssSupports('container-type', 'inline-size'),
    },

    {
      label: 'container-name',
      supported: cssSupports('container-name', 'test'),
    },

    // Logical Properties
    {
      label: 'margin-inline',
      supported: cssSupports('margin-inline', '1rem'),
    },

    {
      label: 'padding-block',
      supported: cssSupports('padding-block', '1rem'),
    },

    // Display values
    {
      label: 'display:contents',
      supported: cssSupports('display', 'contents'),
    },

    {
      label: 'display:flow-root',
      supported: cssSupports('display', 'flow-root'),
    },

    // Selectors
    {
      label: ':is()',
      supported: CSS.supports?.('selector(:is(div))') ?? false,
    },

    {
      label: ':where()',
      supported: CSS.supports?.('selector(:where(div))') ?? false,
    },

    {
      label: ':has()',
      supported: CSS.supports?.('selector(div:has(span))') ?? false,
    },

    // Tailwind
    {
      label: 'css-layers',
      supported:
        CSS.supports?.('selector(:root)') &&
        CSS.supports?.('color', 'red') &&
        (() => {
          try {
            const sheet = new CSSStyleSheet();
            sheet.replaceSync('@layer test {}');
            return true;
          } catch {
            return false;
          }
        })(),
    },
    {
      label: 'constructable-sylesheets',
      supported: typeof CSSStyleSheet !== 'undefined',
    },
    {
      label: 'container-query',
      supported: CSS.supports?.('container-type', 'inline-size'),
    },
    {
      label: 'CSS-custom-properties',
      supported: CSS.supports?.('--test', '0'),
    },
  ];
}
