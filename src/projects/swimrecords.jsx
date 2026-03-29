import {Link} from "react-router";

function SwimRecords() {
    return (
        <>
            <h1 className="text-2xl md:text-4xl text-center text-[#1C352D] -mt-2 md:-mt-8 font-bold">Swim Records</h1>
            <div className="bento-grid">
                <div className="project-row">
                    <video
                        src='/swimrecordsvideo.mp4'
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="project-vid w-full h-auto">
                        Je browser ondersteunt geen video-tags.
                    </video>
                    {/*<img src='/swimrecords.png' alt="Swimrecords" className="project-vid"/>*/}
                    <p className="details text-lg text-center md:mt-16 text-[#1C352D]">Voor deze schoolopdracht heb ik
                        een
                        website ontwikkeld waarop verschillende wereldrecords uit het wedstrijdzwemmen te vinden zijn.
                        De website is individueel gebouwd met HTML, CSS, JavaScript en React.
                        Tijdens het maken van de website heb ik geleerd om te werken met een server en het ophalen en
                        verwerken van data binnen een React-applicatie. Ik heb een front- en backend gemaakt.</p>
                </div>
            </div>

            <h3 className="text-[#1C352D] font-semibold -mt-8 md:-mt-6 mb-2 md:mb-0 md:ml-13">Github Frontend:
                <Link to="https://github.com/Bakkerbout/swimrecords-frontend.git"
                      className="underline italic font-normal md:ml-1 break-all">https://github.com/Bakkerbout/swimrecords-frontend.git</Link>
            </h3>
            <h3 className="text-[#1C352D] font-semibold mb-2 md:mb-0 md:ml-13">Github Backend:
                <Link to="https://github.com/Bakkerbout/swimrecords-frontend.git"
                      className="underline italic font-normal md:ml-1 break-all">https://github.com/Bakkerbout/swimrecords-backend.git</Link>
            </h3>
        </>
    );
}

export default SwimRecords;
