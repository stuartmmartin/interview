import React, {useState} from 'react';


const App = () => {
    const [bananaCount, setBananaCount] = useState(0);
    const [appleCount, setAppleCount] = useState(0);

    return (
        <div>
            <p>Give 🐒 some 🍌!</p>
            <p>🍌 : {bananaCount} </p>
            <p>🍎 : {appleCount} </p>
            <button onClick={() => setBananaCount(bananaCount + 1)}> + 🍌</button>
            <button onClick={() => setAppleCount(appleCount + 1)}> + 🍎</button>
        </div>
    );
}

export default App;