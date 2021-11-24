import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import StyledItemDetail from "./StyledItemDetail";
import getAllProducts from '../../../utils/getAllProducts';
import Loader from '../../GlobalComponents/Loader';
import ItemDetail from './ItemDetail'

const ItemDetailContainer = ({allProducts, setAllProducts}) => {
  const { idProduct } = useParams();
  const [product, setProduct] = useState();
  useEffect(() => {
    getAllProducts.then((res) => {
      setAllProducts(res);
      setProduct(allProducts.find((prod) => prod.id === parseInt(idProduct)));
    })
  }, [allProducts, idProduct, setAllProducts]);
    console.log(product)
  return <StyledItemDetail> 
    {
      product ? <ItemDetail product={product} t/> : <Loader />
      
    }
    
    
      
    
  </StyledItemDetail>;
};

export default ItemDetailContainer;
