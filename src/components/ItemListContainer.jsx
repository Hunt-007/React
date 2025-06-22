// src/components/ItemListContainer.jsx
//import React from "react";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router";

//import { withLog } from "../hoc/withLog";
//import { withLoading } from "../hoc/withLoading";

//const ItemListWithLog = withLog(ItemList);
//const ItemListWithLoading = withLoading(ItemList);

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    const url = "https://dummyjson.com/products";
    const urlCategory = `https://dummyjson.com/products/category/${categoryName}`;

    fetch(categoryName ? urlCategory : url)
      .then((res) => res.json())
      .then((res) => setItems(res.products));
  }, [categoryName]);

  return <ItemList items={items} />;
  //return <ItemListWithLoading items={items} />;
} //fin funcion

export default ItemListContainer;
