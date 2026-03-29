function AboutMe() {
    return (
        <>
            <div className="bento-grid">
                <div className="aboutme-row">
                    <div className="box aboutme shadow-lg overflow-hidden">
                        <div className="text-left">
                            <h1 className="text-2xl md:text-3xl font-semibold text-[#1C352D] mb-3">Over Mij</h1>
                            <p className="text-lg md:text-2xl text-[#1C352D]">Ik ben een tweedejaars
                                student Creative Media and Game Technologies aan de Hogeschool Rotterdam en zoek een
                                stageplek waar ik mijn vaardigheden in UX-design en programmeren kan verdiepen. Ik werk
                                graag aan creatieve projecten en haal energie uit het samenwerken binnen een team. Door
                                mijn
                                achtergrond in wedstrijdzwemmen ben ik gewend om doelgericht, zelfstandig en met
                                doorzettingsvermogen te werken, kwaliteiten die ik meeneem in mijn projecten. </p>
                        </div>
                    </div>

                    <div className="box skills -mb-5 md:mb-0 text-2xl shadow-lg font-semibold overflow-hidden">
                        <h1 className="text-2xl md:text-3xl mb-3">Mijn Vaardigheden</h1>
                        <h2 className="mb-1">Design:
                            <p className="font-normal text-lg md:text-2xl mb-3">Figma, Canva, Photoshop.</p>
                        </h2>
                        <h2 className="mb-1"> Programmeren:
                            <p className="font-normal text-lg md:text-2xl mb-3">HTML, CSS, PHP (MVC), JavaScript,
                                React, React Native, API.</p>
                        </h2>
                        <h2 className="mb-1">Tools:
                            <p className="font-normal text-lg md:text-2xl md:mb-3"> Github, PhpStorm, Visual Studio
                                Code, Expo.</p>
                        </h2>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutMe;
