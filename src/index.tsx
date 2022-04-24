import React, { useEffect, useRef, useState } from 'react';

function GenNonDuplicateID() {
  let idStr = Date.now().toString(36);
  idStr += Math.random().toString(36).substr(2);
  return idStr;
}

interface RippleItem {
  left: number;
  top: number;
  id: string;
}

function cloneRipples(ripples: RippleItem[]) {
  return JSON.parse(JSON.stringify(ripples));
}

function classNames(list: (string | undefined)[]): string {
  return list.filter((item) => !!item).join(` `);
}

function Ripple(props: RippleProps) {
  const { children, onClick, className, duration = 600, color = `#fff` } = props;
  const [rippleList, setRippleList] = useState<RippleItem[]>([]);
  let timer = useRef(0);
  // @ts-ignore
  function _onClick(event) {
    const { left, top } = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - left;
    const y = event.clientY - top;
    setRippleList((prevState) => {
      const temp = cloneRipples(prevState);
      temp.push({ left: x, top: y, id: GenNonDuplicateID() });
      return temp;
    });
    timer.current = setTimeout(() => {
      setRippleList((prevState) => {
        const temp = cloneRipples(prevState);
        temp.shift();
        return temp;
      });
    }, 600);
    onClick && onClick(event);
  }
  useEffect(() => {
    return () => clearTimeout(timer.current);
  }, []);
  return (
    <div className={classNames([`react-ripple-box`, className])} onClick={_onClick}>
      {children}
      {rippleList.map((item) => (
        <span
          className="react-ripple"
          style={{
            left: item.left,
            top: item.top,
            // @ts-ignore
            animationDuration: duration,
            backgroundColor: color,
          }}
          key={item.id}
        />
      ))}
    </div>
  );
}

export interface RippleProps {
  /**
   * @description       React.ReactNode
   */
  children?: React.ReactNode;
  /**
   * @description       onClick
   */
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
  /**
   * @description       className
   */
  className?: string;
  /**
   * @description       animation duration(ms)
   * @default           600
   */
  duration?: number | string;
  /**
   * @description       ripple color
   * @default           #fff
   */
  color?: string;
}

export default Ripple;
