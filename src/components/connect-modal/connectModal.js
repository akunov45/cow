import React from 'react';
import meta from '../../images/cow-swap/metamask.png';
import exit from '../../images/svg/x.svg';
import './connectModal.css'

const ConnectModal = ({active, setActive}) => {
    const exitModal = () => {
        setActive(false)
    }
    return (
        <div>
            <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
                <div className={active ? 'modal__content' : 'modal__content'} onClick={e => e.stopPropagation()}>
                    <div className="header">
                        <a className='wall' href="">Connect a wallet</a>
                        <img
                            style={{cursor:"pointer"}}
                            onClick={exitModal}
                            width='40px'
                            height='40px'
                            src={exit}
                            alt=""
                        />
                    </div>
                    <div className="description">
                        <p>By connecting a wallet, you agree to GnosisDAO's
                            <a href="">
                            Terms &
                            Conditions
                        </a> and acknowledge that you have read, understood, and agree to them.</p>
                    </div>
                    <div className="metamask">
                        <button>
                            Install Metamask
                            <img
                                src={meta}
                                alt=""
                            />
                        </button>
                    </div>
                </div>
        </div>
        </div>
    );
};

export default ConnectModal;