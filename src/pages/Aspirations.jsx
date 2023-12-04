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
                <CustomCard
                    imgSrc="/aspirations/studying.png"
                    title="Keep studying"
                    alt="studying"
                    description="After completing my bachelor's degree as a software engineer at TEC, I would
                    like to pursue a master's degree and continue my studies. I believe that studying is one of
                    the most important actions in life because it shapes us as individuals. Therefore, I don't
                    want to limit myself to a bachelor's degree but rather specialize further and continue my
                    education, either internationally or at a national university."
                />
                <CustomCard
                    imgSrc="/aspirations/languages.png"
                    title="Learn new languages"
                    alt="Languages"
                    description="My native language is Spanish, and I have been learning English since I was very
                    young. Recently, I have decided to pick up Portuguese. However, I don't want to limit myself
                    to just these three languages. I believe that learning new languages is not only a valuable
                    skill for work but also a way to understand the cultures of different countries. That's why,
                    in the future, after mastering Portuguese, I would like to continue learning new languages
                    such as Italian or Japanese."
                />
                <CustomCard
                    imgSrc="/aspirations/learn.webp"
                    title="Expand one's knowledge"
                    alt="learn"
                    description="I would like to continue learning new things. For instance, as mentioned in the
                    skills section, I excel in mathematics, so I do not rule out refining my skills in this field.
                    Additionally, I am drawn to physics, space, and the universe, so I would like to delve into
                    that subject. On a more personal level, I aspire to learn to play musical instruments, such
                    as the piano."
                />
            </div>
        </>
    );
}

export default Aspirations;