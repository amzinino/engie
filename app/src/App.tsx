import React from 'react';
import { AgencySelect } from './components/AgencySelect/';

function App() {
  const fakeAgencies = [
    {
      id: '1',
      name: 'agency1'
    },
    {
      id: '2',
      name: 'agency2'
    },
    {
      id: '3',
      name: 'agency3'
    },
  ]

  const onSelect = (value: any) => value && console.log(value)

  return (
    <div className="App">
      <AgencySelect agencies={fakeAgencies} onSelect={onSelect} />
    </div>
  );
}

export default App;
