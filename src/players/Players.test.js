import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each'; // auto clean up after each test
import 'jest-dom/extend-expect';

import Players from './Players';
import { italic } from 'ansi-colors';

it('should render', () => {
    render(<Players />);
});

it('should display default message with no players', () => {
    const { queryByText } = render(<Players />);

    const defaultMessage = queryByText(/no players/i);

    expect(defaultMessage).toBeInTheDocument();
});

it('should display players', () => {
    const players = [
        { id: 1, name: 'Max'},
        { id: 2, name: 'Greg'},
        { id: 3, name: 'Bobby-Joe'},
    ];

    // array of names fom our players object
    const playerNames = players.map(p => p.name);

    // render Players Component and grab elements inside it by getByText and getAllByTestId selectors
    const { getByText, getAllByTestId } = render(<Players players={players} />);

    // if header existed
    getByText(/player list/i);

    // grab all players' divs by `data-testid="player-name"`
    const playerDivs = getAllByTestId('player-name');

    // if all players' div are rendered
    expect(playerDivs.length).toBe(players.length);

    // grab all names inside divs that are rendered
    const divTexts = playerDivs.map(d => d.textContent);

    // compare them with array of names from the object we passed
    expect(playerNames).toEqual(divTexts);
});