import {Link} from "react-router";

function SwimRecords() {
    return (
        <div className="py-8">
            <div className="mb-12">
                <h1 className="text-3xl md:text-5xl text-center text-[#1C352D] md:-mt-10 font-bold mb-4">
                    Swim Records
                </h1>
                <div className="flex flex-wrap justify-center gap-2">
                    <span
                        className="bg-[#1C352D] text-[#F4EEED] px-3 py-2 rounded-full text-xs font-semibold uppercase">React</span>
                    <span
                        className="bg-[#1C352D] text-[#F4EEED] px-3 py-2 rounded-full text-xs font-semibold uppercase">JavaScript</span>
                    <span
                        className="bg-[#1C352D] text-[#F4EEED] px-3 py-2 rounded-full text-xs font-semibold uppercase">Node.js</span>
                    <span
                        className="bg-[#1C352D] text-[#F4EEED] px-3 py-2 rounded-full text-xs font-semibold uppercase">Fullstack</span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-10">
                <div className="rounded-2xl overflow-hidden mt-3 shadow-2xl">
                    <video
                        src='/swimrecordsvideo.mp4'
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
                            Voor dit project heb ik een platform ontwikkeld dat een overzicht geeft van
                            wereldrecords in het wedstrijdzwemmen.
                            De grootste uitdaging hierbij was om een data te filteren
                            (bijvoorbeeld op zwemslag of afstand) en deze dynamisch te presenteren, zodat de gebruiker
                            altijd de relevante records ziet zonder de pagina te herladen. </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-[#1C352D] mb-2">Wat ik heb geleerd</h2>
                        <ul className="list-disc list-inside text-[#1C352D]/85 space-y-2">
                            <li>Het bouwen van een <strong>RESTful API</strong> (backend) om data te tonen.</li>
                            <li>Het ophalen en verwerken van data met <strong>Asynchronous JavaScript
                                (Fetch)</strong> binnen React.
                            </li>
                            <li><strong>State management</strong> in React om de UI synchroon te houden met de
                                serverdata.
                            </li>
                            <li>Het structureren van een fullstack applicatie waarbij frontend en backend gescheiden
                                zijn.
                            </li>
                            <li>Het testen van de backend met Postman om
                                te kijken of de JSON-respons correct is voordat de frontend deze aanroept.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="bg-[#95977A] shadow-lg p-8 rounded-3xl">
                <h3 className="text-[#1C352D] font-bold text-xl mb-4">Project Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <div>
                            <span className="font-semibold block text-[#1C352D]">Github Frontend:</span>
                            <Link to="https://github.com/mauddevisser/swimrecords-frontend.git"
                                  className="text-[#1C352D] underline break-all hover:text-[#35463b] transition-colors">
                                https://github.com/mauddevisser/swimrecords-frontend.git
                            </Link>
                        </div>
                        <div>
                            <span className="font-semibold block text-[#1C352D]">Github Backend:</span>
                            <Link to="https://github.com/mauddevisser/swimrecords-backend.git"
                                  className="text-[#1C352D] underline break-all hover:text-[#35463b] transition-colors">
                                https://github.com/mauddevisser/swimrecords-backend.git
                            </Link>
                        </div>
                    </div>
                    <div className="text-[#1C352D]">
                        <span className="font-semibold block text-[#1C352D]">Type:</span>
                        Individueel Schoolproject (Web Development)
                        <span className="font-semibold block mt-4 text-[#1C352D]">Stack:</span>
                        React, Node.js, Express, Postman, CSS
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SwimRecords;