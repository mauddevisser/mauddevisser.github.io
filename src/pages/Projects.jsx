import ProjectCardItem from "../../components/ProjectCardItem.jsx";

function Projects() {
    return (
        <div className="w-full">
            <h1 className="text-4xl text-center text-[#1C352D] font-bold mb-6 md:mb-10">
                Projecten
            </h1>
            <div className="flex flex-col md:flex-row gap-8 mb-4 md:mb-0 w-full">
                <ProjectCardItem
                    to="/SwimRecords"
                    img="/swimrecords.png"
                    title="Swim Records"
                    role="Full Stack"
                    description="Interactief overzicht van zwem-wereldrecords."
                />

                <ProjectCardItem
                    to="/JokerOut"
                    img="/jokerout.png"
                    title="Joker Out Fanpage"
                    role="UX Design & Frontend"
                    description="Een fanpage voor de Sloveense band Joker Out."
                />

                <ProjectCardItem
                    to="/SongfestivalArtists"
                    img="/songfestival.png"
                    title="Eurovision Artists"
                    role="PHP & Laravel"
                    description="Een database applicatie gebouwd met het Laravel framework."
                />
            </div>
        </div>
    );
}

export default Projects;