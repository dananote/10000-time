import React from 'react';
import './Result.css';

export default function Result() {
    return(
        <section className="result-text">
            <p className="result-up">당신은 <strong>프로그래밍</strong>전문가가 되기 위해서</p>

            <p className="result-down">대략 <strong>5110</strong>일 이상 훈련하셔야 합니다! :&#41;</p>

            <div className="btn-wrap">
                <button className="modal-btn">훈련하러 가기 GO!GO!</button>
                <button className="share-btn">공유하기</button>
            </div>
        </section>
    )
}
