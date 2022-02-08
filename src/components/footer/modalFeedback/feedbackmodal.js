import React from 'react';
import cowlogo from '../../../images/cow-swap/cow-head.png';
import smilelogo from '../../../images/svg/logo.svg';
import close from '../../../images/svg/close-svg.svg';

import './feedbackmodal.css';

let modalicon = [
	{
		smile: smilelogo,
		fbText: 'I like something',
	},
	{
		smile: smilelogo,
		fbText: "I don't like something",
	},
	{
		smile: smilelogo,
		fbText: 'I have an idea',
	},
];

const FeedbackModal = () => {
	const style = {};

	const showModalClose = () => {
		let minimodalclose = document.querySelector('.close');
		minimodalclose.classList.add('closeMod');
	};
	const hightModalClose = () => {
		let minimodalclose = document.querySelector('.close');
		minimodalclose.classList.remove('closeMod');
	};

	const closeModal = () => {
		let modalImportant = document.querySelector('.wrappfback');
		modalImportant.style.display = 'none';
	};

	return (
		<>
			<div
				className='wrappfback'
				onMouseOver={() => {
					showModalClose();
				}}
				onMouseOut={() => {
					hightModalClose();
				}}>
				<div
					className='close'
					onClick={() => {
						closeModal();
					}}>
					<img src={close} alt='#!' />
				</div>

				<div className='global-div'>
					<div className='first-content'>
						<div className='imgmodal'>
							<img src={cowlogo} alt='#!' />
						</div>
						<div className='txtmodal'>
							<h3>Help us improve Cow Swap</h3>
							<p>
								Need Help? <a href='#!'>Contact us.</a>
							</p>
						</div>
					</div>

					<div className='second-content'>
						<h3>WHAT KIND OF FEEDBACK DO YOU HAVE?</h3>
						<div className='fbmodaltxt'>
							{modalicon.map((item, key) => {
								return (
									<div style={style}>
										<img key={key} src={item.smile} alt='#' />
										<p key={key}>{item.fbText}</p>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default FeedbackModal;
