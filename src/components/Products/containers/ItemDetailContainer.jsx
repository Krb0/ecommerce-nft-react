import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StyledItemDetail from "./StyledItemDetail";
import getAllProducts from "../../../utils/getAllProducts";
import Loader from "../../GlobalComponents/Loader";
import ItemDetail from "../ItemDetail";

const ItemDetailContainer = () => {
  const { idProduct } = useParams();
  const [product, setProduct] = useState();
  useEffect(() => {
    let isResolved = true;
    getAllProducts().then((res) => {
      if (isResolved) {
        const filteredProd = res.find((prod) => prod.id === idProduct);
        if (filteredProd) setProduct(filteredProd);
        else window.location.href = "/notfound";
      }
    });
    return () => {
      isResolved = false;
    };
  }, [product, idProduct]);
  return (
    <StyledItemDetail>
      {product ? <ItemDetail product={product} t /> : <Loader />}
    </StyledItemDetail>
  );
};

export default ItemDetailContainer;
