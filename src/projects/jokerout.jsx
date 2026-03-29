import {Link} from "react-router";

function JokerOut() {
    return (
        <>
            <h1 className="text-2xl md:text-4xl text-center text-[#1C352D] -mt-2 md:-mt-8 font-bold">Joker Out
                Fanpage</h1>
            <div className="bento-grid">
                <div className="project-row">
                    <video
                        src='/jokeroutvideo.mp4'
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="project-vid w-full h-auto">
                        Je browser ondersteunt geen video-tags.
                    </video>
                    <p className="details text-lg text-center md:mt-16 text-[#1C352D]">Voor deze schoolopdracht heb ik
                        een
                        fanwebsite ontwikkeld over de band Joker Out. De website is individueel gebouwd met HTML en CSS.
                        Tijdens het project heb ik geleerd hoe ik een website kan opbouwen en vormgeven met HTML en CSS,
                        en hoe ik content op een gestructureerde manier toon.</p>
                </div>
            </div>

            <h3 className="text-[#1C352D] font-semibold -mt-8 md:-mt-6 mb-2 md:mb-0 md:ml-13">Github:
                <Link to="https://github.com/Bakkerbout/frontend-development.git"
                      className="underline italic font-normal ml-1 break-all"> https://github.com/Bakkerbout/frontend-development.git</Link>
            </h3>
        </>
    );
}

export default JokerOut;
