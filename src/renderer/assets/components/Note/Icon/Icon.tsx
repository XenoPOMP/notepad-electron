import Hint from '../../Hint/Hint';
import { useState } from 'react';

const Icon = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      style={{
        position: 'relative',
        width: 20,
        aspectRatio: '1',
        background: 'green',
      }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Hint
        text={'Delete'}
        anchors={{ horizontal: 'center', vertical: 'under' }}
        trigger={isHover}
        horizontalCenterMargin={{
          left: '-100%',
        }}
      />
    </div>
  );
};

export default Icon;
