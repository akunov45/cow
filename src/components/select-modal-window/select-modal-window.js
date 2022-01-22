import React from 'react';
import paper from '../../images/svg/paper.svg';
import question from '../../images/svg/question.svg';
import exit from '../../images/svg/x.svg';
import tokens from '../../tokens/tokens';
import './select-modal-window.css';

const SelectModalWindow = ({ active, setActive }) => {

    
    const exitModal = () => {
        setActive(false);
    };

    return (
        <div
            className={active ? 'modal active' : 'modal'}
            onClick={() => setActive(false)}>
            <div
                className={active ? 'modal__content' : 'modal__content'}
                onClick={(e) => e.stopPropagation()}>
                <div className='header'>
                    <h1>Select a token</h1>
                    <img
                        style={{ cursor: 'pointer' }}
                        onClick={exitModal}
                        width='40px'
                        height='40px'
                        src={exit}
                        alt=''
                    />
                </div>
                <div className='select-input'>
                    <input
                        type='text'
                        placeholder='Search name or paste address'
                    />
                </div>
                <div className='common-tokens'>
                    <h1>
                        Common tokens
                        <img
                            className='question'
                            width='35px'
                            height='35px'
                            src={question}
                            alt=''
                        />
                    </h1>
                    <button>DAI</button>
                    <button>USDC</button>
                    <button>USDT</button>
                    <button>WBTC</button>
                    <button>WETH</button>
                </div>
                <div className='all-wallet'>
                    <div className='all-wallet-coin'>
                        <div>
                            {tokens.map((coin, key) => (
                                <>
                                    <div className='coin-data'>
                                        <img
                                            width='78px'
                                            height='78px'
                                            src={coin.img}
                                            alt=''
                                        />
                                        <h2 style={{ fontSize: '40px' }}>
                                            {coin.name}
                                        </h2>
                                        <h2 style={{ fontSize: '22px' }}>
                                            {coin.fullname}
                                        </h2>
                                    </div>
                                </>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='link'>
                    <a href='#!'>
                        <img width='40px' height='40px' src={paper} alt='' />
                        Manage Token Lists
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SelectModalWindow;
