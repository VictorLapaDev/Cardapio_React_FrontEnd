import { useState } from "react"
import "./modal.css"
import axios from "axios";


export function Modal(){

    const [titulo, setTitulo] = useState("");
    const [preco, setPreco] = useState(0);
    const [imagem, setImagem] = useState("");

    const api = axios.create({
        baseURL: 'http://localhost:8080/'
    });
    


    function submit(){
        if(imagem === "" || preco === 0 || titulo === ""){
            return alert("Nenhuma informação pode ficar em branco!")
        } else{
            return useApi();
        }
    }

    async function useApi(){
        const response = await api.post('produto', {
            
            titulo: titulo,
            preco: preco,
            image: imagem
        })
        .then((json) => {
            console.log("Adicionado com sucesso")
            console.log(json.status);
            
        })
        .catch((err) =>{
            console.log("Algo deu errado!")
            console.log(err.response.status);
        })
    }

    return(
        <div className="modal-style">
            <h2>Cadastre um novo produto</h2>
            <form className="form-style">
                <label>Titulo:</label>
                <input onChange={event => setTitulo(event.target.value)} value={titulo}></input>

                <label>Preço:</label>
                <input  type="number" onChange={event => setPreco(event.target.valueAsNumber)} value={preco}></input>

                <label>Imagem:</label>
                <input onChange={event => setImagem(event.target.value)} value={imagem}></input>
            </form>

            <button onClick={submit} className="btn-secondary">Confirmar</button>

        </div>
    )

}