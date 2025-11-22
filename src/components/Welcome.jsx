import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const FONT_WEIGHTS = {
    subtitle: { min: 100, max: 400, default: 100 },
    title: { min: 400, max: 900, default: 400 },
};

const renderText = (text, className, baseWeight = 400) => {
    return [...text].map((char, index) => (
        <span
            key={index}
            className={className}
            style={{ fontVariationSettings: `'wght' ${baseWeight}` }}
        >
      {char === " " ? "\u00A0" : char}
    </span>
    ));
};

const setupTextHover = (container, type) => {
    if (!container) return;

    const letters = container.querySelectorAll("span");
    const { min, max, default: base } = FONT_WEIGHTS[type];

    const animateLetter = (letter, weight, duration = 0.25) => {
        return gsap.to(letter, {
            duration,
            ease: "power2.out",
            fontVariationSettings: `'wght' ${weight}`,
        });
    };

    const handleMouseMove = (e) => {
        const { left } = container.getBoundingClientRect();
        const mouseX = e.clientX - left;

        letters.forEach((letter) => {
            const { left: letterLeft, width: letterWidth } =
                letter.getBoundingClientRect();

            const centerX = letterLeft - left + letterWidth / 2;
            const distance = Math.abs(mouseX - centerX);

            // Gaussian falloff
            const intensity = Math.exp(-(distance ** 2) / 2000);
            const weight = min + (max - min) * intensity;

            animateLetter(letter, weight);
        });
    };

    const handleMouseLeave = () => {
        letters.forEach((letter) => animateLetter(letter, base, 0.4));
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    // return cleanup function so caller can remove listeners
    return () => {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
    };
};

const Welcome = () => {
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);

    useGSAP(() => {
        const cleanTitle = setupTextHover(titleRef.current, "title");
        const cleanSubtitle = setupTextHover(subtitleRef.current, "subtitle");

        return () => {
            cleanTitle && cleanTitle();
            cleanSubtitle && cleanSubtitle();
        };
    }, []);

    return (
        <section id="welcome">
            <p ref={subtitleRef}>
                {renderText(
                    "Hey I'm Paresh Welcome to my",
                    "text-3xl font-georama",
                    100
                )}
            </p>

            <h1 ref={titleRef} className="mt-7">
                {renderText("portfolio", "text-9xl italic font-georama", 400)}
            </h1>

            <div className="small-screen">
                <p>This Portfolio is designed for desktop/tablet screen</p>
            </div>
        </section>
    );
};

export default Welcome;

