import CustomCard from "../components/CustomCard.jsx";
import {FaGithub} from "react-icons/fa";

function Skills() {
    return (
        <>
            <div className="items-center my-10">
                <h1 className="text-center text-4xl font-bold">
                    My Skills and Abilities as developer
                </h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-14 justify-items-center mb-20">
                <CustomCard
                    imgSrc="/skills/python.png"
                    alt="Python"
                    title="Python"
                    description="Python was my first programming language, learned during my time at TEC. It served
                    as the gateway to my journey in the programming world, leading me to where I am today. I have
                    hands-on experience with Python through the development of various projects. One notable achievement
                    includes creating a backend using the Scrapy framework for a web application dedicated to video games."
                />
                <CustomCard
                    imgSrc="/skills/cpp.jpg"
                    alt="C/C++"
                    title="C/C++"
                    description="C and C++ are languages I independently delved into and refined further through a university
                    course. These languages have provided me with a closer understanding of low-level programming, notably
                    through pointer usage. Additionally, it was in these languages that I learned to implement data structures
                    such as linked lists, queues, stacks, binary trees, and graphs. I hold a keen interest in expanding my
                    knowledge of C++, with the goal of delving into the workings of the Unreal Engine for game development
                    in the future."
                />
                <CustomCard
                    imgSrc="/skills/java.jpg"
                    alt="Java"
                    title="Java"
                    description="Java, learned in an Object-Oriented Programming course, provided insights into programming
                    paradigms and best practices. I've applied design patterns like Singleton and Observer. While my Java
                    projects were academic, they included interesting elements such as socket usage and graphical user interfaces,
                    contributing to a solid understanding of both language and design principles."
                />
                <CustomCard
                    imgSrc="/skills/jshtmlcss.jpg"
                    alt="JavaScript, HTML, CSS"
                    title="Javascript, HTML, CSS"
                    description="JavaScript, HTML, and CSS are frontend development technologies I pursued independently. While
                    I primarily lean towards frameworks (like Bootstrap or Tailwind CSS) in my regular work, mastering these foundational technologies opened the
                    gateway to the world of web development for me. Additionally, I have delved into Node.js, expanding my
                    capabilities to server-side development within the JavaScript ecosystem."
                />
                <CustomCard
                    imgSrc="/skills/react.jpg"
                    alt="React"
                    title="React"
                    description="React stands out as one of the technologies that captivates me the most. Like the majority of web
                    development technologies I've learned, I've done so independently. I've undertaken various projects in React,
                    and I find it to be the frontend technology that aligns best with my preferences. In fact, this page is built
                    using React, alongside other technologies such as Vite and Tailwind CSS."
                />
                <CustomCard
                    imgSrc="/skills/tailwindcss.png"
                    alt="Tailwind CSS"
                    title="Tailwind CSS"
                    description="Tailwind CSS has become my go-to framework for React development. I recently acquired proficiency in
                    using it, especially in the context of creating this page. I appreciate the seamless interaction between React and
                    Tailwind CSS. Moreover, in Tailwind CSS development, I've leveraged libraries like Flowbite to incorporate pre-designed
                    components, streamlining the design process."
                />
                <CustomCard
                    imgSrc="/skills/kotlin.png"
                    alt="Kotlin"
                    title="Kotlin and Android development"
                    description="I delved into Kotlin out of necessity when tasked with creating a mobile application for data analysis gathered
                    from an Arduino—an intriguing project, to say the least. While I've only developed that specific app in Kotlin, the experience
                    taught me valuable insights into the language and Android development. Additionally, Kotlin enabled me to seamlessly integrate
                    different technologies, exemplified by linking Firebase with this particular application."
                />
                <CustomCard
                    imgSrc="/skills/assembly.jpg"
                    alt="Assembly"
                    title="Assembly Language"
                    description="I had to learn assembly language for two university projects. The first one was relatively straightforward,
                    but the second involved creating an application for Morse code chats using Firebase as a service. Thanks to this language,
                    I gained a wealth of knowledge in low-level programming, covering memory registers, processor instructions, and other
                    fundamental concepts. Despite its initial difficulty, over time, I developed an affinity for this language, and now, I greatly
                    appreciate its intricacies."
                />
                <CustomCard
                    imgSrc="/skills/tools.png"
                    alt="Extra tools"
                    title="Extra tools"
                    description="In addition to programming languages, I've become acquainted with several useful tools, such as Git and GitHub.
                    I've utilized services like Firebase. Furthermore, I have hands-on experience and a basic understanding of Linux operating systems.
                    Currently, alongside Windows, I manage the EndeavourOS distribution. Additionally, I've used LaTeX for text document composition."
                />
                <CustomCard
                    imgSrc="/skills/personal.webp"
                    alt="Personal skills"
                    title="Personal skills"
                    description="Beyond the technical realm, I possess skills in mathematics, an area I find both intuitive and have honed through
                    university courses. Additionally, I consider myself proficient in soft skills, excelling in communication with colleagues and
                    peers. Fluent in both English and Spanish, I've recently undertaken learning Portuguese as well."
                />
            </div>
            <div className="my-20 text-center">
                <div className="flex items-center justify-center">
                    <p className="text-xl font-bold">
                        If you want to check my projects, take a look at my{" "}
                        <a href="https://github.com/akhoz" target="_blank" rel="noopener noreferrer">
                            GitHub profile
                        </a>
                        .
                    </p>
                    <a href="https://github.com/akhoz" target="_blank" rel="noopener noreferrer" className="ml-2">
                        <FaGithub className="text-3xl animate-pulse" />
                    </a>
                </div>
            </div>
        </>
    )
}

export default Skills;