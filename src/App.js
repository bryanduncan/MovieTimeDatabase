import React from 'react';
import mockup from './MTdb.jpg'

function App() {
    const value = 'World';
    return (
        <img src={mockup} alt="MOCKUP" />
    );
}

function MyButton() {
    return (
        <button>I'm a button</button>
    );
}

export default App;
