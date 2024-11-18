export default function Nav({ links }) {
    return (
      <nav className="navbar navbar-expand-lg nav-background">
        <div className="container-fluid justify-content-between">
          <div>Finola McBurnie</div>
          <div className="navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-3">
              {links.map((link) => link)}
            </ul>
          </div>
        </div>
      </nav>
    );
}