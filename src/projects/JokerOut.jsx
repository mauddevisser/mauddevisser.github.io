import {Link} from "react-router";

function JokerOut() {
    return (
        <div className="py-8">
            <div className="mb-12">
                <h1 className="text-3xl md:text-5xl text-center text-[#1C352D] md:-mt-10 font-bold mb-4">
                    Joker Out Fanpage
                </h1>
                <div className="flex justify-center gap-2">
                    <span
                        className="bg-[#1C352D] text-[#F4EEED] px-3 py-2 rounded-full text-xs font-semibold uppercase">HTML5</span>
                    <span
                        className="bg-[#1C352D] text-[#F4EEED] px-3 py-2 rounded-full text-xs font-semibold uppercase">CSS</span>
                    <span
                        className="bg-[#1C352D] text-[#F4EEED] px-3 py-2 rounded-full text-xs font-semibold uppercase">Responsive Design</span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-10">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                    <video
                        src='/jokeroutvideo.mp4'
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
                            Voor deze schoolopdracht heb ik een fanwebsite ontwikkeld voor de Sloveense
                            band Joker Out.
                            Het doel was om een visueel aantrekkelijk platform te creëren dat de sfeer van de band
                            uitstraalt,
                            terwijl de content overzichtelijk en toegankelijk blijft voor fans.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-[#1C352D] mb-2">Wat ik heb geleerd</h2>
                        <ul className="list-disc list-inside text-[#1C352D]/85 space-y-2">
                            <li>Het maken van een webapplicatie met <strong>semantische HTML</strong> voor betere SEO en
                                toegankelijkheid.
                            </li>
                            <li>Stylen met <strong>CSS</strong> (Flexbox) voor een mooie
                                layout.
                            </li>
                            <li>Het maken van een <strong>responsive design</strong>, zodat de site op zowel mobiel als
                                desktop werkt.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="bg-[#95977A] text-[#1C352D] shadow-lg p-8 rounded-3xl">
                <h3 className="font-bold text-xl mb-4">Project Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <span className="font-semibold block">Github Repository:</span>
                        <Link to="https://github.com/mauddevisser/frontend-development.git"
                              className="underline break-all hover:text-[#35463b] transition-colors">
                            https://github.com/mauddevisser/frontend-development.git
                        </Link>
                    </div>
                    <div className="text-[#1C352D]">
                        <span className="font-semibold block">Type:</span>
                        Individueel Schoolproject (Frontend Development)
                        <span className="font-semibold block mt-4 ">Focus:</span>
                        HTML & CSS
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JokerOut;