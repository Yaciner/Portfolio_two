import React, { Component } from 'react';

class Header extends Component {

componentDidMount() {
  let activeItems = document.querySelectorAll('.active');
  let listItems = document.querySelectorAll('.header_navigation li');
  let cursorSubject = document.querySelector('.cursor_subject');


  activeItems.forEach((activeItem) => {
    activeItem.addEventListener('mouseover',() => {
      listItems.forEach((item) => {
        item.style.visibility = 'visible';

      });
      cursorSubject.style.visibility = 'hidden';
    });
  });

  activeItems.forEach((activeItem) => {
    activeItem.addEventListener('mouseleave',() => {
      listItems.forEach((item) => {
        item.style.visibility = 'hidden';
      });
      activeItem.style.visibility = 'visible';
      cursorSubject.style.visibility = 'visible';
    });
  });
}

  render() {
    return (
      <section className="header_section">
        <div className="header_logo">
          LOGO
        </div>
        <nav className="header_navigation">
          <ul>
            <li className="active">
              <a href="#">
                <p>one</p>
              </a>
            </li>
            <li>
              <a href="#">
                <p>two</p>
              </a>
            </li>
            <li>
              <a href="#">
                <p>three</p>
              </a>
            </li>
            <li>
              <a href="#">
                <p>four</p>
              </a>
            </li>
          </ul>
        </nav>
      </section>
    );
  }
}

export default Header;
