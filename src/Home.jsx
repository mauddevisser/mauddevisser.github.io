import {Link} from "react-router";
import {ScrollArrows} from "../components/ScrollArrows.jsx";
import {TimelineItem} from "../components/TimelineItem.jsx";

function Home() {
    return (
        <>
            <div className="bento-grid">
                <div className="box intro shadow-lg overflow-hidden">
                    <div className="text-left">
                        <h2 className="text-4xl font-semibold text-[#1C352D] leading-tight mb-1">Hallo ik ben Maud</h2>
                        <h2 className="text-4xl font-semibold text-[#1C352D] leading-tight">Ik ben nieuwsgierig en
                            creatief</h2>
                    </div>
                    <img src='/flower.png' alt="Flower" className="w-52 h-auto object-contain -mr-20 -mt-16"/>
                </div>
                <div className="box description shadow-lg">
                    <p className="text-[#1C352D] text-xl leading-relaxed">
                        Ik ben een tweedejaars student Creative Media and Game Technologies aan de Hogeschool Rotterdam.
                        Ik werk graag aan creatieve projecten en haal energie uit het samenwerken binnen een team. </p>
                </div>
                <div className="side-column">
                    <div className="box profile-pic shadow-lg">
                        <img src='/mauddevisser.png' alt="Maud de Visser"/>
                    </div>
                    <Link to={'/Contact'} className="box contact-button shadow-lg no-underline">
                        <span className="text-3xl text-[#F4EEED]">Contact</span>
                        <span className="absolute top-1 right-4 text-5xl">↗</span>
                    </Link>
                </div>
            </div>

            <ScrollArrows/>

            <div className="flex justify-between text-sm font-medium">
                <div
                    className="relative drop-shadow-md grid grid-cols-2 text-sm font-medium rounded-3xl overflow-hidden">
                    <div className="absolute inset-0 flex justify-center pointer-events-none py-13 mt-15">
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

                    <div className="flex-1 experience text-[#1C352D] rounded-l-3xl p-7">
                        <div className="ml-20">
                            <h3 className="text-4xl font-bold mb-8">Educatie</h3>
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
                                 className="w-40 h-auto object-contain -ml-14 -mt-36"/>
                        </div>
                    </div>
                    <div
                        className="flex-1 experience rounded-r-3xl text-[#1C352D] p-7">
                        <div className="ml-20">
                            <h3 className="text-4xl font-bold mb-8">Werkervaring</h3>
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
                        <img src='/flower.png' alt="Flower" className="w-52 h-auto object-contain ml-110 -mt-96"/>
                    </div>
                </div>
            </div>
            <ScrollArrows/>
            <h3 className="text-4xl text-center mt-26 text-[#1C352D] font-bold mb-8">sssss</h3>
            <div className="flex flex-row mb-16 justify-between">
                <Link to={'/'}>
                    <img src='/jokerout.png' alt="Joker Out Fan page"
                         className="w-100 h-auto rounded-2xl object-contain"/>
                </Link>
                <Link to={'/'}>
                    <img src='/swimrecords.png' alt="Swimrecords" className="w-100 h-auto rounded-2xl object-contain "/>
                </Link>
                <Link to={'/'}>
                    <img src='/songfestival.png' alt="Songfestival artists"
                         className="w-100 h-auto rounded-2xl object-contain"/>
                </Link>
            </div>
        </>
    );
}

export default Home;
