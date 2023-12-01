import CustomCard from "../components/CustomCard.jsx";

function Passions() {
    return (
        <>
            <div className="items-center my-10">
                <h1 className="text-center text-4xl font-bold">
                    My Passions and Hobbies
                </h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-14 justify-items-center mb-20">
                <CustomCard
                    imgSrc="/passions/sports.jpg"
                    title="Sports"
                    alt="Sports"
                    description="I love football, watching and playing. My focus is on European leagues,
                    especially the Premier League, and major tournaments like the Champions League.
                    I'm a dedicated fan of Manchester City and AC Milan I also find joy in observing
                    national and various European league matches, regardless of the teams involved,
                    as well as international games. "
                />
                <CustomCard
                    imgSrc="/passions/anime.jpg"
                    alt="Anime"
                    title="Anime"
                    description="Anime has been a lifelong joy. Dragon Ball, my all-time favorite, has
                    been with me since childhood, those late-night viewings still bring excitement.
                    Yu-Gi-Oh!, from the first to the sixth series, has profoundly impacted me through the
                    anime, TCG, and video games. Hunter X Hunter, Naruto, and One Piece are also
                    favorites, each adding unique thrills to my anime journey."
                />
                <CustomCard
                    imgSrc="/passions/videogames.jpg"
                    alt="Videogames"
                    title="Videogames"
                    description="Gaming has been a lifelong passion. Since childhood, Nintendo has
                    been my go-to, with Xenoblade Chronicles holding the title of my all-time favorite
                    saga. Alongside it, I've immersed myself in the worlds of Fire Emblem, The Legend
                    of Zelda, and Pokemon. While I've explored games on PlayStation, Xbox, and Steam,
                    Nintendo's allure remains unforgettable."
                />
                <CustomCard
                    imgSrc="/passions/music.jpg"
                    alt="Music"
                    title="Music"
                    description="My passion for music didn't develop until around the age of 15. Since
                    then, my musical tastes have expanded across various genres, including rap, rock,
                    metal, Latin rap and more. I find great joy in exploring music from
                    different sources, even enjoying tracks from series like Dragon Ball, which serve as
                    significant motivational sources. Among my favorite artists and bands are Bon Jovi,
                    Queen, Eminem, Adrian Barba, and others."
                />
                <CustomCard
                    imgSrc="/passions/coding.jpg"
                    alt="Coding"
                    title="Coding"
                    description="While I've always been closely connected to technology, coding and
                    computers didn't initially capture my interest. It wasn't until a few months before
                    deciding my university major and the direction of my life that I began delving into
                    this realm. Making this choice turned out to be one of the best decisions of my life,
                    as I uncovered a wonderful community, outstanding technologies, and, above all, a
                    newfound passion for coding."
                />
                <CustomCard
                    imgSrc="/passions/hobbies.jpg"
                    alt="Hobbies"
                    title="Hobbies"
                    description="In recent times, my hobbies encompass everything mentioned earlier.
                    However, there are additional activities that I engage in on a daily basis. For
                    instance, I strive to visit the gym six days a week, finding the environment
                    invigorating, along with my occasional jogging sessions. I also enjoy playing
                    soccer with friends when the opportunity arises. Furthermore, a significant portion
                    of my time is dedicated to socializing on various social media platforms. "
                />
            </div>
        </>
    );
}

export default Passions;
