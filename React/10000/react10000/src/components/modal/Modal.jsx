import React from 'react';
import licatImg from '../../images/licat.png'
import './Modal.css';

export default function Modal() {
  return (
    <article id="modal">
        <div className="modal-wrap">
            <h2>화이팅!!&#9829;&#9829;&#9829;</h2>
            <h3>당신의 꿈을 응원합니다!</h3>
            <img src={licatImg} alt="라이켓의 응원"/>
            <button type="button" className="btn-close">종료하고 진짜 훈련하러 가기 GO!GO!</button>
        </div>
      </article>
  )
}
