// function Header({ title }) {
//   return <h1>{title ? title : 'Change title'}</h1>
// }
import Slideshow from "./_components/Slideshow";

export default function HomePage() {
  const featuredRecipes = [
    {
      title: "Creme Brulee",
      description:
        "Creme Brulee has always been my favorite dessert. The caramelized sugar on top really brings in the flavors together.",
      imagePath: "images/recipes/cremeBrulee.jpeg",
      id: "0"
    },
  ];

  return <Slideshow displayList={featuredRecipes} slideshowTitle="Trending" />;
}
