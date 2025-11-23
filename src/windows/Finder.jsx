import React from 'react';
import WindowControls from "#components/WindowControls.jsx";
import { Search } from "lucide-react";
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import useLocationStore from "#store/location.js";
import clsx from "clsx";
import { locations } from "#constants/index.js";
import useWindowStore from "#store/window.js";

const Finder = () => {
    const { activeLocation, setActiveLocation } = useLocationStore();
    const { openWindow } = useWindowStore();

   const openItem = (item) => {
    if (item.fileType === "pdf") return openWindow("resume");
    if (item.kind === "folder") return setActiveLocation(item);

    // ✅ open inside Web window
    if (["fig", "url"].includes(item.fileType) && item.href) {
        return openWindow("web", item);
    }

    openWindow(`${item.fileType}${item.kind}`, item);
};


    const renderList = (name, items) => (
        <div>
            <h3>{name}</h3>
            <ul>
                {items.map((item) => (
                    <li
                        key={item.id}
                        className={clsx(
                            item.id === activeLocation.id ? "active" : "not-active",
                            "cursor-pointer"
                        )}
                        onClick={() => setActiveLocation(item)}
                    >
                        <img src={item.icon} className="w-4 cursor-pointer" alt={item.name} />
                        <p className="text-sm font-medium truncate">
                            {item.name}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );

    return (
        <>
            <div id="window-header">
                <WindowControls target="finder" />
                <Search className="icon" />
            </div>

            <div className="bg-white flex h-full">
                {/* Sidebar with scroll */}
                <div className="sidebar">
                    {renderList("Favorites", Object.values(locations))}
                    {renderList("Work", locations.work.children)}
                </div>

                {/* Main content grid */}
                <div className="content">
                    {activeLocation?.children?.length ? (
                        <ul>
                            {activeLocation.children.map((item) => (
                                <li key={item.id} onClick={() => openItem(item)}>
                                    <img src={item.icon} alt={item.name} />
                                    <p>{item.name}</p>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-sm text-gray-400">
                            This folder is empty.
                        </p>
                    )}
                </div>
            </div>
        </>
    );
};

const FinderWindow = WindowWrapper(Finder, "finder");

export default FinderWindow;
