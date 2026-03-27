import {Link} from "react-router";

function JokerOut() {
    return (
        <>
            <h1 className="text-4xl text-center text-[#1C352D] -mt-8 font-bold">Joker Out Fanpage</h1>
            <div className="bento-grid">
                <div className="project-row">
                    <img src='/jokerout.png' alt="Joker Out Fan page"
                         className="project-img"/>
                    <h2 className="details text-lg text-center mt-16 text-[#1C352D]">Voor deze schoolopdracht heb ik een
                        fanwebsite
                        ontwikkeld
                        over de band Joker
                        Out. De website is individueel gebouwd met HTML en CSS. Tijdens het project heb ik geleerd hoe
                        ik een website kan opbouwen en vormgeven met HTML en CSS, en hoe ik content op een
                        gestructureerde manier toon.</h2>
                </div>
            </div>

            <h3 className="text-[#1C352D] font-semibold -mt-6 ml-13">Github:
                <Link to="https://github.com/Bakkerbout/frontend-development.git"
                      className="underline italic font-normal ml-1"> https://github.com/Bakkerbout/frontend-development.git</Link>
            </h3>
        </>
    );
}

export default JokerOut;
