import React, { ReactNode, useEffect } from 'react';
import styled from 'styled-components';

const Background = styled.div`
	position: fixed;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	z-index: 9999;
	width: 100vw;
	height: 100vh;
	padding: 40px 0px;
	top: 0;
	left: 0;
	gap: 16px;
	background: rgba(0, 0, 0, 0.8);
`;
interface ModalProps{
	visible?: boolean,
	setVisible?: (visible: boolean) => void,
	children?: ReactNode
}

const Modal = ({children, visible, setVisible} : ModalProps) => {
	useEffect(() => {
		function handleTouchMove(event: any) {
			if (visible) { event.preventDefault(); }
		}
		function disableScroll() {
			document.body.style.overflow = 'hidden';
			const html = document.querySelector('html');
			if (html !== null)
				html.scrollTop = window.scrollY; // dimmed 되기 전 스크롤 위치 고정
		}
		window.addEventListener('touchmove', handleTouchMove, { passive: false });
		window.addEventListener('scroll', disableScroll);
		document.body.style.overflow = 'hidden';
		
		return () => {
			window.removeEventListener('touchmove', handleTouchMove);
			window.removeEventListener('scroll', disableScroll);
			document.body.style.overflow = 'visible';
		};
	}, [visible]);
	return (
		visible ?
			<Background 
				onClick={() => setVisible && setVisible(false)}
			>
				{children}
			</Background>
			:
			<>
			</>
	);
};

export default Modal;