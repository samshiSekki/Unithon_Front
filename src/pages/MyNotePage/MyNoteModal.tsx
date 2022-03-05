import Modal from 'components/Modal';
import ModalContainer from 'components/ModalContainer';
import React from 'react';
import styled from 'styled-components';


interface modalProps {
	setVisible: (visible: boolean) => void
    modalContent: any
}

const MyNoteModal = ({setVisible, modalContent}: modalProps) => {

	return (
		<>
			<Modal visible={true} setVisible={setVisible}>
				<ModalContainer setVisible={setVisible} useHeader={true} removePadding={false}>
					<DescriptionDiv>
                        {modalContent}
					</DescriptionDiv>
				</ModalContainer>
			</Modal>
		</>
	);

};

const DescriptionDiv = styled.div`
    white-space: pre;
    line-height: 1.5;    
`;


export default MyNoteModal;