import React from 'react';
import etherLogo from '../../images/cow-swap/ethereum-logo.png';
import arrowDown from '../../images/svg/arrow-down-icon.svg';
import cowLogoDark from '../../images/svg/cow-logo-dark.svg';
import cowLogoNight from '../../images/svg/cow-logo.svg';
import menuMore from '../../images/svg/menu.svg';
import sun from '../../images/svg/sun.svg';
import moonIcon from '../../images/svg/moon.svg';
import twitter from '../../images/svg/twitter.svg';
import Footer from '../footer/footer';
import './index.css';
import ModalHeader from './headermodal';

const Header = ({ setActive2 }) => {
    const changeBodyBg = () => {
        let wrap = document.getElementsByClassName('wrapper')[0];
        let logo = document.getElementsByClassName('logo')[0];
        let swap = document.getElementsByClassName('swap')[0];
        let profile = document.getElementsByClassName('profile')[0];
        let moon = document.getElementsByClassName('twitter-hower')[0];
        if (wrap.className === 'wrapper bg2') {
            logo.src = cowLogoDark;
            swap.style.color = '#000';
            profile.style.color = '#000';
            moon.src = sun;
        } else {
            moon.src = moonIcon;
            logo.src = cowLogoNight;
            swap.style.color = '#fff';
            profile.style.color = '#fff';
        }
        wrap.classList.toggle('bg2');
    };
    const showConnectModal = () => {
        setActive2(true);
    };

    const showModal = () => {
        let miniModal = document.querySelector('.m-show');
        miniModal.style.display = 'block';
    };

    return (
        <>
            <div className='header'>
                <div className='nav'>
                    <ul>
                        <li>
                            <a href='#!'>
                                <img
                                    className='logo'
                                    width='190px'
                                    height='48px'
                                    src={cowLogoDark}
                                    alt=''
                                />
                            </a>
                        </li>
                        <li>
                            <a href='#!'>
                                <b className='swap'>Swap</b>
                            </a>
                        </li>
                        <li>
                            <a href='#!' className='profile'>
                                <b>Profile</b>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='header-btn-group'>
                    <div className='btn-bitcoin' onClick={() => showModal()}>
                        <div>
                            <div className='ether'>
                                <img
                                    width='20px'
                                    height='16px'
                                    src={etherLogo}
                                    alt=''
                                />
                                <p>Ethereum</p>
                                <img
                                    width='24px'
                                    height='12px'
                                    src={arrowDown}
                                    alt=''
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div className='connect-btn-wrap'>
                                <p
                                    onClick={() => showConnectModal()}
                                    className='connect-btn'>
                                    Connect to a wallet
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='btns-end'>
                        <button className='twitter-btn'>
                            <a href='https://twitter.com/mevprotection'>
                                <img
                                    width='22px'
                                    height='22px'
                                    src={twitter}
                                    alt=''
                                />
                            </a>
                        </button>
                        <button onClick={() => changeBodyBg()}>
                            <a href='#!'>
                                <img
                                    className='twitter-hower'
                                    width='22px'
                                    height='22px'
                                    src={sun}
                                    alt=''
                                />
                            </a>
                        </button>
                    </div>
                    <div>
                        <button className='more'>
                            <a href='#!'>
                                <img
                                    width='22px'
                                    height='22px'
                                    src={menuMore}
                                    alt=''
                                />
                            </a>
                        </button>
                    </div>
                </div>
            </div>
            <div className='m-show'>
                <ModalHeader setActive2={setActive2} />
            </div>
            <div className='wrap-footer'>
                <Footer />
            </div>
        </>
    );
};

export default Header;
