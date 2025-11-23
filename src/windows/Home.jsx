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

    // This will be the SINGLE folder
    const projectsFolder = locations.work

    const openProjects = () => {
        setActiveLocation(projectsFolder)
        openWindow('finder')
    }

    useGSAP(() => {
        Draggable.create(".folder", {
            bounds: "#home",
            inertia: true,
            edgeResistance: 0.8,
            type: "x,y",
        })
    }, [])

    return (
        <section id="home">
            <ul className="single-folder">
                <li
                    className="group folder cursor-pointer"
                    onClick={openProjects}
                >
                    <img src="/images/folder.png" alt="Projects"/>
                    <p>Projects</p>
                </li>
            </ul>
        </section>
    )
}

export default Home
