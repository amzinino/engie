import { ComponentProps, ChangeEvent, useState} from 'react';

import { Agency } from '../../Business/Model';

type AgencySelectProps = {
    agencies: Agency[];
    onSelect?: (value: Agency, event: ChangeEvent<HTMLSelectElement>) => void;
    selectedAgency?: Agency;
}
type Props = AgencySelectProps & ComponentProps<'select'>

export const AgencySelect = ({ agencies, onSelect, selectedAgency } : Props) => {
    const [agency, setAgency] = useState<Agency | undefined>(selectedAgency);

    return <div>
        <select defaultValue={selectedAgency?.id} onChange={(event: ChangeEvent<HTMLSelectElement>) => {
            if (event?.target?.value){
                const agencyId = event.target.value
                const newSelectedAgency = agencies.filter(agency => agency.id === agencyId)[0]
                setAgency(newSelectedAgency);
                onSelect && onSelect(newSelectedAgency, event)}
            }
        }>
            {agencies.map(({ id, name }) =><option key={`agency-${id}-${name}`} value={id}>{name}</option>)}
        </select>
        {
            agency && <p data-testid='agency-selected'>agency id {agency.id} selected</p>
        }
    </div>
}