import {Link} from "react-router";

function Projects() {
    return (
        <>
            <h3 className="text-4xl text-center text-[#1C352D] font-bold mb-8">Projecten</h3>
            <div className="flex flex-row justify-between">
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

export default Projects;
