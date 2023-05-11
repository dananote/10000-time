import React from 'react'
import './Modal.css'

export default function Modal(props) {
    return (
        <article className="modal">
            <div className="modal-wrap">
                <h2>화이팅!!♥♥♥</h2>
                <p>당신의 꿈을 응원합니다!</p>
                <img src='/img/licat.png'/>
                <button className="close-btn" onClick={props.closeModal}>종료하고 진짜 훈련하러 가기 GO!GO!</button>
            </div>
        </article>
    )
}
