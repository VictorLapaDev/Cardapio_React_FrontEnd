import { useState } from "react"
import { useFoodDataMutate } from "../../hooks/useFoodDataMutate";
import { FoodData } from "../../interface/FoodData";

interface InputProps{
    label: string,
    value: string | number,
    updateValue(value: any): void
}

const Input = ( {label, value, updateValue}: InputProps) => {
    return(
        <>
            <label>{label}</label>
            <input value={value} onChange={e => updateValue(e.target.value)}></input>
        </>
    )
}


export function CreateModal(){

    const [titulo, setTitulo] = useState("");
    const [preco, setPreco] = useState(0);
    const [image, setImage] = useState("");
    const { mutate } = useFoodDataMutate();

    const submit = () => {
        const foodData: FoodData = {
            titulo,
            preco,
            image
        }

        mutate(foodData)
    }


    return(
        <div className="moda-overlay">
            <div className="modal-body">
                <h2>Cadastre um novo iten no cadastro</h2>
                <form className="input-container">
                    <Input label="titulo" value={titulo} updateValue={setTitulo}/>
                    <Input label="preço" value={preco} updateValue={setPreco}/>
                    <Input label="imagem" value={image} updateValue={setImage}/>
                </form>
                <button onClick={submit} className="btn-secondary-"></button>
            </div>
        </div>
    )
}