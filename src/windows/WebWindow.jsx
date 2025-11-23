// WebWindow.jsx
import WindowControls from '#components/WindowControls';
import WindowWrapper from '#hoc/WindowWrapper';
import useWindowStore from '#store/window.js';
import React from 'react';

const Web = () => {
    const { windows } = useWindowStore();
    const item = windows.web?.data || {};
    const { name, href, title } = item;
    const displayName = title || name || "Project Preview";

    return (
        <div className="w-[900px] h-[80vh]">   {/* ✅ Increase width here */}
            <div id="window-header" className="flex items-center gap-2">
                <WindowControls target="web" />

                <div className="flex items-center gap-2 overflow-hidden">
                    <h2 className="text-sm font-medium truncate max-w-[180px]">
                        {displayName}
                    </h2>

                    {href && (
                        <a
                            href={href}
                            target="_blank"
                            rel="noreferrer"
                            className="text-[11px] text-black font-bold underline opacity-70 hover:opacity-100 truncate max-w-[160px]"
                        >
                            Open in browser ↗
                        </a>
                    )}
                </div>
            </div>

            <div className="p-0 w-full h-full">
                {href ? (
                    <iframe
                        src={href}
                        className="w-full h-full border-0"
                        title={displayName}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                    />
                ) : (
                    <div className="flex items-center justify-center h-full text-xs text-gray-400">
                        No URL configured for this project.
                    </div>
                )}
            </div>
        </div>
    );
};

const WebWindow = WindowWrapper(Web, "web");
export default WebWindow;
