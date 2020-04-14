import React from 'react';

function Count({value, title}) {
  console.log(`Rendering Count ${title}`)
  return (
    <div>
      {title} - {value}
    </div>
  )
}

export default React.memo(Count);
