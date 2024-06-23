import React from 'react';
import { ReactComponent as Logo } from './logo.svg';

function App() {
    const value = 'World';
    return (
        <div>
            <Logo />
        </div>
    );
}

function MyButton() {
    return (
        <button>I'm a button</button>
    );
}

export default App;
