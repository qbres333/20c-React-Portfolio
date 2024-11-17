export default function Nav({ links }) {
    return (
      <nav className="navbar navbar-expand">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-3 mt-3">
              {links.map((link) => link)}
            </ul>
          </div>
        </div>
      </nav>
    );
}