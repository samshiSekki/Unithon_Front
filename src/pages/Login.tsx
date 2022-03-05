import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import styled, {keyframes} from 'styled-components';
import {useNavigate} from 'react-router';
import {connect, useDispatch} from 'react-redux';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [myNickName, setMyNickName] = useState("");
  const [myPW, setMyPW] = useState("");

  const handleLogin = async(response: any)=>{
      axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.accessToken}`;
      dispatch({type: 'change', payload:{changeData: response.data.userId, variableType: 'userID'}});
      navigate('/main');
  }

  const loginBtnClickHandler = async() => {
    await axios.post("http://52.79.242.117:3000/users/signin",{
      "nickname": myNickName,
      "password": myPW
    }).then(response => {
      console.log(response.data);
      return response.data.success === true
      ? handleLogin(response)
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
          <Link to='/signup'>
            <SigninBtn src='img/login_assets/signup_btn.png'/>
          </Link>
          <Picture1 src='img/login_assets/picture1.png'/>
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

function f1(storeValue: any){
  return {
    storeValue : storeValue
  }
}

export default connect(f1)(Login);
const InputNick : any = styled.input`
position: absolute;
width: 189px;
padding-left: 10px;
padding-right: 10px;
height: 59px;
margin-left: 962px;
margin-top: 237px;
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
margin-top: 348.56px;
`;

const LoginBtn : any = styled.img`
  position: absolute;
  margin-top: 488px;
  margin-left: 851px;
`;
const SigninBtn : any = styled.img`
  position: absolute;
  margin-top: 581px;
  margin-left: 876px;
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

const large_img = keyframes`
  	50% {
    	transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
`;


const rotate_img = keyframes`
	100% {
    	transform: rotate(360deg);
    }
`;
const SmallFlower : any = styled.img`
position: absolute;
  margin-top: 654px;
  margin-left: 157px;
  animation: ${rotate_img} 10s linear infinite;
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
  animation: ${large_img} 2s linear infinite;
  transform-origin: 50% 50%;
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
const Picture1 : any = styled.img`
  position: absolute;
  margin-top: 121px;
  margin-left: 49px;
  animation: rotate_picture1 4s linear infinite;
  animation-direction: alternate;
`;