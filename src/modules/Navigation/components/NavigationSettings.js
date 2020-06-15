import React from 'react';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='navigation__section-settings'>
        {
          false ? <button className='auth-btn'>Войти</button> : <button className='auth-btn'>Зарегистрироваться</button>
        }
      </div>
    );
  }
}