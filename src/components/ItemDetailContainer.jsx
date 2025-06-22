import { useEffect, useState } from "react";
import { useParams } from "react-router";

import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const [item, setItem] = useState([]);
  const { id } = useParams();

  //console.log(id);
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((res) => setItem(res));
  }, [id]);

  return <ItemDetail item={item} />;
}

export default ItemDetailContainer;
