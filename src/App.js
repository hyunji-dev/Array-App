import React, { useState } from 'react';
import './App.css';

function App() {
    const [data, setData] = useState([
        { id: 0, value: 'A' },
        { id: 1, value: 'B' },
        { id: 2, value: 'C' },
        { id: 3, value: 'D' },
    ]);

    function addValue() {
        // 이 방식은 좋은 방법이 아님 -> 스프레드 연산자로 사용할 것
        let temp = data.slice(0, 2);
        temp = temp.concat({ id: 4, value: 'E' });
        temp = temp.concat(data.slice(2, 4));
        console.log('temp', temp);

        // ...을 빼고 사용한 방식 이렇게 쓰지 말고 위의 temp2에 넣듯이 넣어야 함
        let temp2 = [data.slice(0, 2), { id: 4, value: 'E' }, data.slice(2, 4)];
        console.log('temp2', temp2);

        // 스프레드 연산자를 사용한 방식
        let temp3 = [
            ...data.slice(0, 2),
            { id: 4, value: 'E' },
            ...data.slice(2, 4),
        ];
        console.log('temp3', temp3);
        setData(temp3);
    }
    return (
        <div>
            {data.map((d, i) => (
                <h1 key={d.id}>
                    {/* key에 i값(인덱스)을 바인딩하면 그림 그릴 때 문제가 생김
                        id값을 key에 바인딩하면 변경된 부분만 중간에 넣어주면 끝남
                        즉, DB의 P.K값을 key값에 바인딩해주면 이후에 신경쓰지 않아도 됨
                    */}
                    번호: {i} 값: {d.value}
                </h1>
            ))}
            <hr />
            <button onClick={addValue}>추가</button>{' '}
            {/* addValue의 원형: () => addValue() */}
        </div>
    );
}

export default App;
