import React from 'react';
import './modal.css';

import ethereum from '../../../images/cow-swap/ethereum-logo.png';
import gnosis from '../../../images/cow-swap/gno.png';
import rinkeby from '../../../images/svg/network-rinkeby-logo.svg';

const ModalHeader = ({ setActive2 }) => {
    const closeMe = () => {
        let closeModal = document.querySelector('.m-show');
        closeModal.style.display = 'none';
        setActive2(true);
    };
    return (
        <>
            <div className='modal-header'>
                <div className='modal-h-content' onClick={() => closeMe()}>
                    <img width='20px' height='16px' src={ethereum} alt='' />
                    <p>Ethereum</p>
                    <div className='dot'></div>
                </div>
                <div className='modal-h-content' onClick={() => closeMe()}>
                    <img width='20px' height='16px' src={rinkeby} alt='' />
                    <p>Ethereum</p>
                    <div className='dot'></div>
                </div>
                <div className='modal-h-content' onClick={() => closeMe()}>
                    <img width='20px' height='16px' src={gnosis} alt='' />
                    <p>Ethereum</p>
                    <div className='dot'></div>
                </div>
            </div>
        </>
    );
};

export default ModalHeader;
