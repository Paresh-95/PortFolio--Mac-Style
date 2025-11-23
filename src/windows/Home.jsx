import React from 'react'
import clsx from 'clsx'
import { locations } from "#constants/index.js"
import { useGSAP } from '@gsap/react'
import { Draggable } from "gsap/Draggable"
import gsap from "gsap"
import useWindowStore from '#store/window'
import useLocationStore from '#store/location'
gsap.registerPlugin(Draggable)
const Home = () => {
    const { setActiveLocation } = useLocationStore();
    const projects = locations.work?.children ?? [];
    const { openWindow } = useWindowStore()

    const handleOpenProjectFinder = (project) => {
        setActiveLocation(project)
        openWindow('finder')
    }


    useGSAP(() => {
        Draggable.create(".folder")
    }, [])

    return (
        <section id='home'>
            <ul>
                {projects.map((project) => (
                    <li key={project.id} onClick={() => handleOpenProjectFinder(project)} className={clsx("group folder", "cursor-pointer", project.windowPosition)}>
                        <img src="/images/folder.png" alt={project.name} />
                        <p>{project.name}</p>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Home