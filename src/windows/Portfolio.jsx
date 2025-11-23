import WindowControls from '#components/WindowControls'
import WindowWrapper from '#hoc/WindowWrapper'
import React from 'react'

const Portfolio = () => {
    return (
        <>
            <div id="window-header">
                <WindowControls target="portfolio" />
                <h2>Old Portfolio</h2>
            </div>
         <div className="p-0 h-[80vh] w-full">
                <iframe
                    src="https://next-portfolio-beta-bice.vercel.app/"
                    className="w-full h-full border-0"
                    title="Old Portfolio"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                />
            </div>
        </>
    )
}

const PortfolioWindow = WindowWrapper(Portfolio, "portfolio")

export default PortfolioWindow
