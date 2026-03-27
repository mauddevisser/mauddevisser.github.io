function AboutMe() {
    return (
        <>
            <div className="bento-grid">
                <div className="aboutme-row">
                    <div className="box aboutme shadow-lg overflow-hidden">
                        <div className="text-left">
                            <h2 className="text-3xl font-semibold text-[#1C352D] leading-tight mb-3">Over Mij</h2>
                            <h3 className="text-2xl text-[#1C352D] leading-tight">Ik ben een tweedejaars
                                student Creative Media and Game Technologies aan de Hogeschool Rotterdam en zoek een
                                stageplek waar ik mijn vaardigheden in UX-design en programmeren kan verdiepen. Ik werk
                                graag aan creatieve projecten en haal energie uit het samenwerken binnen een team. Door
                                mijn
                                achtergrond in wedstrijdzwemmen ben ik gewend om doelgericht, zelfstandig en met
                                doorzettingsvermogen te werken, kwaliteiten die ik meeneem in mijn projecten. </h3>
                        </div>
                    </div>

                    <div className="box skills shadow-lg overflow-hidden">
                        <h2 className="text-3xl font-semibold leading-tight mb-3">Mijn Vaardigheden</h2>
                        <h3 className="text-2xl font-semibold leading-tight mb-1">Design:</h3>
                        <h4 className="text-2xl leading-tight mb-3">Figma, Canva, Photoshop.</h4>
                        <h3 className="text-2xl font-semibold leading-tight mb-1"> Programmeren: </h3>
                        <h4 className="text-2xl leading-tight mb-3">HTML, CSS, PHP (MVC), JavaScript,
                            React, API.</h4>
                        <h3 className=" text-2xl font-semibold leading-tight">Tools: </h3>
                        <h4 className="text-2xl leading-tight mb-1 "> Github, UX Research.</h4>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutMe;
