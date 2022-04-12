import React from 'react';
import Ripple from 'react-ripple';

const list = [1, 2, 3, 4];

export default function () {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', borderRadius: 5 }}>
      {list.map((item) => (
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
      ))}
    </div>
  );
}
