import {Link, Outlet} from "react-router";

function Layout() {
    return (
        <div className="flex flex-col min-h-screen">
            <header>
                <nav className="flex justify-center bg-[#F2649F] gap-4">
                    <Link to={'/'}
                          className="italic p-4 text-lg hover:underline hover:bg-blue-900 hover:text-white font-bold">Home</Link>
                </nav>
            </header>
            <main>
                <Outlet/>
            </main>
            <footer className="text-center">&copy; Maud de Visser</footer>
        </div>
    );
}

export default Layout;