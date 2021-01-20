import React from 'react'
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../app';

describe ('Form', () => {
  test ('can add an item to the list', async () => {
    render(<App />);
    userEvent.type(screen.getByTestId('todoItem'), 'Eat pizza');
    // userEvent.type(screen.getByTestId('difficulty'), 'Eat pizza');
    userEvent.type(screen.getByTestId('assignee'), 'Sasha');

    userEvent.click(screen.getByTestId('submit'));
    let item = await screen.getByTestId('todoItem');
    console.log('ITEM:', item);
    expect(item[item.length-1]).toHaveTextContent('Eat pizza')
  });
});