import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from "react-router-dom";

import ImgCabinet from '../../asset/img/CheckNotePage/img-cabinet.svg';
import ImgTable from '../../asset/img/CheckNotePage/img-table.svg';
import ImgRight from '../../asset/img/CheckNotePage/img-right-icon.svg';
import ImgPost from '../../asset/img/CheckNotePage/img-postIt.svg';
import ImgPaper from '../../asset/img/CheckNotePage/img-paper.svg';
import { connect } from 'react-redux';
import axios from 'axios';

const CheckNote = (props:any) => {
    const [changeDivName,setChangeDivName] = useState('imageDefault');
    const [changeDivName2,setChangeDivName2] = useState('imageDefault');
    const navigate = useNavigate();

    const onClickPost = () => {
        setChangeDivName('imageLarge');
        setChangeDivName2('PostImageLarge');
        navigate("/checknotetitle");
    };

    const onClickPaper = () => {
        navigate("/mynote");
    };

    return (
        <>
        <Container>
                <div style={{width:'1920px', height:'1080px', overflow:'hidden', backgroundColor:'#84D5D0'}}>
                    <div style={{display:'flex', justifyContent:'center', alignItems:'center', marginTop:'159px'}}>
                        <div style={{width:'1229px', height:'762px',position:'relative'}}>
                            <KeyImg className={changeDivName} src={ImgCabinet}></KeyImg>
                            <PostImg className={changeDivName2} onClick={()=>onClickPost()} src={ImgPost} style={{position:'absolute',left:'414px',top:'181px'}}></PostImg>
                            <img onClick={()=>onClickPaper()} src={ImgPaper} style={{position:'absolute',left:'414px',top:'516px'}}></img>
                        </div>
                    </div>
                    <div style={{display:'flex', flexDirection:'row-reverse',position:'relative'}}>
                        <img style={{position:'absolute',bottom:'-440px', right:'-170px'}} src={ImgTable}></img>
                        <img style={{position:'absolute', cursor:'pointer'}} src={ImgRight}></img>
                    </div>
                </div>
        </Container>
        </>

    );
}

export default CheckNote;

const Container = styled.div`
    width:100vw;
    overflow: hidden;
`;

const click_img = keyframes`
	100% {
    transform: scale(2.7) translate(160px,90px);
    
    }
`;

const KeyImg= styled.img.attrs(props=>({className:props.className}))`
  /* &:hover{
    transform: scale(1.3);
    transition: transform .5s;
  } */
  &.imageLarge{
    animation: ${click_img} 3s linear forwards;
  }
`;

const click_img2 = keyframes`
	100% {
    transform: scale(2.7) translate(160px, 60px);
    
    }
`;

const PostImg= styled.img.attrs(props=>({className:props.className}))`
  /* &:hover{
    transform: scale(1.3);
    transition: transform .5s;
  } */
  &.PostImageLarge{
    animation: ${click_img2} 3s linear forwards;
  }
`;