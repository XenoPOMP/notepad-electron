import cn from 'classnames';
import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from './Header.module.scss';
import { HeaderProps } from './Header.props';

const Header: FC<HeaderProps> = ({ frame }) => {
  // @ts-ignore
  const { previousPages } = useSelector((state) => state.pages);
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
