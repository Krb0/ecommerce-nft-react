import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StyledItemDetail from "./StyledItemDetail";
import { getOneDoc } from "../../../Firebase/firebase";
import Wave from "../../GlobalComponents/Wave";
import ItemDetail from "../Items/ItemDetail";

const ItemDetailContainer = () => {
  const { idProduct } = useParams();
  const [product, setProduct] = useState();
  useEffect(() => {
    let isResolved = true;

    if (isResolved) {
      const filteredProd = getOneDoc(idProduct);
      filteredProd.then((res) => {
        if (filteredProd) setProduct(res);
        else window.location.href = "/notfound";
      });
    }
    return () => {
      isResolved = false;
    };
  }, [product, idProduct]);
  return (
    <StyledItemDetail>
      {product ? <ItemDetail product={product} t /> : <Wave />}
    </StyledItemDetail>
  );
};

export default ItemDetailContainer;
