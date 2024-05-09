const About = () => {
    return (
        <div className="flex flex-col-reverse lg:flex-row my-10 items-center gap-24 m-2">
            <div className="img w-full lg:w-1/2 relative mx-auto">
                <div id="personImg" className="w-[300px] h-[300px] md:w-[570px] md:h-[570px]"></div>
                <div id="partsImg" className="w-[150px] h-[150px] md:w-[300px] md:h-[300px] bg-black absolute -bottom-10 right-0  md:-bottom-20 md:left-[60%]"></div>
            </div>
            <div className="text-content w-full lg:w-1/2 space-y-10">
                <h6 className="text-orange text-xl font-bold">About Us</h6>
                <h3 className="text-4xl font-bold">We are qualified & of experience in this field</h3>
                <p className="text-lg">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. <br /> <br />
                the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
                </p>
                <button className="bg-orange border-orange border-2 text-white rounded-[5px] px-5 py-4 hover:bg-transparent transition-all">Disocver More</button>
            </div>
        </div>
    );
};

export default About;