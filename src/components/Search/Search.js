import React from 'react';
import Creatable from 'react-select/creatable';


const aquaticCreatures = [
  { label: 'Shark', value: 'Shark' },
  { label: 'Dolphin', value: 'Dolphin' },
  { label: 'Whale', value: 'Whale' },
  { label: 'Octopus', value: 'Octopus' },
  { label: 'Crab', value: 'Crab' },
  { label: 'Lobster', value: 'Lobster' },
];

function App() {
  return (
    <div className="App">
      <Creatable
  options={aquaticCreatures}
/>
    </div>
  );
}

export default App;