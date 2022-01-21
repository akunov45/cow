import React from 'react';
import arrowDown from '../../images/svg/arrow-down-grey.svg';
import setting from '../../images/svg/setting.svg';
import './main-content.css';

const MainContent = ({ setActive, setActive2 }) => {
    const SelectModal = () => {
        setActive(true);
    };
    const ConnectModal = () => {
        setActive2(true);
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
                    <select onClick={() => SelectModal()}>
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
                    <select onClick={() => SelectModal()}>
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
                    <button onClick={ConnectModal}>Connect Wallet</button>
                </div>
            </div>
        </div>
    );
};

export default MainContent;
