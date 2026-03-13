import {createBrowserRouter, RouterProvider} from "react-router";
import Layout from "./layouts/Layout.jsx";
import Home from "./Home.jsx";
import Contact from "./pages/Contact.jsx";
import AboutMe from "./pages/AboutMe.jsx";
import Projects from "./pages/Projects.jsx";

const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/Projects',
                element: <Projects/>
            },
            {
                path: '/AboutMe',
                element: <AboutMe/>
            },
            {
                path: '/Contact',
                element: <Contact/>
            },
            {
                path: '*',
                element: (
                    <main className="mx-auto max-w-7xl text-center mt-20">
                        <h1 className="text-5xl font-bold text-red-500">404</h1>
                        <p className="mt-4 text-lg ">Oops! The page you're looking for doesn't exist.</p>
                    </main>
                )
            }
        ]
    }
])

function App() {
    return <RouterProvider router={router}/>
}

export default App
