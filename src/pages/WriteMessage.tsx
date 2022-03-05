import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import {useNavigate} from 'react-router';

function WriteMessage() {
    const [message, setMessage] = useState("");
    const [myMsg, setMyMsg] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        async function getMyMsg(){
            await axios.get("http://52.79.242.117:3000/messages/my-message").then(response=>{
                //console.log(response.data);
                if(response.data != null){
                setMyMsg(response.data.content);
                }
            });
        }
        getMyMsg();
      }, [])

    const cancelBtnClickHandler = async() => {
        await axios.delete("http://52.79.242.117:3000/messages");
    }
    const patchMsg = async() => {
        console.log("patch");
        await axios.patch("http://52.79.242.117:3000/messages").then(response=>{
            console.log(response.data);
            navigate('/main');
        })
    }
    const sendBtnClickHandler = async() => {
        console.log(message);
        await axios.post("http://52.79.242.117:3000/messages",{
            "content" : message
        }).then(patchMsg);
    }
  return (
    <>
        <WriteBody>
        <Smile src='img/login_assets/smile.png'/>
            <WriteNote>
                <WriteNoteImg src='img/write_assets/write_note.png'/>
                <InputWrite onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{setMessage(e.target.value)}} defaultValue={myMsg}>
                    
                </InputWrite>
                <CancelBtn src='img/write_assets/cancelBtn.png' onClick={cancelBtnClickHandler}/>
                <SendBtn src='img/write_assets/sendBtn.png' onClick={sendBtnClickHandler}/>
            </WriteNote>
            <Kitty src='img/write_assets/kittycase.png'/>
            <SmallHeart src='img/signup_assets/Heart.png'/>
            <BigHeart src='img/signup_assets/bigHeart.png'/>
            
            <Flower src='img/write_assets/flower.png'/>
            <Circles src='img/write_assets/circles.png'/>
            <Star1 src='img/write_assets/star1.png'/>
            <Star2 src='img/write_assets/star2.png'/>
            <Pencil src='img/write_assets/pencil.png'/>
        </WriteBody>
    </>
  )
}

export default WriteMessage

const WriteBody: any = styled.div`
background : #F6BEC8;
width: 1920px;
height: 1080px;
`;

const WriteNote: any = styled.div`
position: absolute;
margin-top: 70px;
margin-left: 251px;
`;
const WriteNoteImg: any = styled.img`
    position: absolute;
`;

const InputWrite: any = styled.textarea`
    position: absolute;
    width: 519px;
    height: 452px;
    background: transparent;
    border: 0;
    font-style: normal;
font-weight: normal;
font-size: 36px;
line-height: 200%;
/* or 36px */
    margin-top: 238px;
    margin-left: 761px;

color: #000000;

`;

const Kitty: any = styled.img`
    position: absolute;

`;
const Smile : any = styled.img`
  position: absolute;
  margin-top: 228px;
  margin-left: 1603px;
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
const Flower : any = styled.img`
position: absolute;
margin-top: 570px;
margin-left: 89px;
`;
const Circles : any = styled.img`
position: absolute;
  margin-top: 829.27px;
`;
const Star1 : any = styled.img`
position: absolute;
margin-left: 1688px;
`;
const Star2 : any = styled.img`
position: absolute;
margin-left: 1713px;
z-index: 999;
`;
const Pencil : any = styled.img`
position: absolute;
margin-left: 1613px;
margin-top: 546px;
`;

const SendBtn : any = styled.img`
    position: absolute;
    margin-left: 1029px;
    margin-top: 710px;
`;
const CancelBtn : any = styled.img`
    position: absolute;
    margin-left: 796px;
    margin-top: 710px;
`