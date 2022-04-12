import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const ripples = keyframes`
  0% {
    width: 0;
    height: 0;
    opacity: 0.5;
  }
  100% {
    width: 500px;
    height: 500px;
    opacity: 0;
  }
`;

const StyledRippleBox = styled.div`
  position: relative;
  display: inline-block;
  overflow: hidden;
  cursor: pointer;
  user-select: none;
`;

const StyledRipple = styled.span<{ left: number; top: number }>`
  position: absolute;
  left: ${(props) => props.left}px;
  top: ${(props) => props.top}px;
  background: #fff;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  animation: ${ripples} 0.6s linear;
  pointer-events: none;
`;

function GenNonDuplicateID() {
  let idStr = Date.now().toString(36);
  idStr += Math.random().toString(36).substr(2);
  return idStr;
}

function Ripple(props: RippleProps) {
  const { children, onClick, className } = props;
  const [rippleList, setRippleList] = useState<{ left: number; top: number; id: string }[]>([]);
  let timer = useRef(0);
  // @ts-ignore
  function _onClick(event) {
    const { left, top } = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - left;
    const y = event.clientY - top;
    setRippleList((prevState) => {
      prevState.push({ left: x, top: y, id: GenNonDuplicateID() });
      return prevState;
    });
    timer.current = setTimeout(() => {
      setRippleList((prevState) => {
        prevState.shift();
        return prevState;
      });
    }, 600);
    onClick && onClick(event);
  }
  useEffect(() => {
    return () => clearTimeout(timer.current);
  }, []);
  return (
    <StyledRippleBox className={className} onClick={_onClick}>
      {children}
      {rippleList.map((item) => (
        <StyledRipple left={item.left} top={item.top} key={item.id} />
      ))}
    </StyledRippleBox>
  );
}

export interface RippleProps {
  /**
   * @description       React.ReactNode
   * @default           null
   */
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
  className?: string;
}

export default Ripple;
