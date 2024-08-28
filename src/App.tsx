import { useState } from 'react';
import './App.css'
import { Card } from './components/card/card';
import { useFoodData } from './hooks/useFoodData';
import { Modal } from './components/modal/modal';

function App() {

  const { data } = useFoodData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen (prev => !prev)
  }

  return (
    
    <div className='container'>
        <h1>Cardápio</h1>
        <div className='card-grid'>
          {data?.map(foodData => 
            <Card 
              preco={foodData.preco} 
              titulo={foodData.titulo} 
              image={foodData.image}
            />
          )}
        </div>
        {isModalOpen && <Modal/>}
        <button onClick={handleOpenModal} >Novo</button>
    </div>
  )

}

export default App
