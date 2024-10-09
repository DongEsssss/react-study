import React, { useState } from 'react';

export default function UseState() {
    const [count, setCount] = useState(0);  // count는 상태, setCount는 상태를 업데이트하는 함수

  return (
    <div>
      <p>클릭한 수 :  {count}번</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}

