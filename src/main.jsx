import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
    return (
        <div>
            <h1>Welcome to the Online Ordering Application!</h1>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);