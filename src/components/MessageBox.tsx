import React from 'react';

type Props = {
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
};

function MessageBox(props: Props & React.HTMLProps<HTMLDivElement>) {
  return (
    <div className={`alert alert-${props.variant || 'info'}`}>
      {props.children}
    </div>
  );
}

export default MessageBox;
