import React, { useState } from 'react';

export default function UseState() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>클릭한 수 :  {count}</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}

