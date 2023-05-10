import React from 'react';
import './Main.css'
import Input from '../Input/Input';

export default function Main() {
    return(
        <main>
            <p className="qre">“연습은 어제의 당신보다 당신을 더 낫게 만든다.”</p>

            <div className="quotes">
                <p className="quotes-text"><strong>1만 시간의 법칙</strong>은<br /> 어떤 분야의 전문가가 되기 위해서는<br />최소한 1만 시간의 훈련이 필요하다는 법칙이다.
                </p>
            </div>

            <Input />
        </main>
    )
}