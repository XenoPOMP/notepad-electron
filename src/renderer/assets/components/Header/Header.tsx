import cn from 'classnames';
import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from './Header.module.scss';
import { HeaderProps } from './Header.props';

const Header: FC<HeaderProps> = ({ frame }) => {
  // @ts-ignore
  const { currentPage, previousPages } = useSelector((state) => state.pages);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <header className={cn(styles.appHeader)}>
      <div className={cn(styles.back)}>
        {previousPages.length !== 0 && (
          <svg
            width='12'
            height='13'
            viewBox='0 0 12 13'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            onClick={() => {
              navigate(previousPages[previousPages.length - 1], {
                replace: true,
              });

              dispatch({ type: 'GO_BACK' });
            }}
          >
            <rect
              y='6.10568'
              width='8.31555'
              height='1.91887'
              rx='0.959433'
              transform='rotate(-45 0 6.10568)'
            />
            <rect
              x='1.35693'
              y='4.98889'
              width='8.31555'
              height='1.91887'
              rx='0.959433'
              transform='rotate(45 1.35693 4.98889)'
            />
            <rect x='1' y='5' width='11' height='2' rx='1' />
          </svg>
        )}
      </div>

      <div className={cn(styles.title)}>{frame.title}</div>

      <div className={cn(styles.controls)}>
        <svg
          width='12'
          height='12'
          viewBox='0 0 12 12'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          onClick={() => {
            // @ts-ignore
            window.electron.ipcRenderer.sendMessage('minimize-window', {});
          }}
        >
          <rect y='5' width='12' height='2' rx='1' />
        </svg>

        <svg
          width='12'
          height='12'
          viewBox='0 0 12 12'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M12 5C12 5.55228 11.5523 6 11 6L7 6C6.44772 6 6 5.55228 6 5C6 4.44772 6.44772 4 7 4L11 4C11.5523 4 12 4.44772 12 5Z' />
          <path d='M7 0C7.55228 0 8 0.447715 8 1V5C8 5.55228 7.55228 6 7 6C6.44772 6 6 5.55228 6 5L6 1C6 0.447715 6.44772 0 7 0Z' />
          <path d='M0 7C0 6.44772 0.447715 6 1 6H5C5.55228 6 6 6.44772 6 7C6 7.55228 5.55228 8 5 8H1C0.447715 8 0 7.55228 0 7Z' />
          <path d='M5 12C4.44772 12 4 11.5523 4 11V7C4 6.44772 4.44772 6 5 6C5.55228 6 6 6.44772 6 7V11C6 11.5523 5.55228 12 5 12Z' />
        </svg>

        <svg
          width='13'
          height='13'
          viewBox='0 0 13 13'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          onClick={() => {
            // @ts-ignore
            window.electron.ipcRenderer.sendMessage('close-window', {});
          }}
        >
          <rect
            x='0.131348'
            y='10.6066'
            width='15'
            height='2'
            rx='1'
            transform='rotate(-45 0.131348 10.6066)'
          />
          <rect
            x='1.41431'
            width='15'
            height='2'
            rx='1'
            transform='rotate(45 1.41431 0)'
          />
        </svg>
      </div>
    </header>
  );
};

export default Header;
