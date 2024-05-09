import { useConFast } from "../Context/ContextProject";
import AdditionFet from "../ui/AdditionFet";
import AdressPage from "../ui/AdressPage";
import CatInShop from "../ui/CatInShop";
import CategoriesInShop from "../ui/CategoriesInShop";

function Shop() {
  const { categories } = useConFast();
  return (
    <div>
      <AdressPage firstAddress="Home/" secAddress=" Shop" />
      <CatInShop />
      {categories.map((category) => (
        <CategoriesInShop
          categoryId={category.categoryId}
          type={category.name}
        />
      ))}
      <AdditionFet />
    </div>
  );
}
export default Shop;
