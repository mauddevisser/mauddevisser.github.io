import {Link} from "react-router";

function SongfestivalArtists() {
    return (
        <>
            <h1 className="text-2xl md:text-4xl text-center text-[#1C352D] -mt-2 md:-mt-8 font-bold">Songfestival
                Artists</h1>
            <div className="bento-grid">
                <div className="project-row">
                    <video
                        src='/songfestivalartistsvideo.mp4'
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="project-vid w-full h-auto">
                        Je browser ondersteunt geen video-tags.
                    </video>
                    {/*<img src='/songfestival.png' alt="Songfestival artists"*/}
                    {/*     className="project-vid"/>*/}
                    <p className="details text-lg text-center md:mt-16 text-[#1C352D]">Voor deze schoolopdracht heb ik
                        een
                        website ontwikkeld over verschillende artiesten van het Eurovisie Songfestival.
                        De website is individueel gebouwd met HTML, CSS en PHP en maakt gebruik van het MVC-framework
                        Laravel. Tijdens deze opdracht heb ik geleerd hoe je werkt met Laravel, het toepassen van MVC en
                        de basisprincipes van OTAP en OWASP.</p>
                </div>
            </div>

            <h3 className="text-[#1C352D] font-semibold -mt-8 md:-mt-6 mb-2 md:mb-0 md:ml-13">Github:
                <Link to="https://github.com/Bakkerbout/songfestival-artists.git "
                      className="underline italic font-normal ml-1 break-all">https://github.com/Bakkerbout/songfestival-artists.git </Link>
            </h3>
        </>
    );
}

export default SongfestivalArtists;
