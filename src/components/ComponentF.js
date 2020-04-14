import React from 'react';
import {UserContext, ChanelContext} from '../App'

function ComponentF() {
  return (
    <div>
      <UserContext.Consumer>
        {
          user => {
            return (
              <ChanelContext.Consumer>
                {
                  channel => {
                    return <div>My {user} and {channel}</div>
                  }
                }
              </ChanelContext.Consumer>
            )
          }
        }
      </UserContext.Consumer>
    </div>
  )
}

export default ComponentF;
