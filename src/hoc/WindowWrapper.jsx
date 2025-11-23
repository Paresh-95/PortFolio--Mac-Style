import React, { useLayoutEffect, useRef } from "react";
import useWindowStore from "#store/window.js";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

const WindowWrapper = (Component, windowKey) => {
    const Wrapped = (props) => {
        const { focusWindow, windows } = useWindowStore();
        const windowState = windows[windowKey];

        // Guard in case windowKey is missing from the store
        if (!windowState) {
            console.warn(`WindowWrapper: No state found for key "${windowKey}"`);
            return null;
        }

        const { isOpen, zIndex } = windowState;
        const ref = useRef(null);

        // Open / close animation
        useGSAP(
            () => {
                const el = ref.current;
                if (!el || !isOpen) return;

                el.style.display = "block";

                gsap.fromTo(
                    el,
                    { scale: 0.8, opacity: 0, y: 40 },
                    { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: "power3.out" }
                );
            },
            [isOpen]
        );

        // Make the window draggable
        useGSAP(() => {
            const el = ref.current;
            if (!el) return;

            const [draggable] = Draggable.create(el, {
                onPress: () => focusWindow(windowKey),
            });

            // Cleanup
            return () => {
                if (draggable) {
                    draggable.kill();
                }
            };
        }, []); // run once on mount

        // Show / hide based on isOpen
        useLayoutEffect(() => {
            const el = ref.current;
            if (!el) return;

            el.style.display = isOpen ? "block" : "none";
        }, [isOpen]);

        return (
            <section
                id={windowKey}
                ref={ref}
                style={{ zIndex }}
                className="absolute"
            >
                <Component {...props} />
            </section>
        );
    };

    Wrapped.displayName = `WindowWrapper(${
        Component.displayName || Component.name || "Component"
    })`;

    return Wrapped;
};

export default WindowWrapper;
