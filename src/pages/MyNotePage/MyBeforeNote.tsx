import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ImgLeft from '../../asset/img/CheckNotePage/img-left-icon.svg';
import ImgBackground2 from '../../asset/img/CheckNotePage/img-background2.svg';
import ImgNote from '../../asset/img/CheckNotePage/img-note.svg';

import MyNoteModal from './MyNoteModal';

import { useNavigate } from "react-router-dom";

const CheckNoteTitle = () => {
    const navigate = useNavigate();
    const [message, setMessage] = useState<any>();
    
    const [modalVisible, setModalVisible] = useState<boolean>(false);


    const onClickButton = () => {
        navigate("/mynote");
    }
    
    const _getBeforePost = async() => {
        await axios.get("http://52.79.242.117:3000/messages")
        .then(response => {
          console.log(response.data);
          setMessage(response.data);
        });
    
    };
    
    useEffect(()=> {  
        _getBeforePost();

    },[]);



    return (
        <Container>
            <div style={{width:'1920px', height:'1080px', overflow:'hidden', backgroundColor:'#84D5D0', position:'relative'}}>
                <img style={{position:'absolute', zIndex:2}} src={ImgBackground2}></img>
                <img onClick={()=>onClickButton()} style={{position:'absolute', zIndex:3, marginLeft:'30px', marginTop:'30px'}} src={ImgLeft}></img>
                <div style={{position:'absolute', zIndex:4, marginLeft:'30px',left:'630px',overflow:'scroll', height:'800px', top:'120px', display:'grid', gridTemplateColumns:'1fr 1fr'}}>
                    {message && message.map((item:any, index:number) => {
                        return (
                        <>
                            <img src={ImgNote} style={{marginBottom:'50px'}} onClick={()=>setModalVisible(true)}></img>
                            {modalVisible && <MyNoteModal setVisible={setModalVisible} modalContent={item.content}  modalTitle={item.keyword}/>}
                        </>
                        );
                    })}
                </div>
            </div>
        </Container>
    )


}

export default CheckNoteTitle;

const Container = styled.div`
    width:100vw;
    overflow: hidden;
`;