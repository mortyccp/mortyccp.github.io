import React from 'react';
import cn from 'classnames';
import './Button.css';

function Button({ className, children }) {
  const cls = cn('Button', className);
  return (
    <button className={cls} type="button">
      {children}
    </button>
  );
}

export default Button;
