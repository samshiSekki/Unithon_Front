import React, {useState} from 'react'
import axios from 'axios';
import styled from 'styled-components';
import {useNavigate} from 'react-router';


function Signup() {

  const navigate = useNavigate();

  const signupBtnClickHandler = async() => {

    await axios.post("http://52.79.242.117:3000/users/signup",{
      "nickname": myNickName,
      "password": myPW,
      "generation": myGen
    });
    navigate('/login');
  }

  const [myNickName, setMyNickName] = useState("");
  const [myPW, setMyPW] = useState("");
  const [myGen, setMyGen] = useState(-1);
  return (
    <>
      <SignupBody>
        <SignupNote>
          <SignupNoteImg src="img/signup_assets/signup_note.png"/>
          <InputNick onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{setMyNickName(e.target.value)}}/>
          <InputPW onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{setMyPW(e.target.value)}}/>
          <GenSelectContainer>
            <div className={myGen === 1? "selectedGen" : "unSelectedGen"} onClick={()=>setMyGen(1)}>7080</div>
            <div className={myGen === 0? "selectedGen" : "unSelectedGen"} onClick={()=>setMyGen(0)}>9000</div>
          </GenSelectContainer>
          <SignupBtn src='img/signup_assets/signup_btn.png' onClick={signupBtnClickHandler}/>
        </SignupNote>
        <BigFlower src='img/signup_assets/Group 73.png'/>
        <SmallFlower src='img/signup_assets/Group 12415.png'/>
        <Circles src='img/signup_assets/Group 72.png'/>
        <Star src='img/signup_assets/Star 5.png'/>
        <SmallHeart src='img/signup_assets/Heart.png'/>
        <BigHeart src='img/signup_assets/bigHeart.png'/>
      </SignupBody>
      
    </>
  )
}

export default Signup

const SignupBody : any = styled.div`
  background : #F6BEC8;
  width: 1920px;
  height: 1080px;
`;

const SignupNote : any = styled.div`
  position: absolute;
  margin-top: 145px;
  margin-left: 616px;
`;

const SignupNoteImg : any = styled.img`
  position: absolute;
`;

const InputNick : any = styled.input`
  padding-left: 10px;
  padding-right: 10px;
  font-size: 25px;
  position: absolute;
  width: 189px;
  height: 59px;
  margin-top: 251px;
  margin-left: 380px;
  background: #F3F3F3;
  border-radius: 5px;
  border : 0px;
`;

const InputPW : any = styled.input`
  padding-left: 10px;
  padding-right: 10px;
  font-size: 25px;
  position: absolute;
  width: 189px;
  height: 59px;
  margin-top: 392px;
  margin-left: 380px;
  background: #F3F3F3;
  border-radius: 5px;
  border : 0px;
`;

const GenSelectContainer : any = styled.div`
  position: absolute;
  width: 209px;
  height: 59px;
  background: #F3F3F3;
  border-radius: 5px;
  margin-left: 380px;
  margin-top: 526px;
`;

const SignupBtn : any = styled.img`
position: absolute;
margin-top: 683.35px;
margin-left: 275px;

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