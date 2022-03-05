import React, {useEffect, useState} from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';

function MainPage(props: any) {
    const [getMessage, setGetMessage] = useState(false);
    const [todayKeyword, setTodayKeyword] = useState("");
    //console.log(props.storeValue.userID);
    useEffect(() => {
      async function getKeyword(){
          await axios.get("http://52.79.242.117:3000/keyword").then(response=>{
              console.log(response.data);
              setTodayKeyword(response.data.todayKeyWord.content);
              setGetMessage(response.data.message);
          });
      }
      getKeyword();
    }, [])
    
  return (
    <>
        <MainPageBody>
            <ChalkBoard>
                <ChalkBoardImg src='img/mainpage_assets/chalkboard.png'/>
                <TodaySubjectTitle>오늘의 주제</TodaySubjectTitle>
                <TodaySubject>{todayKeyword}</TodaySubject>
                <MessageMent>
                    {
                        getMessage === true
                        ? `좋은 하루예요! 오늘의 마니또에게 쪽지가 도착했어요`
                        : `좋은 하루에요! 아직 오늘의 마니또에게 쪽지를 받지 못했어요`
                    }
                </MessageMent>
                <PaperPlane src='img/mainpage_assets/paper_plane.png'/>
            </ChalkBoard>
            <Cabinet src='img/mainpage_assets/Cabinet.png'/>
            <Link to='/write'>
            <div>편지쓰기로 이동</div>
            </Link>
        </MainPageBody>
    </>
  )
}
function f1(storeValue: any){
    return {
      storeValue : storeValue
    }
  }
export default connect(f1)(MainPage)

const MainPageBody = styled.div`
    width: 1920px;
    height: 1080px;
    background: rgba(255, 249, 231, 0.5);
`;

const ChalkBoard = styled.div`
    position: absolute;
    margin-top: 61px;
    margin-left: 338px;
`;
const ChalkBoardImg = styled.img`
    position: absolute;
`;
const PaperPlane = styled.img`
  position: absolute;
  margin-top: 289px;
  margin-left: 889px;
`;
const TodaySubjectTitle = styled.div`
    position: absolute;
    margin-top: 167px;
    margin-left: 232px;
    width: 116px;
height: 47px;
font-style: normal;
font-weight: bold;
font-size: 24px;
line-height: 47px;
color: #FFFFFF;
font-family: 'Noto Sans KR', sans-serif;
`;
const TodaySubject = styled.div`
  position: absolute;
    height: 140px;
    width: 1000px;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 40px;
    font-weight: bold;
    line-height: 140px;
    color: #FFFFFF;
    text-shadow: 3px 2px 4px rgba(0, 0, 0, 0.25);
    margin-top: 229px;
    margin-left: 174px;
`;
const MessageMent = styled.div`
  position: absolute;
  width: 183px;
  height: auto;
  font-family: Noto Sans KR;
font-style: normal;
font-weight: bold;
font-size: 24px;
line-height: 194%;

display: flex;
align-items: center;
text-align: center;
color: #FFFFFF;

text-shadow: 3px 2px 4px rgba(0, 0, 0, 0.25);

margin-top: 311px;
margin-left: 991px;
`;

const Cabinet = styled.img`
  position: absolute;
  margin-top: 770.73px;
`