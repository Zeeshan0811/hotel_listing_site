import Link from "next/link";

export default function Footer() {
  return (
    <div className="navbar navbar-expand-lg navbar-light">
      <div className="text-center d-lg-none w-100">
        <button
          type="button"
          className="navbar-toggler dropdown-toggle"
          data-toggle="collapse"
          data-target="#navbar-footer"
        >
          <i className="icon-unfold mr-2"></i>
          Footer
        </button>
      </div>

      <div className="navbar-collapse collapse" id="navbar-footer">
        <span className="navbar-text">&copy; {new Date().getFullYear()}</span>
        <ul className="navbar-nav ml-lg-auto">
          <li className="nav-item">
            <Link href="#" className="navbar-nav-link" target="_blank">
              <i className="icon-lifebuoy mr-2"></i> Support
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
