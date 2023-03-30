import React from 'react';


function Navbar(props) {
      return (
            <>
            <nav>
                  <img src={props.img} alt="" />
                  <div className="link">
                        <a href={props.teg}>Youtube</a>
                        <a href={props.teg}>Youtube</a>
                        <a href={props.teg}>Youtube</a>
                        <a href={props.teg}>Youtube</a>
                  </div>
                  <button>{props.but}</button>
            </nav>
            </>
        );
}

export default Navbar;