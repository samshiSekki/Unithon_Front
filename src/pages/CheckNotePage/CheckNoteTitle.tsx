import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ImgBackground1 from '../../asset/img/CheckNotePage/img-background1.svg';
import ImgLeft from '../../asset/img/CheckNotePage/img-left-icon.svg';
import { useNavigate } from "react-router-dom";

const CheckNoteTitle = () => {
    const navigate = useNavigate();

    const [message, setMessage] = useState<string>();

    const _getKeyword = async() => {
        await axios.get("http://52.79.242.117:3000/keyword")
        .then(response => {
          console.log(response.data);
          setMessage(response.data.todayKeyWord.content);
        });
    
    };

    const onClickButton = () => {
        navigate("/main");
    }
    
    useEffect(()=> {
        _getKeyword();  
        

    },[]);



    return (
        <Container>
            <div style={{width:'1920px', height:'1080px', overflow:'hidden', backgroundColor:'#84D5D0', position:'relative'}}>
                <img style={{position:'absolute', zIndex:2}} src={ImgBackground1}></img>
                <img onClick={()=>onClickButton()} style={{position:'absolute', zIndex:3, marginLeft:'30px', marginTop:'30px'}} src={ImgLeft}></img>
                <Title style={{position:'absolute', zIndex:3, top:'450.24px', left:'848px', fontSize:'48px', fontWeight:'bold'}}>오늘의 주제</Title>
                <Title style={{position:'absolute', zIndex:3, top:'510.24px', left:'848px', fontSize:'36px'}}>{message}</Title>
            </div>
        </Container>
    )


}

export default CheckNoteTitle;

const Container = styled.div`
    width:100vw;
    overflow: hidden;
`;

const Title = styled.p`
    font-family: 'Nanum Brush Script', cursive;
`;