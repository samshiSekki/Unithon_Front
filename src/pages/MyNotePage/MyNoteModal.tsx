import Modal from 'components/Modal';
import ModalContainer from 'components/ModalContainer';
import React from 'react';
import styled from 'styled-components';


interface modalProps {
	setVisible: (visible: boolean) => void
    modalContent: any
    modalTitle?: any
}

const MyNoteModal = ({setVisible, modalContent, modalTitle}: modalProps) => {

	return (
		<>
			<Modal visible={true} setVisible={setVisible}>
				<ModalContainer setVisible={setVisible} useHeader={true} removePadding={false}>
					<DescriptionDiv>
                        <P style={{fontSize:'48px'}}>{modalTitle}</P>
                        <P>{modalContent}</P>
					</DescriptionDiv>
				</ModalContainer>
			</Modal>
		</>
	);

};

const DescriptionDiv = styled.div`
    white-space: pre;
    line-height: 1.5;
    font-family: 'Nanum Brush Script', cursive;
    font-size: 32px;
    width:300px;
    word-wrap: break-word;
    word-break:break-all;
    white-space: pre-line;
`;

const P = styled.p`
    line-height: 1.5;
    font-family: 'Nanum Brush Script', cursive;
    font-size: 32px;
    width:300px;
    word-wrap: break-word;
    word-break:break-all;
    white-space: pre-line;
`;


export default MyNoteModal;