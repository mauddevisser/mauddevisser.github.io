import {Link, Outlet} from "react-router";
import {useState, useEffect} from "react";

function Layout() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <div className="flex flex-col min-h-screen bg-[#F4EEED]">
            <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
                isScrolled
                    ? "70 backdrop-blur-md pt-6 py-1"
                    : "bg-transparent py-6"}`}>
                <nav
                    className={`flex justify-between items-center bg-[#DFB5A6] px-10 py-5 rounded-2xl max-w-7xl mx-auto w-full transition-all duration-300 ${
                        isScrolled ? "shadow-xl" : "shadow-lg"}`}>
                    <div className="flex">
                        <Link to={'/'} className="text-[#1A2E26] text-2xl hover:opacity-70 font-bold">
                            Maud de Visser
                        </Link>
                    </div>
                    <div className="flex gap-12">
                        <Link to={'/Projects'}
                              className="text-[#1A2E26] text-xl font-bold hover:opacity-70 transition-opacity">
                            Projecten
                        </Link>
                        <Link to={'/AboutMe'}
                              className="text-[#1A2E26] text-xl font-bold hover:opacity-70 transition-opacity">
                            Over mij
                        </Link>
                        <Link to={'/Contact'}
                              className="text-[#1A2E26] text-xl font-bold hover:opacity-70 transition-opacity">
                            Contact
                        </Link>
                    </div>
                </nav>
            </header>
            <main className="w-full px-6 md:px-16 mt-8 flex-grow">
                <div className="w-full mx-auto">
                    <Outlet/>
                </div>
            </main>
            <footer className="bg-[#DFB5A6] py-2 text-center text-[#1A2E26]">
                <h3 className="font-bold text-2xl text-center mb-3">mauddevisser@caiway.net</h3>
                <div className="flex justify-center items-center gap-4 mb-3">
                    <a href="https://www.linkedin.com/in/maud-de-visser-198ba43b3"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="hover:opacity-70 transition-opacity">
                        <img src='/linkedin.png' alt="LinkedIn logo" className="w-10 h-10"/>
                    </a>
                    <a href="https://github.com/Bakkerbout"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="hover:opacity-70 transition-opacity">
                        <img src='/github.svg' alt="GitHub logo" className="w-10 h-10"/>
                    </a>
                </div>
                &copy; {new Date().getFullYear()} Maud de Visser
            </footer>
        </div>
    );
}

export default Layout;