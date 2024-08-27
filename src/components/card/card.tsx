import "./card.css"

interface CardProps{
    preco: number,
    titulo: string,
    image: string
}

export function Card({preco, titulo, image}: CardProps){
    return(
        <div className="card">
            <img src={image}/>
            <h2>{titulo}</h2>
            <p><b>Valor: </b>{preco}</p>
            
        </div>
    )
}