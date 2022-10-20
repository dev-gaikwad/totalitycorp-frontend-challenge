import { useState } from 'react';

function SidebarCard({ title, list, disabled }) {
  const [showBtn, setShowBtn] = useState(false);
  const [longList, setLongList] = useState(false);

  if (!disabled) {
    const shortList = list.slice(0, 5);
    if (list.length > 5 && showBtn === false) {
      setShowBtn(true);
    }

    const showBtnHandler = () => {
      setLongList(true);
    };

    const showLessBtnHandler = () => {
      setShowBtn(true);
      setLongList(false);
    };

    return (
      <div className='sidebar-card'>
        <h4>{title}</h4>
        <div className='cardList'>
          <ul>
            {longList
              ? list.map((item, index) => <li key={index}>{item}</li>)
              : shortList.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
          {showBtn && !longList ? (
            <button className='sidebarcard-show-btn' onClick={showBtnHandler}>
              Show More
            </button>
          ) : longList ? (
            <button
              className='sidebarcard-show-btn'
              onClick={showLessBtnHandler}
            >
              Show Less
            </button>
          ) : null}
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default SidebarCard;
