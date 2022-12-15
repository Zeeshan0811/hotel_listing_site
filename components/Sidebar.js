import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="sidebar sidebar-dark sidebar-main sidebar-expand-md no-print">
      <div className="sidebar-mobile-toggler text-center">
        <a href="#" className="sidebar-mobile-main-toggle">
          <i className="icon-arrow-left8"></i>
        </a>
        Navigation
        <a href="#" className="sidebar-mobile-expand">
          <i className="icon-screen-full"></i>
          <i className="icon-screen-normal"></i>
        </a>
      </div>

      <div className="sidebar-content">

        <div className="card card-sidebar-mobile">
          <ul className="nav nav-sidebar" data-nav-type="accordion">
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link">
                  <i className="icon-home4"></i>
                  <span>Dashboard</span>
                </a>
              </Link>
            </li>
            <li className="nav-item nav-item-submenu">
              <a href="#" className="nav-link">
                <i className="icon-stack"></i> <span>Category</span>
              </a>
              <ul className="nav nav-group-sub" data-submenu-title="Starter kit">
                <li className="nav-item">
                  <a href="/admin/category/add" className="nav-link">
                    Add New
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/admin/category/list" className="nav-link">
                    Category List
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item nav-item-submenu">
              <a href="#" className="nav-link">
                <i className="icon-stack"></i> <span>Services</span>
              </a>
              <ul className="nav nav-group-sub" data-submenu-title="Starter kit">
                <li className="nav-item">
                  <a href="/admin/services/add" className="nav-link">
                    Add New
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/admin/services/list" className="nav-link">
                    Services List
                  </a>
                </li>
              </ul>
            </li>
            {/* <li className="nav-item nav-item-submenu">
              <a href="#" className="nav-link">
                <i className="icon-stack"></i> <span>Vendor</span>
              </a>
              <ul className="nav nav-group-sub" data-submenu-title="Starter kit">
                <li className="nav-item">
                  <a href="/admin/vendor/add" className="nav-link">
                    Add New
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/admin/vendor/list" className="nav-link">
                    Vendor List
                  </a>
                </li>
              </ul>
            </li> */}
            <li className="nav-item nav-item-submenu">
              <a href="#" className="nav-link">
                <i className="icon-stack"></i> <span>Hotel</span>
              </a>
              <ul
                className="nav nav-group-sub"
                data-submenu-title="Starter kit"
              >
                <li className="nav-item">
                  <a href="/admin/hotel/add" className="nav-link">
                    Add New
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/admin/hotel/list" className="nav-link">
                    Hotel List
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item nav-item-submenu">
              <a href="#" className="nav-link">
                <i className="icon-stack"></i> <span>Room</span>
              </a>
              <ul
                className="nav nav-group-sub"
                data-submenu-title="Starter kit"
              >
                <li className="nav-item">
                  <a href="/admin/room/add" className="nav-link">
                    Add New
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/admin/room/list" className="nav-link">
                    Room List
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item nav-item-submenu">
              <a href="#" className="nav-link">
                <i className="icon-stack"></i> <span>User</span>
              </a>
              <ul
                className="nav nav-group-sub"
                data-submenu-title="Starter kit"
              >
                <li className="nav-item">
                  <a href="/admin/user/add" className="nav-link">
                    Add New
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/admin/user/list" className="nav-link">
                    User List
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item nav-item-submenu">
              <a href="#" className="nav-link">
                <i className="icon-cog3"></i> <span>Settings</span>
              </a>
              <ul
                className="nav nav-group-sub"
                data-submenu-title="Starter kit"
              >
                <li className="nav-item">
                  <a
                    href="/admin/setting/company"
                    className="nav-link"
                    title="Company Setting"
                  >
                    Company Setting
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="/admin/setting/password"
                    className="nav-link"
                    title="Change Password"
                  >
                    Change Password
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="/admin/setting/user"
                    className="nav-link"
                    title="User Setting"
                  >
                    User Setting
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
