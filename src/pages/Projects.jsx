import {Link} from "react-router";

function Projects() {
    return (
        <>
            <h1 className="text-4xl text-center text-[#1C352D] font-bold mb-6 md:mb-10">Projecten</h1>
            <div className="flex flex-col md:flex-row mb-8 gap-10 md:gap-0 justify-between">
                <Link to={'/JokerOut'}>
                    <img src='/jokerout.png' alt="Joker Out Fan page"
                         className="w-100 h-auto rounded-2xl object-contain"/>
                    <h2 className="italic text-center mt-2 text-lg text-[#1C352D]">Joker Out Fanpage</h2>
                </Link>
                <Link to={'/SwimRecords'}>
                    <img src='/swimrecords.png' alt="Swimrecords" className="w-100 h-auto rounded-2xl object-contain "/>
                    <h2 className="italic text-center mt-2 text-lg text-[#1C352D]">Swim Records</h2>
                </Link>
                <Link to={'/SongfestivalArtists'}>
                    <img src='/songfestival.png' alt="Songfestival artists"
                         className="w-100 h-auto rounded-2xl object-contain"/>
                    <h2 className="italic text-center mt-2 text-lg text-[#1C352D]">Songfestival Artists</h2>
                </Link>
            </div>
        </>
    );
}

export default Projects;