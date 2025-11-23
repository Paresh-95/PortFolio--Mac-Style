import React from 'react';
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import WindowControls from "#components/WindowControls.jsx";
import useWindowStore from "#store/window.js";

const Text = () => {
    const { windows } = useWindowStore();
    const data = windows.txtfile?.data;

    if (!data) return null;

    const { name, image, subtitle, description } = data;

    return (
        <>
            <div id="window-header">
                <WindowControls target="txtfile" />
                <h2>{name}</h2>
            </div>
            <div className="p-5 overflow-y-auto h-full pb-10">
                {image && (
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-48 object-contain rounded-lg mb-5"
                    />
                )}
                {subtitle && (
                    <h3 className="text-xl font-bold mb-3 text-gray-800">{subtitle}</h3>
                )}
                {description && description.map((paragraph, index) => (
                    <p key={index} className="text-sm text-gray-600 mb-3 leading-relaxed">
                        {paragraph}
                    </p>
                ))}
            </div>
        </>
    );
};

export default WindowWrapper(Text, 'txtfile');
