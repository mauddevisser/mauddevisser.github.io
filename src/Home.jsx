function Home() {
    return (
        <>
            <section
                className="flex flex-col md:flex-row items-center justify-center min-h-screen gap-10 px-5">
                <div className="text-center md:text-left">
                    <h2 className="text-5xl text-[#1C352D] mb-4">Welkom ik ben</h2>
                </div>
                <div className="w-64 h-64 md:w-72 md:h-72 overflow-hidden rounded-lg shadow-md">
                    <img src='/mauddevisser.png'
                         alt="Maud de Visser"
                         className="w-full h-full object-cover object-[left_bottom] transform scale-125 "/>
                </div>
            </section>
        </>
    );
}

export default Home;