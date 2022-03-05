import React from 'react'

function Signup() {
  return (
    <>
        <div>회원가입</div>
        <div><input placeholder='닉네임'/> <button>중복확인</button></div>
        <div><input placeholder='비밀번호'/></div>
        <div>
            <select name="generation">
                <option value="none">세대 선택</option>
                <option value="0090">90-00</option>
                <option value="0090">70-80</option>
            </select>
        </div>
    </>
  )
}

export default Signup