import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="text-center bg-body-tertiary">

  <div className="container pt-4">
    <section className="mb-4">
      <a
        data-mdb-ripple-init
        className="btn btn-link btn-floating btn-lg text-body m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i className="fab fa-facebook-f"></i></a>

      <a
        data-mdb-ripple-init
        className="btn btn-link btn-floating btn-lg text-body m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i className="fab fa-twitter"></i></a>

      <a
        data-mdb-ripple-init
        className="btn btn-link btn-floating btn-lg text-body m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i className="fab fa-google"></i></a>

      <a
        data-mdb-ripple-init
        className="btn btn-link btn-floating btn-lg text-body m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i className="fab fa-instagram"></i></a>

      <a
        data-mdb-ripple-init
        className="btn btn-link btn-floating btn-lg text-body m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i className="fab fa-linkedin"></i>
        </a>
      <a
        data-mdb-ripple-init
        className="btn btn-link btn-floating btn-lg text-body m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i className="fab fa-github">
            </i></a>
    </section>
  </div>

  <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}>
    <a className="text-body" href="/">Foff.com</a>
  </div>
</footer>
      </div>
    )
  }
}