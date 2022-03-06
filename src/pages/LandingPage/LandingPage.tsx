import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components';
import { useNavigate } from "react-router-dom";
import "../../css/reset.css";

import ImgGood from '../../asset/img/Landingpage/img-good.svg';
import ImgDiary from '../../asset/img/Landingpage/img-diary.svg';
import ImgPhoto1 from '../../asset/img/Landingpage/img-photo1.svg';
import ImgPhoto2 from '../../asset/img/Landingpage/img-photo2.svg';
import ImgFlower1 from '../../asset/img/Landingpage/img-flower1.svg';
import ImgFlower2 from '../../asset/img/Landingpage/img-flower2.svg';
import ImgFlower3 from '../../asset/img/Landingpage/img-flower3.svg';
import ImgFlower4 from '../../asset/img/Landingpage/img-flower4.svg';

import ImgSmile1 from '../../asset/img/Landingpage/img-smile1.svg';
import ImgSmile2 from '../../asset/img/Landingpage/img-smile2.svg';
import ImgHeart1 from '../../asset/img/Landingpage/img-heart1.svg';
import ImgHeart2 from '../../asset/img/Landingpage/img-heart2.svg';
import ImgHeart3 from '../../asset/img/Landingpage/img-heart3.svg';

import ImgImage1 from '../../asset/img/Landingpage/img-image1.svg';
import ImgImage2 from '../../asset/img/Landingpage/img-image2.svg';
import ImgLockHeart from '../../asset/img/Landingpage/img-lock-heart.svg';
import ImgHeartHalf from '../../asset/img/Landingpage/img-heart-half.svg';

import ImgKeyHole from '../../asset/img/Landingpage/img-key-hole.svg';
import ImgKey from '../../asset/img/Landingpage/img-key.svg';

import ImgText1 from '../../asset/img/Landingpage/img-text1.svg';
import ImgText2 from '../../asset/img/Landingpage/img-text2.svg';

const LandingPage = () => {
  const [changeDivName2,setChangeDivName2] = useState('key');
  const navigate = useNavigate();

  const onClickKey = () => {
    setChangeDivName2('keyTranslate');
    setTimeout(function(){navigate("/login");},4000);
  };
  
  return (
    <> 
        <Container>
          <div style={{width:'1920px', height:'1080px', overflow:'hidden', background:'#F6BEC8'}}>
            <div style={{display:'flex', flexDirection:'row-reverse'}}>
              <img src={ImgFlower2}></img>
            </div>
            <div style={{position:'relative', top:'-265px', display:'flex'}}>
              <img style={{zIndex:2, width:'250px'}} src={ImgGood}></img>
              <img style={{zIndex:3, position:'absolute', top:'273.79px', left:'-29px', width:'241px'}}  src={ImgPhoto2}></img>
            </div>
            <div style={{position:'absolute', bottom:'-33px'}}>
              <FlowerImg src={ImgFlower1}></FlowerImg>
            </div>
            <div style={{position:'absolute', top:'138px', left:'15%'}}>
              <div style={{position:'relative'}}>
                <img style={{zIndex:2, position:'absolute'}} src={ImgDiary}></img>
                <img style={{zIndex:4, position:'absolute', left:'107px', top:'234px'}} src={ImgText2}></img>
                <ImgSize2 style={{zIndex:3, position:'absolute', top:'558px', left:'144px', width:'138.69px'}} src={ImgHeart3}></ImgSize2>
                <ImgSize style={{zIndex:4, position:'absolute', left:'242px', top:'28px'}} src={ImgFlower4}></ImgSize>
                <SmileImg1 style={{zIndex:4, position:'absolute',width:'46.95px', top:'175px', left:'547px'}} src={ImgSmile1}></SmileImg1>
                <SmileImg2 style={{zIndex:4, position:'absolute', width:'46.95px', top:'145px', left:'586px'}} src={ImgSmile2}></SmileImg2>
                <FlowerImg style={{zIndex:4, position:'absolute', width:'86.3px', top:'451px', left:'529px'}} src={ImgFlower3}></FlowerImg>
                <div style={{zIndex:3, position:'relative', top:'269px', left:'215px'}} >
                  <img style={{position:'absolute'}} src={ImgLockHeart}></img>
                  <img style={{zIndex:4,position:'absolute', left:'169px', top:'38px'}} src={ImgHeartHalf}></img>
                  <img style={{position:'absolute', left:'150px', top:'88.33px'}} src={ImgKeyHole}></img>
                  <KeyImg onClick={onClickKey} className={changeDivName2} style={{position:'absolute', left:'-82px', top:'91px'}} src={ImgKey}></KeyImg>
                </div>
              </div>
              <img style={{position:'absolute', zIndex:1, left:'457px', top:'-77px'}} src={ImgPhoto1}></img>
            </div>
            <div style={{position:'relative',top:'-34%',left:'58%', display:'flex', flexDirection:'row'}}>
              <div>
                <SmileImg1 style={{position:'absolute',bottom:'-120px'}} src={ImgSmile1}></SmileImg1>
                <SmileImg2 style={{position:'absolute', left:'200px', bottom:'40px'}} src={ImgSmile2}></SmileImg2>
                <img style={{position:'absolute', left:'192px', top:'-80px'}} src={ImgText1}></img>
                <img style={{position:'absolute', left:'-50px',top:'150px'}} src={ImgHeart1}></img>
              </div>
              <div style={{display:'flex', position:'absolute', top:'580px'}}>
                <img style={{position:'absolute', left:'-90px', top:'80px'}} src={ImgHeart2}></img>
                <FlowerImg style={{marginLeft:'235px'}} src={ImgFlower3}></FlowerImg>
              </div>
            </div>
            <div style={{display:'flex', flexDirection:'row-reverse'}}>
              <div>
                <img style={{position:'absolute', right:'90px', top:'327px'}} src={ImgImage1}></img>
                <img style={{position:'absolute', right:'30px', bottom:'-20px'}} src={ImgImage2}></img>
              </div>
            </div>

          </div>
        </Container>
    </>
  )
}

export default LandingPage;

const Container = styled.div`
    width:100vw;
    overflow: hidden;
`;

const rotate_img = keyframes`
	100% {
    	transform: rotate(360deg);
    }
`;

const FlowerImg = styled.img`
  animation: ${rotate_img} 10s linear infinite;
  transform-origin: 50% 50%;
`;

const large_img = keyframes`
  	50% {
    	transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
`;

const ImgSize = styled.img`
  animation: ${large_img} 2s linear infinite;
  transform-origin: 50% 50%;
`;

const large_img2 = keyframes`
  50% {
    transform: scale(0.5);
  }
    100%{
      transform: scale(1);
    }
`; 

const ImgSize2 = styled.img`
  animation: ${large_img2} 2s linear infinite;
  transform-origin: 50% 50%;
`;

const rotate_img2 = keyframes`
	100% {
    	transform: rotate(-360deg);
    }
`;

const SmileImg1 = styled.img`
  animation: ${rotate_img} 15s linear infinite;
  transform-origin: 50% 50%;
`;

const SmileImg2 = styled.img`
  animation: ${rotate_img2} 15s linear infinite;
  transform-origin: 50% 50%;
`;

const click_img = keyframes`
	100% {
    transform: translate(100px,0);
    }
`;

const KeyImg= styled.img.attrs(props=>({className:props.className}))`
  &:hover{
    transform: scale(1.3);
    transition: transform .5s;
  }
  &.keyTranslate{
    animation: ${click_img} 3s linear forwards;
  }
  
`;