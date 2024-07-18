import React, { Component } from 'react';

export default class ArrowUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.toggleVisibility);
  }


  toggleVisibility = () => {
    if (window.pageYOffset > 150) {
      this.setState({ visible: true });
    } else {
      this.setState({ visible: false });
    }
  }

  scrollToTop = () => {
    document.documentElement.scrollTop  = 0 
  }

  render() {
    return (
      <div>
        <div 
          className="arrow" 
          onClick={this.scrollToTop}
          style={{
            fontSize: "1.3rem",
            background: "#d7d1d1",
            width: "50px",
            height: "50px",
            display: "flex",
            position: "fixed",
            bottom: "12px",
            right: "10px",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%", 
            visibility: this.state.visible ? 'visible' : 'hidden',
            cursor: 'pointer'
          }}
        >
          <i className="fa-solid fa-arrow-up"></i>
        </div>
      </div>
    );
  }
}
