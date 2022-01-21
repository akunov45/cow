import React from 'react';
import './select-modal-window.css'

const SelectModalWindow = ({active, setActive}) => {
    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className={active ? 'modal__content' : 'modal__content'} onClick={e => e.stopPropagation()}>
                <div className="header">
                    <h1>Select a token</h1>
                    <img src="" alt=""/>
                </div>
                <div className="select-input">
                    <input type="text" placeholder="Search name or paste address"/>
                </div>
                <div className="common-tokens">
                    <h1>Common tokens</h1>
                    <button>DAI</button>
                    <button>USDC</button>
                    <button>USDT</button>
                    <button>WBTC</button>
                    <button>WETH</button>
                </div>
                <div className="all-wallet">

                </div>
                <div className="link">
                    <a href="">

                        Manage Token Lists
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SelectModalWindow;