import {Link} from "react-router";
import {ScrollArrows} from "../components/ScrollArrows.jsx";
import {TimelineItem} from "../components/TimelineItem.jsx";

function Home() {
    return (
        <>
            <div className="bento-grid">
                <div className="box intro shadow-lg overflow-hidden relative">
                    <div className="text-left z-10 relative">
                        <h1 className="text-xl md:text-4xl font-semibold text-[#1C352D] leading-tight mb-1">Hallo
                            ik ben Maud</h1>
                        <h2 className="text-xl md:text-4xl font-semibold text-[#1C352D] leading-tight">Ik ben
                            leergierig en vastberaden</h2>
                    </div>
                    <img src='/flower.png' alt="Flower"
                         className="absolute bottom-[px] -right-5 opacity-75 md:opacity-100 w-25 md:w-52 h-auto object-contain md:relative md:-mt-18 md:-mr-18"/>
                </div>
                <div className="box description shadow-lg">
                    <p className="text-[#1C352D] text-base md:text-xl leading-relaxed">
                        Ik ben een tweedejaars student Creative Media and Game Technologies aan de Hogeschool Rotterdam.
                        Ik werk graag aan creatieve projecten en haal energie uit het samenwerken binnen een team. </p>
                </div>
                <div className="side-column">
                    <div className="box profile-pic shadow-lg">
                        <img src='/mauddevisser.png' alt="Maud de Visser"/>
                    </div>
                    <Link to={'/projects'} className="box project-button shadow-lg no-underline">
                        <span className="text-xl font-semibold md:text-3xl">Projecten</span>
                        <span className="absolute font-semibold top-1 right-4 text-3xl md:text-5xl">↗</span>
                    </Link>
                </div>
            </div>

            <ScrollArrows/>

            <div className="flex justify-between text-sm font-medium">
                <div
                    className="relative w-full max-w-400 mx-auto drop-shadow-md grid grid-cols-1 md:grid-cols-2 text-sm font-medium rounded-3xl overflow-hidden">
                    <div className="absolute inset-0 hidden md:flex justify-center pointer-events-none py-13 mt-13">
                        <svg
                            viewBox="0 0 100 500"
                            preserveAspectRatio="none"
                            className="h-full w-34 opacity-30 text-[#1C352D] "
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2">
                            <path d="M50 0 Q80 125 50 250 T50 500"/>
                        </svg>
                    </div>

                    <div
                        className="flex-1 education text-[#1C352D] rounded-3xl md:rounded-r-none md:rounded-l-3xl p-7">
                        <div className="ml-0 md:ml-20">
                            <h3 className="text-3xl md:text-4xl font-bold mb-5 md:mb-8">Educatie</h3>
                            <TimelineItem
                                title="Hogeschool Rotterdam"
                                role="Creative Media and Game Technologies"
                                period="Sep 2024 | Heden"
                                detail="Creatieve concepten tot leven brengen met code en design."
                            />
                            <TimelineItem
                                title="ISW Gasthuislaan"
                                role="Havo"
                                period="Sep 2019 | Jul 2023"
                                detail="Met Informatica als keuzevak legde ik hier de basis voor mijn passie voor programmeren."
                                isLast/>
                        </div>
                        <div>
                            <img src='/flower.png' alt="Flower"
                                 className="hidden md:block w-40 h-auto object-contain -ml-14 -mt-20"/>
                        </div>
                    </div>
                    <div
                        className="flex-1 experience rounded-3xl md:rounded-l-none md:rounded-r-3xl text-[#1C352D] p-7">
                        <div className="ml-0 md:ml-20">
                            <h3 className="text-3xl md:text-4xl font-bold mb-5 md:mb-8">Werkervaring</h3>
                            <TimelineItem
                                title="Jumbo"
                                role="Vulploeg Medewerker"
                                period="Jul 2022 | Heden"
                                detail="Naast het vullen van de vakken werk ik nieuwe teamleden in, zodat ze snel hun weg vinden."
                            />
                            <TimelineItem
                                title="Ballorig"
                                role="All-Round Medewerker"
                                period="Jun 2024 | Dec 2025"
                                detail="Als all-round medewerker deed ik van alles: van de kassa en de catering tot het netjes houden van de speelhal."
                                isLast/>
                        </div>
                        <img src='/star.png' alt="F1 Car"
                             className="hidden md:block w-40 opacity-90 h-auto object-contain ml-110 -mt-120"/>
                    </div>
                </div>
            </div>
            <h3 className="text-4xl text-center text-[#1C352D] mt-5 md:mt-0 font-bold mb-5 md:mb-8">Projecten</h3>
            <div className="flex flex-col md:flex-row  mb-6 gap-10 md:gap-8 justify-between">
                <Link to={'/SwimRecords'} className="group w-full md:w-1/3 flex flex-col">
                    <div className="aspect-video w-full overflow-hidden rounded-2xl bg-gray-100 shadow-sm">
                        <img
                            src='/swimrecords.png' alt="Swimrecords"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>
                </Link>
                <Link to={'/JokerOut'} className="group w-full md:w-1/3 flex flex-col">
                    <div className="aspect-video w-full overflow-hidden rounded-2xl bg-gray-100 shadow-sm">
                        <img
                            src='/jokerout.png' alt="Joker Out Fan page"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>
                </Link>
                <Link to={'/SongfestivalArtists'} className="group w-full md:w-1/3 flex flex-col">
                    <div className="aspect-video w-full overflow-hidden rounded-2xl bg-gray-100 shadow-sm">
                        <img
                            src='/songfestival.png' alt="Songfestival artists"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>
                </Link>
            </div>
            <Link to={'/Projects'} className="box moreprojects-button shadow-lg no-underline">
                <span className="text-lg md:text-xl font-bold">Meer Bekijken</span>
            </Link>
        </>
    );
}

export default Home;