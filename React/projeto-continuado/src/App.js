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


const renderCostumers = (costumer, index) => {
  return (
    <div key={`costumer-${costumer.id}`}>
      <li>{costumer.name}</li>
      {costumer.skills.map(renderCostumerSkills)}
    </div>
  )
}

const renderCostumerSkills = (skill, index) => {
  return (
    <div key={index} style={{paddingLeft: '30px'}}>
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
