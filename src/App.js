import './App.css';
import Header from './components/header';
import MainContent from './components/main-content/main-content';
import { useState } from 'react';
import SelectModalWindow from './components/select-modal-window/select-modal-window';

function App() {
    const [modalActive, setModalActive] = useState(false);

    return (
        <div className='wrapper'>
            <div className='container'>
                <Header />
                <MainContent setActive={setModalActive} />
                <SelectModalWindow
                    active={modalActive}
                    setActive={setModalActive}
                />
            </div>
        </div>
    );
}

export default App;
