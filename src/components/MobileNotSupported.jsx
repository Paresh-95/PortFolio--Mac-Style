import React from "react";

const MobileNotSupported = () => {
    return (
        <div className="mobile-not-supported">
            <div className="content">
                <div className="icon">
                    <svg
                        width="80"
                        height="80"
                        viewBox="0 0 80 80"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect
                            x="20"
                            y="10"
                            width="40"
                            height="60"
                            rx="4"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                        />
                        <circle cx="40" cy="65" r="2" fill="currentColor" />
                    </svg>
                </div>

                <h1>Not Optimized for Mobile</h1>
                <p>Please open this portfolio on a desktop or tablet for the best experience.</p>

                <div className="decoration">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
            </div>
        </div>
    );
};

export default MobileNotSupported;
