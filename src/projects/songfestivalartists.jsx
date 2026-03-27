import {Link} from "react-router";

function SongfestivalArtists() {
    return (
        <>
            <h1 className="text-4xl text-center text-[#1C352D] -mt-8 font-bold">Songfestival Artists</h1>
            <div className="bento-grid">
                <div className="project-row">
                    <img src='/songfestival.png' alt="Songfestival artists"
                         className="project-img"/>
                    <h2 className="details text-lg text-center mt-16 text-[#1C352D]">Voor deze schoolopdracht heb ik een
                        website ontwikkeld over verschillende artiesten van het Eurovisie Songfestival.
                        De website is individueel gebouwd met HTML, CSS en PHP en maakt gebruik van het MVC-framework
                        Laravel. Tijdens deze opdracht heb ik geleerd hoe je werkt met Laravel, het toepassen van MVC en
                        de basisprincipes van OTAP en OWASP.</h2>
                </div>
            </div>

            <h3 className="text-[#1C352D] font-semibold -mt-6 ml-13">Github:
                <Link to="https://github.com/Bakkerbout/songfestival-artists.git "
                      className="underline italic font-normal ml-1">https://github.com/Bakkerbout/songfestival-artists.git </Link>
            </h3>
        </>
    );
}

export default SongfestivalArtists;
