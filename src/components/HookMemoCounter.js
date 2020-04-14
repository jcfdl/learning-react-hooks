import React, {useState, useMemo} from 'react';

function HookMemoCounter() {

  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  const isEven = useMemo(() => {
    let i = 0
    while (i < 200000000) i++
    return count1 % 2
  }, [count1])

  return (
    <div>
      <div>
        <button onClick={()=>setCount1(count1 + 1)}>
          Count - {count1}
        </button>        
        {isEven ? 'Odd' : 'Even'}
      </div>
      <div>
        <button onClick={()=>setCount2(count2 + 1)}>Count - {count2}</button>
      </div>
    </div>
  )
}

export default HookMemoCounter;
