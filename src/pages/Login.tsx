import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import {useNavigate} from 'react-router';

function Login() {
  const navigate = useNavigate();

  const [myNickName, setMyNickName] = useState("");
  const [myPW, setMyPW] = useState("");

  const loginBtnClickHandler = async() => {

    await axios.post("http://52.79.242.117:3000/users/signin",{
      "nickname": myNickName,
      "password": myPW
    }).then(response => {
      response.data.success === true
      ? navigate('/')
      : null
    });

  }

  return (
    <>
      <LoginBody>
        <LoginNote>
          <LoginNoteImg src='img/login_assets/login_note.png'/>
          <InputNick onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{setMyNickName(e.target.value)}}/>
          <InputPW type='password'onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{setMyPW(e.target.value)}}/>
          <LoginBtn src='img/login_assets/login_btn.png' onClick={loginBtnClickHandler}/>
        </LoginNote>
        <BigFlower src='img/signup_assets/Group 73.png'/>
        <SmallFlower src='img/signup_assets/Group 12415.png'/>
        <Circles src='img/signup_assets/Group 72.png'/>
        <Star src='img/signup_assets/Star 5.png'/>
        <SmallHeart src='img/signup_assets/Heart.png'/>
        <BigHeart src='img/signup_assets/bigHeart.png'/>
        <Boxes src='img/login_assets/boxes.png'/>
        <Smile src='img/login_assets/smile.png'/>
      </LoginBody>
    </>
  )
}

export default Login
const InputNick : any = styled.input`
position: absolute;
width: 189px;
padding-left: 10px;
padding-right: 10px;
height: 59px;
margin-left: 962px;
margin-top: 253px;
font-size : 25px;
background: #C4C4C4;
border-radius: 5px;
`;
const InputPW : any = styled.input`
position: absolute;
width: 189px;
padding-left: 10px;
padding-right: 10px;
height: 59px;
font-size : 25px;
background: #C4C4C4;
border-radius: 5px;
margin-left: 962px;
margin-top: 394px;
`;

const LoginBtn : any = styled.img`
  position: absolute;
  margin-top: 555px;
  margin-left: 851px;
`;

const LoginBody : any = styled.div`
  background : #F6BEC8;
  width: 1920px;
  height: 1080px;
`;
const LoginNote: any = styled.div`
  position: absolute;
  margin-top: 141px;
  margin-left: 334px;
  z-index: 999;
`;
const LoginNoteImg: any = styled.img`
  position: absolute;
`;

const BigFlower : any = styled.img`
  position: absolute;
  margin-top: 190px;
`;
const SmallFlower : any = styled.img`
position: absolute;
  margin-top: 654px;
  margin-left: 157px;
`;
const Circles : any = styled.img`
position: absolute;
  margin-top: 829.27px;
`;
const Star : any = styled.img`
  position: absolute;
  margin-left: 1688px;
`;
const SmallHeart : any = styled.img`
  position: absolute;
  margin-top: 933px;
  margin-left: 1676px;
`;
const BigHeart : any = styled.img`
  position: absolute;
  margin-top: 553px;
  margin-left: 1784px;
`;
const Boxes : any = styled.img`
  position: absolute;
  margin-top: 105px;
  margin-left: 288px;
`;
const Smile : any = styled.img`
  position: absolute;
  margin-top: 257px;
  margin-left: 1518px;
  animation: rotate_smile 5s linear infinite;
  animation-direction: alternate;
`;