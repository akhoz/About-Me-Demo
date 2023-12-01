import CustomCard from "../components/CustomCard.jsx";

function Aspirations() {
    return (
        <>
            <div className="items-center my-10">
                <h1 className="text-center text-4xl font-bold">
                    My aspirations and goals
                </h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-14 justify-items-center mb-20">
                <CustomCard
                    imgSrc="/aspirations/specialization.jpg"
                    title="Specialization"
                    alt="Specialization"
                    description="I am still undecided about my specialization because various fields in software
                    development and computer science capture my interest. From artificial intelligence and web
                    development to even game development, I find all of them appealing. I will continue immersing
                    myself in these fields to make my decision for the future."
                />
            </div>
        </>
    );
}

export default Aspirations;