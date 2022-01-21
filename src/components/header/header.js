import React from 'react';
import cowswapdark from '../../images/svg/cow-logo-dark.svg';
import feedback from '../../images/cow-swap/feedback.svg';
import twitter from '../../images/cow-swap/twitter.svg';
import menuMore from '../../images/svg/menu.svg';
import './index.css';

const Header = () => {
    return (
        <div className='header'>
            <div className='nav'>
                <ul>
                    <li>
                        <a href='#!'>
                            <img
                                width='190px'
                                height='48px'
                                src={cowswapdark}
                                alt=''
                            />
                        </a>
                    </li>
                    <li>
                        <a href='#!'>
                            <b>Swap</b>
                        </a>
                    </li>
                    <li>
                        <a href='#!'>
                            <b>Profile</b>
                        </a>
                    </li>
                </ul>
            </div>
            <div className='header-btn-group'>
                <div className='btn-bitcoin'>
                    <div>
                        <div>
                            <img src='' alt='' />
                            <p>Ethereum</p>
                            <img src='' alt='' />
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <div>
                            <button>
                                <p>Connect to wallet</p>
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <button>
                        <a href='#!'>
                            <img
                                width='28px'
                                height='28px'
                                src={twitter}
                                alt=''
                            />
                        </a>
                    </button>
                    <button></button>
                </div>
                <div>Test</div>
            </div>
        </div>
    );
};

export default Header;

/*
 <button></button>
                <select className='section-btn'>
                    <option className='option' value=''>
                        Ethereum
                    </option>
                    <option className='option' value=''>
                        Rinkeby
                    </option>
                    <option className='option' value=''>
                        Gnosis Chain
                    </option>
                </select>
                <button></button>

                <button>
                    <img width='38px' height='38px' src={twitter} alt='' />
                </button>
                <button>
                    <img width='38px' height='38px' src={twitter} alt='' />
                </button>

                <button>
                    <img width='38px' height='38px' src={menuMore} alt='' />
                </button>*/
