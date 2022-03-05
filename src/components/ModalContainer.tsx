import React from 'react';
import styled from 'styled-components';
import ImgPaper from '../asset/img/CheckNotePage/img-paper1.svg';

interface ModalContainerProps {
	setVisible?: (visible: boolean) => void,
	children?: React.ReactNode
	useHeader?: boolean
	footer?: React.ReactNode
	title?: string
	removePadding?: boolean
	width?: number
}

const ModalContainer = ({children, setVisible, useHeader, footer, title, width = 995}: ModalContainerProps) => {
	return (
		<>
			<Container onClick={(event) => event.stopPropagation()} width={width}>
				<Section>
					<Article>
                        <img style={{position:'relative'}} src={ImgPaper}></img>
						<p style={{position:'absolute',top:'500px', left:'500px', fontSize:'24px'}}>{children}</p>
					</Article>
				</Section>
			</Container>
		</>
	);
};

export default ModalContainer;

const Container = styled.div<{width: number}>`
	position: relative;
	width: ${props => props.width}px;
	overflow: hidden;
	
	/* max-height: calc(100vh - 80px); */
	
	&::-webkit-scrollbar-track {
    	margin-bottom: 16px;
		margin-top: 16px;
	}
		&::-webkit-scrollbar {
		width: 6px;
		overflow: hidden;
	}
`;

const Section = styled.section`
	display: flex;
`;
const Article = styled.article<{removePadding?: boolean}>`
	display: flex;
	flex-direction: column;
	overflow-y: auto;
	overflow-x: hidden;
    position: relative;
	
	max-height: calc(100% - 88px);
	&::-webkit-scrollbar{
		width: 4px;
	}  
	&::-webkit-scrollbar-thumb{
		height: 20%;
		
		background-color: #DDDDDD;
		border-radius: 2px;
		
		&:hover {
			background-color: #A7A7A7;
		}
	} 
	&::-webkit-scrollbar-track{
		margin: 24px 0px 56px;
	}
	padding: ${props => props.removePadding ? '0px' : '56px 78.5px'};
`;