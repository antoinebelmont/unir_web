import { useNavigate } from "react-router-dom";

export default function useButtons(){
    const navigate = useNavigate();
   const backButton = () => {
       navigate(-1)
   }

   const saleButton = () => {
       alert('aceptar')
   }
   return {
       backButton,
       saleButton
   }
}