import {Link} from "react-router";

function SwimRecords() {
    return (
        <>
            <h1 className="text-4xl text-center text-[#1C352D] -mt-8 font-bold">Swim Records</h1>
            <div className="bento-grid">
                <div className="project-row">
                    <img src='/swimrecords.png' alt="Swimrecords" className="project-img"/>
                    <h2 className="details text-lg text-center mt-16 text-[#1C352D]">Voor deze schoolopdracht heb ik een
                        website ontwikkeld waarop verschillende wereldrecords uit het wedstrijdzwemmen te vinden zijn.
                        De website is individueel gebouwd met HTML, CSS, JavaScript en React.
                        Tijdens het maken van de website heb ik geleerd om te werken met een server en het ophalen en
                        verwerken van data binnen een React-applicatie.</h2>
                </div>
            </div>

            <h3 className="text-[#1C352D] font-semibold -mt-6 ml-13">Github:
                <Link to="https://github.com/Bakkerbout/swimrecords-frontend.git"
                      className="underline italic font-normal ml-1"> https://github.com/Bakkerbout/swimrecords-frontend.git</Link>
            </h3>
        </>
    );
}

export default SwimRecords;
