import './App.css';
import Header from './components/header';
import MainContent from './components/main-content/main-content';
import { useState } from 'react';
import SelectModalWindow from './components/select-modal-window/select-modal-window';
import ConnectModal from './components/connect-modal/connectModal';

function App() {
    const [modalActive, setModalActive] = useState(false);
    const [modalActive2, setModalActive2] = useState(false);

    return (
        <div className='wrapper'>
            <div className='container'>
                <Header setActive2={setModalActive2} />
                <MainContent
                    setActive={setModalActive}
                    setActive2={setModalActive2}
                />
                <SelectModalWindow
                    active={modalActive}
                    setActive={setModalActive}
                />
                <ConnectModal
                    active2={modalActive2}
                    setActive2={setModalActive2}
                />
            </div>
        </div>
    );
}

export default App;
