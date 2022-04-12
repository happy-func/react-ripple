import React , { useEffect , useRef } from 'react';
import styles from './index.module.less';

function ReactRippleButton(props: ReactRippleButtonProps) {
  const { children, onClick } = props;
  const ripple = useRef(null);
  const timer = useRef<number>(0);
  function _onClick(event) {
    const { left, top } = event.currentTarget.getBoundingClientRect()
    const x = event.clientX - left
    const y = event.clientY - top
    let ripples = document.createElement('span')
    ripples.style.left = `${x}px`
    ripples.style.top = `${y}px`
    // @ts-ignore
    ripple.current?.appendChild(ripples);

    timer.current = setTimeout(() => {
      ripples.remove()
    }, 600)
    onClick && onClick(event);
  }
  useEffect(() => {
    return () => clearTimeout(timer.current);
  }, []);
  return (
    <div className={[styles.ripple].join(' ')} onClick={_onClick} ref={ripple}>
      {children}
    </div>
  )
}

export interface ReactRippleButtonProps {
  /**
   * @description       React.ReactNode
   * @default           null
   */
  children?: React.ReactNode;
  onClick?:  React.MouseEventHandler<HTMLDivElement> | undefined;
}

export default ReactRippleButton;
