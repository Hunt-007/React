import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router";
import { getItems, getItemsByCategory } from "../firebase/db";

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    if (categoryName) {
      getItemsByCategory(categoryName).then((res) => setItems(res));
    } else {
      getItems().then((res) => setItems(res));
    }
  }, [categoryName]);

  return <ItemList items={items} />;
}

export default ItemListContainer;
