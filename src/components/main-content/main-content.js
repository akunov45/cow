import React from 'react';
import arrowDown from '../../images/svg/arrow-down-blue.svg';
import './main-content.css';

const MainContent = ({ setActive }) => {
    const setActive2 = () => {
        setActive(true);
    };
    return (
        <div className='container'>
            <div className='content'>
                <div className='main_content'>
                    <div className='header'>
                        <h4>Swap</h4>
                        <div className='setting'>
                            <b>Settings</b>
                            <img src='' alt='' />
                        </div>
                    </div>
                    <div className='crypto'>
                        <select onClick={() => setActive2()}>
                            <option value=''>WETH</option>
                        </select>
                        <input type='text' placeholder='0.0' />
                    </div>
                    <div className='down'>
                        <b>
                            <img src={arrowDown} alt='' />
                        </b>
                    </div>
                    <div className='select'>
                        <select onClick={() => setActive2()}>
                            <option value=''>Select a token</option>
                            <img src='' alt='' />
                        </select>
                        <input type='text' placeholder='0.0' />
                    </div>
                    <div className='connect'>
                        <button>Connect Wallet</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainContent;
