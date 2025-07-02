import { createRoot } from 'react-dom/client';
import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="container">
                <input className="btn btn-primary" type="submit" value="Alert" onClick={() => { alert("Alert button onClick"); }} />
            </div>
        );
    }
}

const app = document.getElementById('app');
if (app) {
    const root = createRoot(app);
    root.render(<App />);
}