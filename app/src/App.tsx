import React, { useEffect, useMemo, useRef } from 'react';
import { AgencySelect } from './components/AgencySelect/';
import type { Agency } from './Business/Model';
import { useLocalStorage } from './hooks'

function App() {
  const fakeAgencies = useMemo(() => [
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
  ], [])
  const [agency, setAgency] = useLocalStorage('agency', fakeAgencies[1])
  const onSelect = (agency: any) => setAgency(agency);

  return (
    <div className="App">
      <AgencySelect agencies={fakeAgencies} selectedAgency={agency} onSelect={onSelect} />
    </div>
  );
}

export default App;
