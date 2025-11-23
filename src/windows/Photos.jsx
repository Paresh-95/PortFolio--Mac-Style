import React from 'react'
import WindowControls from '#components/WindowControls'
import WindowWrapper from '#hoc/WindowWrapper'
import { photosLinks, gallery } from '#constants/index.js'

const Photos = () => {
    return (
        <>
            <div id="window-header">
                <WindowControls target="photos" />
                <p></p>
            </div>
            <div className="flex h-full">
                <div className="sidebar">
                    <h2>Photos</h2>
                    <ul>
                        {photosLinks.map((link) => (
                            <li key={link.id}>
                                <img src={link.icon} alt={link.title} />
                                <p>{link.title}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="gallery">
                    <ul>
                        {gallery.map((item) => (
                            <li key={item.id}>
                                <img src={item.img} alt={`gallery-${item.id}`} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default WindowWrapper(Photos, "photos")
