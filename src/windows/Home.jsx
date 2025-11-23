import React from 'react'
import { locations } from "#constants/index.js"
import { useGSAP } from '@gsap/react'
import { Draggable } from "gsap/Draggable"
import gsap from "gsap"
import useWindowStore from '#store/window'
import useLocationStore from '#store/location'

gsap.registerPlugin(Draggable)

const Home = () => {
    const { setActiveLocation } = useLocationStore();
    const { openWindow } = useWindowStore()

    const projectsFolder = locations.work

    const openProjects = () => {
        setActiveLocation(projectsFolder)
        openWindow('finder')
    }

    useGSAP(() => {
        Draggable.create(".folder", {
            bounds: {
                top: 80,                     // 🟢 Prevent going inside navbar
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight - 100,
            },
            inertia: true,
            edgeResistance: 0.8,
            type: "x,y",
        })
    }, [])

    return (
        <section
            id="home"
            className="relative pt-[90px]"    // 🟢 Add padding so icons start BELOW navbar
        >

            {/* 🔥 Top-Right Disclaimer */}
            <p className="absolute text-black font-semibold top-2 right-4 text-sm opacity-70">
                Open in fullscreen for best experience
            </p>

            {/* 🟦 Desktop Folder */}
            <ul className="single-folder">
                <li
                    className="group folder cursor-pointer w-[80px] text-center"
                    onClick={openProjects}
                >
                    <img src="/images/folder.png" alt="Projects" className="w-[70px]" />
                    <p className="text-white text-sm mt-1 bg-blue-500 rounded px-1 py-[1px]">
                        Projects
                    </p>
                </li>
            </ul>
        </section>
    )
}

export default Home  
