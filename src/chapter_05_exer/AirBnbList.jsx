import React from 'react';
import AirBnb from './AirBnb';

const AirBnbList = () => {
  return (
    <div>
      <h1>설레는 다음 여행을 위한 아이디어</h1>
      <AirBnb text="서울" discript="2km 거리" color="#de3151"/>
      <AirBnb text="인천" discript="29km 거리" color="#cc2d4a"/>
      <AirBnb text="대구" discript="237km 거리" color="#d93b30"/>
      <AirBnb text="대전" discript="140km 거리" color="#bc1a6e"/>
    </div>
  );
}

export default AirBnbList;
