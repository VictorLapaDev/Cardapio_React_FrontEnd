import axios from "axios";
import "./card.css"

interface CardProps{
    id: number,
    preco: number,
    titulo: string,
    image: string
}

export function Card({preco, titulo, image, id}: CardProps){

    const api = axios.create({
        baseURL: 'http://localhost:8080/'
    });

    async function removeCard(){
        console.log(id);
        
         const response = await api.delete(`produto/${id}`,{

         })
         .then((json) => {

         }) 
         .catch((err) => {
            
         })  
    }

    return(
        <div className="card">
            <img src={image}/>
            <h2>{titulo}</h2>
            <p><b>Valor: </b>{preco},00R$</p>
            <button className="btn" onClick={removeCard}>Excluir</button>
        </div>
    )
}