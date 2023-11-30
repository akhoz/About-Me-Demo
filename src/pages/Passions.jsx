import CustomCard from "../components/CustomCard.jsx";

function Passions() {
  return (
    <div className="flex items-center justify-center h-screen space-x-8">
        <CustomCard
            imgSrc="/passions/sports.jpg"
            title="Sports"
            alt="Sports"
            description="Hello World"
        />
        <CustomCard
            imgSrc="/passions/anime.jpg"
            alt="Anime"
            title="Anime"
            description="Hello World"
        />
    </div>
  );
}

export default Passions;