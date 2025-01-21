import { useNavigate } from "react-router-dom";
import NameAppContext from "../context/NameAppContext";
import {useContext} from "react";

export default function useButtons(){
    let {data, setData} = useContext(NameAppContext);
    const navigate = useNavigate();
   const backButton = () => {
       navigate(-1)
   }

   const saleButton = (id) => {
        const productId = id.id.id;
        let products = data.products;
        const updatedProducts = products.map(product => {
            if(product.id === productId){
                console.log(product.stock)
                product.stock--
                console.log(product.stock)
            }
            return product
        })
       return navigate('/')
   }
   return {
       backButton,
       saleButton
   }
}