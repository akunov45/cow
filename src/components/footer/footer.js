import React from 'react';
import gitLogo from '../../images/cow-swap/github-logo.png';
import ethterscen from '../../images/svg/etherscan-logo.svg';
import './footer.css';

import feedback from '../../images/svg/feedback.svg';
import FeedbackModal from "./modalFeedback/feedbackmodal";


let strong = [
    {
        txtbold: 'Web',
        txt: ': v1.9.0',
        ether: '',
        github: gitLogo,
    },
    {
        txtbold: 'Vault Relayer',
        txt: ': v1.1.2',
        ether: ethterscen,
        github: gitLogo,
    },
    {
        txtbold: 'Settlement contract',
        txt: ': v1.1.2',
        ether: ethterscen,
        github: gitLogo,
    },
];

const Footer = () => {
    const style = {
        display: 'flex',
    };
    const showModal = () => {
        let minimodal = document.querySelector('.minimodal')
        minimodal.classList.add('show')
    }
    const hightModal = () => {
        let minimodal = document.querySelector('.minimodal')
        minimodal.classList.remove('show')
    }

    const openModal = () => {
        let modalImportant = document.querySelector('.wrappfback')
        modalImportant.style.display = 'block'
    }

    return (
        <div>
            <div className='footer-container'>
                <div className='left-contents'>
                    <div className='footer-content'>
                        {strong.map((item, key) => {
                            return (
                                <>
                                    <div style={style}>
                                        <h4 key={key}>{item.txtbold}</h4>
                                        <p key={key}> {item.txt}</p>
                                        <a href='https://etherscan.io/address/0xC92E8bdf79f0507f65a392b0ab4667716BFE0110'>
                                            <img
                                                key={key}
                                                src={
                                                    item.ether === undefined
                                                        ? 'http://dummyimage.com/100x100/f00'
                                                        : item.ether
                                                }
                                                alt=''
                                            />
                                        </a>
                                        <a href='https://github.com/gnosis/cowswap'>
                                            <img
                                                key={key}
                                                src={item.github}
                                                alt=''
                                            />
                                        </a>
                                    </div>
                                </>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className='right-contents'>
                <div className='minimodal'><span>Give <br/> Feedback!</span></div>
                <button onMouseOut={() => {
                    hightModal()
                }} onMouseOver={() => {
                    showModal()
                }} id='feetback' onClick={()=> {
                    openModal()
                }}>
                    <img src={feedback} alt=''/>
                </button>
                <div className='id-content'>
                    <p>14050741</p>
                    <div>

                    </div>
                </div>
                <FeedbackModal />
            </div>
        </div>
    );
};

export default Footer;
