import React from 'react';
import './main-content.css';
import arrowDown from '../../images/svg/arrow-down-grey.svg';
import setting from '../../images/svg/setting.svg';

const MainContent = ({ setActive }) => {
    const setActive2 = () => {
        setActive(true);
    };
    const setActive3 = () => {
        setActive(true);
    };
    return (
        <div className='content'>
            <div className='main_content'>
                <div className='header'>
                    <h4>Swap</h4>
                    <div className='setting'>
                        <b>Settings</b>
                        <img width='20px' height='20px' src={setting} alt='' />
                    </div>
                </div>
                <div className='crypto'>
                    <select onClick={() => setActive2()}>
                        <img src='' alt='' />
                        <option value=''>WETH</option>
                    </select>
                    <input type='text' placeholder='0.0' />
                </div>
                <div className='down'>
                    <b>
                        <img
                            width='30px'
                            height='20px'
                            src={arrowDown}
                            alt=''
                        />
                    </b>
                </div>
                <div className='select'>
                    <select onClick={() => setActive2()}>
                        <option value=''>Select a token</option>
                        <img src='' alt='' />
                    </select>
                    <input
                        className='second-input'
                        type='text'
                        placeholder='0.0'
                    />
                </div>
                <div className='connect'>
                    <button onClick={setActive3}>Connect Wallet</button>
                </div>
            </div>
        </div>
    );
};

export default MainContent;
