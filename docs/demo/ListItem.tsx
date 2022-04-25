import React from 'react';
import Ripple from '@happy-func/react-ripple';
import '@happy-func/react-ripple/es/style';

const list = [1, 2, 3, 4];

export default function () {
  return (
    <div>
      {list.map((item) => (
        <>
          <Ripple key={item}>
            <div
              style={{
                width: 200,
                height: 50,
                lineHeight: '50px',
                backgroundColor: '#cecece',
                color: '#fff',
                textAlign: 'center',
                fontSize: 24,
                border: '1px solid #fefefe',
              }}
            >
              List Item {item}
            </div>
          </Ripple>
          <br />
        </>
      ))}
    </div>
  );
}
