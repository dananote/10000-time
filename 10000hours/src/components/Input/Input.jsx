import React from 'react';
import './Input.css';

export default function Input() {
    return(
        <form>
            <p className="form-up">나는 <input type="text" placeholder="예) 프로그래밍" />전문가가 될 것이다.</p>

            <p className="form-down">그래서 앞으로 매일 하루에 <input type="text" placeholder="예) 5시간" />시간씩 훈련할 것이다.</p>

            <button className="submit-btn">나는 며칠 동안 훈련을 해야 1만 시간이 될까?</button>
        </form>
    )
}