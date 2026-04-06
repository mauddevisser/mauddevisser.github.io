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
            <header className={`relative md:fixed top-0 z-50 w-full transition-all duration-300 md:pt-6`}>
                <div className="max-w-none mx-auto md:px-10">
                    <nav
                        className={`flex flex-col md:flex-row justify-between items-center bg-[#DFB5A6] md:px-10 py-6 md:py-5 md:rounded-2xl transition-all duration-300 ${
                            isScrolled ? "shadow-xl backdrop-blur-md bg-[#DFB5A6]/90" : "shadow-lg"}`}>
                        <div className="flex mb-2 md:mb-0">
                            <Link to={'/'}
                                  className="text-[#1A2E26] text-2xl hover:opacity-70 font-bold whitespace-nowrap">
                                Maud de Visser
                            </Link>
                        </div>
                        <div className="flex items-center gap-12">
                            <Link to={'/Projects'}
                                  className="text-[#1A2E26] text-lg md:text-xl font-bold hover:opacity-70 transition-opacity leading-none">
                                Projecten
                            </Link>
                            <Link to={'/AboutMe'}
                                  className="text-[#1A2E26] text-lg md:text-xl font-bold hover:opacity-70 transition-opacity leading-none">
                                Over mij
                            </Link>
                        </div>
                    </nav>
                </div>
            </header>
            <main className="w-full max-w-none mx-auto px-4 md:px-10 mt-6 md:mt-38 grow">
                <Outlet/>
            </main>
            <footer className="bg-[#DFB5A6] py-2 text-center text-[#1A2E26]">
                <h3 className="font-bold text-xl md:text-2xl text-center mb-3">mauddevisser@caiway.net</h3>
                <div className="flex justify-center items-center gap-4 mb-3">
                    <a href="https://www.linkedin.com/in/maud-de-visser-198ba43b3"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="hover:opacity-70 transition-opacity">
                        <img src='/linkedin.png' alt="LinkedIn logo" className="w-8 md:w-10 h-8 md:h-10"/>
                    </a>
                    <a href="https://github.com/Bakkerbout"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="hover:opacity-70 transition-opacity">
                        <img src='/github.svg' alt="GitHub logo" className="w-8 md:w-10 h-8 md:h-10"/>
                    </a>
                </div>
                &copy; {new Date().getFullYear()} Maud de Visser
            </footer>
        </div>
    );
}

export default Layout;