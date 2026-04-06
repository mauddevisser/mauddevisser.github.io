import {Link} from "react-router";

function SongfestivalArtists() {
    return (
        <div className="py-8">
            <div className="mb-12">
                <h1 className="text-3xl md:text-5xl text-center text-[#1C352D] md:-mt-10 font-bold mb-4">
                    Eurovision Index
                </h1>
                <div className="flex flex-wrap justify-center gap-2">
                    <span
                        className="bg-[#1C352D] text-[#F4EEED] px-3 py-2 rounded-full text-xs font-semibold uppercase">Laravel</span>
                    <span
                        className="bg-[#1C352D] text-[#F4EEED] px-3 py-2 rounded-full text-xs font-semibold uppercase">PHP</span>
                    <span
                        className="bg-[#1C352D] text-[#F4EEED] px-3 py-2 rounded-full text-xs font-semibold uppercase">MySQL</span>
                    <span
                        className="bg-[#1C352D] text-[#F4EEED] px-3 py-2 rounded-full text-xs font-semibold uppercase">MVC Architecture</span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-10">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                    <video
                        src='/songfestivalartistsvideo.mp4'
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-auto block">
                        Je browser ondersteunt geen video-tags.
                    </video>
                </div>

                <div className="space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold text-[#1C352D] mb-2">Over dit project</h2>
                        <p className="text-lg text-[#1C352D]/85 leading-relaxed">
                            Voor het vak Web Application Frameworks heb ik een database-gedreven applicatie ontwikkeld
                            over Eurovisie Songfestival artiesten.
                            Het project focust op het beheren en weergeven van data binnen een framework.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-[#1C352D] mb-2">Wat ik heb geleerd</h2>
                        <ul className="list-disc list-inside text-[#1C352D]/85 space-y-2">
                            <li>Het toepassen van de <strong>MVC-structuur</strong> (Model-View-Controller) voor een
                                scheiding van logica en interface.
                            </li>
                            <li>Werken met <strong>Eloquent ORM</strong> voor database-interacties en migraties.</li>
                            <li>De <strong>OWASP-richtlijnen</strong> implementeren om de applicatie te beveiligen.
                            </li>
                            <li>Kennis van het <strong>OTAP-model</strong> (Ontwikkeling, Test, Acceptatie, Productie)
                                voor een professionele workflow.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="bg-[#95977A] shadow-lg p-8 rounded-3xl">
                <h3 className="text-[#1C352D] font-bold text-xl mb-4">Project Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <span className="font-semibold block text-[#1C352D]">Github Repository:</span>
                        <Link to="https://github.com/mauddevisser/songfestival-artists.git"
                              className="text-[#1C352D] underline break-all hover:text-[#35463b] transition-colors">
                            https://github.com/mauddevisser/songfestival-artists.git
                        </Link>
                    </div>
                    <div className="text-[#1C352D]">
                        <span className="font-semibold block text-[#1C352D]">Type:</span>
                        Individueel Project (Web Application Frameworks)
                        <span className="font-semibold block mt-4 text-[#1C352D]">Focus:</span>
                        Backend Logica & Database Management
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SongfestivalArtists;
