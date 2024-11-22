// mod 20 act 9
export default function Nav({ links }) {
    return (
      <nav className="navbar navbar-expand-lg nav-background header">
        <div className="container-fluid align-right mt-5 mb-5">
          <div className="full-name">Finola McBurnie</div>
          <div className="justify-content-end">
            <div
              className="navbar-collapse nav-links"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto ">
                {links.map((link) => link)}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
}