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
                            ik
                            ben Maud</h1>
                        <h2 className="text-xl md:text-4xl font-semibold text-[#1C352D] leading-tight">Ik ben
                            nieuwsgierig en
                            creatief</h2>
                    </div>
                    <img src='/flower.png' alt="Flower"
                         className="absolute bottom-[1px] right-[-20px] opacity-75 md:opacity-100 w-25 md:w-52 h-auto object-contain md:relative md:-mt-18 md:-mr-18"/>
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
                        <span className="text-xl md:text-3xl">Projecten</span>
                        <span className="absolute top-1 right-4 text-3xl md:text-5xl">↗</span>
                    </Link>
                </div>
            </div>

            <ScrollArrows/>

            <div className="flex justify-between text-sm font-medium">
                <div
                    className="relative drop-shadow-md grid grid-cols-1 md:grid-cols-2 text-sm font-medium rounded-3xl overflow-hidden">
                    <div className="absolute inset-0 hidden md:flex justify-center pointer-events-none py-13 mt-13">
                        <svg
                            viewBox="0 0 100 500"
                            preserveAspectRatio="none"
                            className="h-full w-34 text-[#1C352D] "
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
                                period="Sep 2024 | Heden"/>
                            <TimelineItem
                                title="ISW Gasthuislaan"
                                role="Havo"
                                period="Sep 2019 | Jul 2023"
                                isLast/>
                        </div>
                        <div>
                            <img src='/thin-flower.png' alt="Thin flower"
                                 className="hidden md:block w-40 h-auto object-contain -ml-14 -mt-36"/>
                        </div>
                    </div>
                    <div
                        className="flex-1 experience rounded-3xl md:rounded-l-none md:rounded-r-3xl text-[#1C352D] p-7">
                        <div className="ml-0 md:ml-20">
                            <h3 className="text-3xl md:text-4xl font-bold mb-5 md:mb-8">Werkervaring</h3>
                            <TimelineItem
                                title="Jumbo"
                                role="Vulploeg Medewerker"
                                period="Jul 2022 | Heden"/>
                            <TimelineItem
                                title="Ballorig"
                                role="All-Round Medewerker"
                                period="Jun 2024 | Dec 2025"
                                isLast/>
                        </div>
                        <img src='/flower.png' alt="Flower"
                             className="hidden md:block w-52 h-auto object-contain ml-110 -mt-96"/>
                    </div>
                </div>
            </div>
            <ScrollArrows/>
            <h3 className="text-4xl text-center mt-22 md:mt-26 text-[#1C352D] font-bold mb-8">Projecten</h3>
            <div className="flex flex-col md:flex-row  mb-8 md:mb-16 gap-10 md:gap-0 justify-between">
                <Link to={'/JokerOut'}>
                    <img src='/jokerout.png' alt="Joker Out Fan page"
                         className="w-100 h-auto rounded-2xl object-contain"/>
                </Link>
                <Link to={'/SwimRecords'}>
                    <img src='/swimrecords.png' alt="Swimrecords" className="w-100 h-auto rounded-2xl object-contain "/>
                </Link>
                <Link to={'/SongfestivalArtists'}>
                    <img src='/songfestival.png' alt="Songfestival artists"
                         className="w-100 h-auto rounded-2xl object-contain"/>
                </Link>
            </div>
        </>
    );
}

export default Home;