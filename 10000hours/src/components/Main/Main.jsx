import React from 'react';
import { useState } from 'react';
import './Main.css';

export default function Main(props) {

    const [expert, setExpert] = useState('');
    const [timer, setTimer] = useState(0);
    const [dDay, setDday] = useState(0);


    function dDayfilter(event) {
        console.log(event)
        event.preventDefault();

        if(!expert && !timer) {
            alert('내용을 모두 입력해주세요')
        } else {
            setDday(Math.ceil(10000 / timer))
        }
    }

    return(
        <main>
            <p className="qre">“연습은 어제의 당신보다 당신을 더 낫게 만든다.”</p>

            <div className="quotes">
                <p className="quotes-text"><strong>1만 시간의 법칙</strong>은<br /> 어떤 분야의 전문가가 되기 위해서는<br />최소한 1만 시간의 훈련이 필요하다는 법칙이다.
                </p>
            </div>

            <form onSubmit={dDayfilter}>
            <p className="form-up">나는 
            <input type="text" placeholder="예) 프로그래밍" onChange={(event) => {
                setExpert(event.target.value)
            }}/>
            전문가가 될 것이다.</p>

            <p className="form-down" >그래서 앞으로 매일 하루에 
            <input min='0' type="number" placeholder="예) 5시간" onChange={(event) => {
                setTimer(event.target.value)
            }}/>
            시간씩 훈련할 것이다.</p>

            <button className="submit-btn">나는 며칠 동안 훈련을 해야 1만 시간이 될까?</button>
        </form>

        {!!dDay && <section className="result-text">
            <p className="result-up">당신은 <strong>{expert}</strong>전문가가 되기 위해서</p>
            <p className="result-down">대략 <strong>{dDay}</strong>일 이상 훈련하셔야 합니다! :&#41;</p>

            <div className="btn-wrap">
                <button className="modal-btn" onClick={props.openModal}>훈련하러 가기 GO!GO!</button>
                <button className="share-btn">공유하기</button>
            </div>
        </section>}
        </main>
    )
}