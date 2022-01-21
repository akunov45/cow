import React from 'react';
import meta from '../../images/cow-swap/metamask.png';
import WallCon from '../../images/svg/walletConnectIcon.svg';
import exit from '../../images/svg/x.svg';
import './connectModal.css';

const ConnectModal = ({ active2, setActive2 }) => {
    const exitModal = () => {
        setActive2(false);
    };

    return (
        <div>
            <div
                className={active2 ? 'Modal active' : 'Modal'}
                onClick={() => setActive2(false)}>
                <div
                    className={
                        active2
                            ? 'ConnectModal__content'
                            : 'ConnectModal__content'
                    }
                    onClick={(e) => e.stopPropagation()}>
                    <div className='header'>
                        <a className='wall' href='#!'>
                            Connect a wallet
                        </a>
                        <img
                            style={{
                                cursor: 'pointer',
                                padding: '10px',
                            }}
                            onClick={() => exitModal()}
                            width='60px'
                            height='60px'
                            src={exit}
                            alt=''
                        />
                    </div>
                    <div className='description'>
                        <p>
                            By connecting a wallet, you agree to GnosisDAO's
                            <a href='#!'>Terms & Conditions</a> and acknowledge
                            that you have read, understood, and agree to them.
                        </p>
                    </div>
                    <div className='metamask'>
                        <button>
                            <b>Install Metamask</b>
                            <img width='60px' height='60px' src={meta} alt='' />
                        </button>
                        <div className='wall-connect'>
                            <button>
                                Wallet Connect
                                <img
                                    width='60px'
                                    height='60px'
                                    src={WallCon}
                                    alt=''
                                />
                            </button>
                        </div>
                        <div className='footer'>
                            <h5>New to decentralised applications?</h5>
                            <a href='#!'>Learn more about wallets</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConnectModal;
