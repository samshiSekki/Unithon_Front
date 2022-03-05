import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ImgMyNote from '../../asset/img/CheckNotePage/img-mynote.svg';
import ImgLeft from '../../asset/img/CheckNotePage/img-left-icon.svg';
import ImgPaperMass from '../../asset/img/CheckNotePage/img-paper-mass.svg';
import ImgNote from '../../asset/img/CheckNotePage/img-note.svg';
import MyNoteModal from './MyNoteModal';

import { useNavigate } from "react-router-dom";

const CheckNoteTitle = () => {
    const navigate = useNavigate();
    const [message, setMessage] = useState<any>();
    const [modalVisible, setModalVisible] = useState<boolean>(false);


    const onClickButton = () => {
        navigate("/main");
    }

    const onClickMass = () => {
        navigate("/mybeforenote");
    }

    const _getTodayPost = async() => {
        await axios.get("http://52.79.242.117:3000/messages/today")
        .then(response => {
          console.log(response.data);
          setMessage(response.data);
        });
    
    };

    useEffect(()=> {  
        _getTodayPost();   

    },[]);



    return (
        <Container>
            {modalVisible && <MyNoteModal setVisible={setModalVisible} modalContent={message}/>}
            <div style={{width:'1920px', height:'1080px', overflow:'hidden', backgroundColor:'#84D5D0', position:'relative'}}>
                <img style={{position:'absolute', zIndex:2}} src={ImgMyNote}></img>
                <img onClick={()=>onClickButton()} style={{position:'absolute', zIndex:3, marginLeft:'30px', marginTop:'30px'}} src={ImgLeft}></img>
                <img onClick={()=>onClickMass()} style={{position:'absolute', zIndex:2, left:'576px', top:'391.17px'}} src={ImgPaperMass}></img>
                <img onClick={()=>setModalVisible(true)} style={{position:'absolute', zIndex:2, left:'745px', top:'107px'}} src={ImgNote}></img>
            </div>
        </Container>
    )


}

export default CheckNoteTitle;

const Container = styled.div`
    width:100vw;
    overflow: hidden;
`;