function Home() {
    return (
        <>
            <section
                className="flex flex-col md:flex-row items-center justify-center min-h-screen gap-10 px-5">
                <div className="text-center md:text-left">
                    <h2 className="text-5xl text-white mb-4">Welkom ik ben</h2>
                    <div className="relative content inline-block">
                        <h2 className="absolute text-transparent -webkit-text-stroke-2 text-pink-400 font-extrabold">Maud</h2>
                        <h2 className="animated text-[#E762B6] font-extrabold">Maud</h2>
                    </div>
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