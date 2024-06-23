import React from 'react';

function App() {
    const value = 'World';
    return (
        <div>Hello {value}
        <MyButton/>
        </div>
    );
}

function MyButton() {
    return (
        <button>I'm a button</button>
    );
}

export default App;
