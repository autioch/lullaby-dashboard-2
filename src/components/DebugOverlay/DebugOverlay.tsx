import { useEffect, useState } from "react";
import { useDashboardStore } from "../../stores/useDashboardStore";
import "./DebugOverlay.css";

interface DebugInfo {
  url: string;
  pathname: string;
  origin: string;
  stylesheetHref: string | null;
  stylesheetLoaded: boolean;
  stylesheetUrls: string[];
  userAgent: string;
  selectedIndex: number;
  listCount: number;
  checkedItemCount: number;
  error?: string;
}

export default function DebugOverlay() {
  const selectedIndex = useDashboardStore((state) => state.selectedIndex);
  const lists = useDashboardStore((state) => state.lists);
  const checkedKeys = useDashboardStore((state) => state.checkedKeys);

  const [debugOpen, setDebugOpen] = useState(false);
  const [debugInfo, setDebugInfo] = useState<DebugInfo | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const collectDebugInfo = async () => {
      try {
        const stylesheetHref =
          document.querySelector<HTMLLinkElement>("link[rel=stylesheet]")
            ?.href ?? null;
        const stylesheetUrls = Array.from(document.styleSheets).map((sheet) =>
          sheet.href ? sheet.href : "(inline or unavailable)",
        );

        let stylesheetLoaded = false;
        if (stylesheetHref) {
          try {
            const response = await fetch(stylesheetHref, { method: "HEAD" });
            stylesheetLoaded = response.ok;
          } catch {
            stylesheetLoaded = false;
          }
        }

        setDebugInfo({
          url: window.location.href,
          pathname: window.location.pathname,
          origin: window.location.origin,
          stylesheetHref,
          stylesheetLoaded,
          stylesheetUrls,
          userAgent: window.navigator.userAgent,
          selectedIndex,
          listCount: lists.length,
          checkedItemCount: Object.keys(checkedKeys).length,
        });
      } catch (error) {
        setDebugInfo({
          url: window.location.href,
          pathname: window.location.pathname,
          origin: window.location.origin,
          stylesheetHref: null,
          stylesheetLoaded: false,
          stylesheetUrls: [],
          userAgent: window.navigator.userAgent,
          selectedIndex,
          listCount: lists.length,
          checkedItemCount: Object.keys(checkedKeys).length,
          error: error instanceof Error ? error.message : String(error),
        });
      }
    };

    collectDebugInfo();
  }, [selectedIndex, lists.length, checkedKeys]);

  return (
    <>
      <button
        type="button"
        onClick={() => setDebugOpen((open) => !open)}
        className="debug-overlay__button"
      >
        Debug
      </button>

      {debugOpen && (
        <div className="debug-overlay__panel">
          <div className="debug-overlay__header">
            <strong>Debug info</strong>
            <button
              type="button"
              onClick={() => setDebugOpen(false)}
              className="debug-overlay__close"
            >
              Close
            </button>
          </div>
          <pre className="debug-overlay__content">
            {debugInfo
              ? `URL: ${debugInfo.url}\n` +
                `Pathname: ${debugInfo.pathname}\n` +
                `Origin: ${debugInfo.origin}\n` +
                `Stylesheet href: ${debugInfo.stylesheetHref ?? "(none)"}\n` +
                `Stylesheet loaded: ${debugInfo.stylesheetLoaded ? "yes" : "no"}\n` +
                `Stylesheets:\n  - ${debugInfo.stylesheetUrls.join("\n  - ")}\n` +
                `User agent: ${debugInfo.userAgent}\n` +
                `Selected index: ${debugInfo.selectedIndex}\n` +
                `List count: ${debugInfo.listCount}\n` +
                `Checked items: ${debugInfo.checkedItemCount}\n` +
                (debugInfo.error ? `Error: ${debugInfo.error}\n` : "")
              : "Collecting debug info..."}
          </pre>
        </div>
      )}
    </>
  );
}
