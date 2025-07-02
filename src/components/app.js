import { createRoot } from 'react-dom/client';
import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.authFunc = this.authFunc.bind(this);
    }
    authFunc(){
        const authData = {data:"Auth on my site"};
        if (KeeperWallet){
            KeeperWallet.auth( authData )
            .then(auth => {
                console.log( auth );
            }).catch(error => {
                console.error( error );
            })
        } else {
            alert("To Auth WavesKeeper should be installed.");
        }
    }
    render() {
        return (
            <div className="container">
                <input className="btn btn-primary" type="submit" value="Auth" onClick={this.authFunc} />
            </div>
        );
    }
}

const app = document.getElementById('app');
if (app) {
    const root = createRoot(app);
    root.render(<App />);
}