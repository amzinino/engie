import { ComponentProps, ChangeEvent, useState} from 'react';

export type Agency = {
    id: string;
    name: string;
}
export type AgencySelectProps = {
    agencies: Agency[];
    onSelect: (value: string | null, event: ChangeEvent<HTMLSelectElement>) => void;
}

type Props = AgencySelectProps & ComponentProps<'select'>
export const AgencySelect = ({ agencies, onSelect } : Props) => {
    const [selectedAgency, setAgency] = useState<string | null>(null);

    return <div>
        <select onChange={(event: ChangeEvent<HTMLSelectElement>) => {
            setAgency(event?.target?.value);
            onSelect(event?.target?.value || null, event)}
        }>
            {agencies.map(({ id, name }) =><option key={`agency-${id}-${name}`} value={id}>{name}</option>)}
        </select>
        {
            selectedAgency && <p data-testid='agency-selected'>agency id {selectedAgency} selected</p>
        }
    </div>
}