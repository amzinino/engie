import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { AgencySelect } from './AgencySelect';

describe('<AgencySelect>', () => {

    const fakeAgencies = [
        {
            id: '1',
            name: 'test1'
        },
        {
            id: '2',
            name: 'test2'
        },
    ]
    const fakeSelect = jest.fn();

    test('renders with default option', () => {
        render(<AgencySelect agencies={fakeAgencies} onSelect={fakeSelect} />);
        const selectElement = screen.getByDisplayValue(/test/i);
        expect(selectElement).toBeInTheDocument();
    });

    test('display selected option', () => {
        render(<AgencySelect agencies={fakeAgencies} onSelect={fakeSelect} />);
        fireEvent.change(screen.getByDisplayValue(/test/i), {
            target: { value: '2'}
        })
        const selectedAgencytext = screen.getByTestId('agency-selected');
        expect(selectedAgencytext).toBeInTheDocument();
    });

})