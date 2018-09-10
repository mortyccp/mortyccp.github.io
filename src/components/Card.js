import React from 'react';
import cn from 'classnames';
import './Card.css';

function Card({ className, children }) {
  const cls = cn('Card', className);
  return <div className={cls}>{children}</div>;
}

export default Card;
