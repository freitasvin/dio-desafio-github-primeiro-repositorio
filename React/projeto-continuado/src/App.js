import React from 'react';
import Button from './components/Button'

const costumerList = [
  {
    id: 1,
    name: 'Vinícius',
    skills: ['React', 'HMTL', 'CSS', 'Typescript'],
  },
  {
    id: 2,
    name: 'Leonardo',
    skills: ['Node', 'Jest','Typescript'],
  },
  {
    id: 3,
    name: 'Danilo',
    skills: ['UX-UI', 'Desing', 'Photoshop',],
  },
  {
    id: 4,
    name: 'Lucas',
    skills: ['Java'],
  },
];

const handlerClick = (id) => {
  alert(`Id do cliente: ${id} `)
}


const renderCostumers = (costumer) => {
  return (
    <div key={`costumer-${costumer.id}`}>
      <li>{costumer.name} <Button onClick={() => handlerClick(costumer.id)}>Deletar cliente</Button></li>
      {costumer.skills.map(renderCostumerSkills)}
    </div>
  )
}


// style inline utilizado somente para melhor visualização
const renderCostumerSkills = (skill, index) => {
  return (
    <div key={`skill-${index}`} style={{paddingLeft: '30px'}}> 
      <li>{skill}</li>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      Costumer List

      <ul>
        {costumerList.map(renderCostumers)}
      </ul>
    </div>
  );
}

export default App;
