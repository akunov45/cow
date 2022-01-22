import React, { useState } from 'react';
import arrowDown from '../../images/svg/arrow-down-grey.svg';
import setting from '../../images/svg/setting.svg';
import SelectModalWindow from '../select-modal-window/select-modal-window';
import './main-content.css';

const MainContent = ({ setActive, setActive2 }) => {
    const [modalActive, setModalActive] = useState(false);

    const [coin1, setCoin1] = useState(0);

    const SelectModal = () => {
        setModalActive(true);
    };
    const ConnectModal = () => {
        setActive2(true);
    };
    const conwertWallet = (e) => {
        let span = document.querySelector('.inp-span span');
        if (e.target.value === '') {
            span.style.display = 'none';
        } else {
            span.style.display = 'block';
        }
        span.style.display = 'block';
        setCoin1(e.target.value);
    };
    const conwertWallet2 = (e) => {};

    return (
        <>
            {' '}
            <div className='content'>
                <div className='main_content'>
                    <div className='header'>
                        <h4>Swap</h4>
                        <div className='setting'>
                            <b>Settings</b>
                            <img
                                width='20px'
                                height='20px'
                                src={setting}
                                alt=''
                            />
                        </div>
                    </div>
                    <div className='crypto'>
                        <select onClick={() => SelectModal()}>
                            <img
                                width='20px'
                                height='20px'
                                src={setting}
                                alt=''
                            />

                            <option value=''>WETH</option>
                        </select>
                        <div className='inp-span'>
                            <input
                                onChange={(e) => conwertWallet(e)}
                                type='number'
                                placeholder='0.0'
                                inputMode='decimal'
                                autoComplete='off'
                                pattern='^[0-9]*[.,]?[0-9]*$'
                                minlength='1'
                                maxLength='79'
                            />
                            <span>≈${coin1 * 2520}</span>
                        </div>
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
                            onChange={(e) => conwertWallet2(e)}
                            className='second-input'
                            inputMode='decimal'
                            autoComplete='off'
                            pattern='^[0-9]*[.,]?[0-9]*$'
                            type='number'
                            placeholder='0.0'
                            minlength='1'
                            maxLength='79'
                        />
                    </div>
                    <span>Test</span>
                    <div className='connect'>
                        <button onClick={ConnectModal}>Connect Wallet</button>
                    </div>
                </div>
            </div>
            <SelectModalWindow
                active={modalActive}
                setActive={setModalActive}
            />
        </>
    );
};

export default MainContent;
