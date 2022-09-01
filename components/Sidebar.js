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
        <div className="sidebar-user">
          <div className="card-body">
            <div className="media">
              <div className="mr-3">
                <a href="#">
                  <Image
                    src="/upload/user/default.png"
                    width="38"
                    height="38"
                    className="rounded-circle"
                    alt=""
                  />
                </a>
              </div>

              <div className="media-body">
                <div className="media-title font-weight-semibold">Name</div>
                <div className="font-size-xs opacity-50">
                  <i className="icon-pin font-size-sm"></i> &nbsp; Address
                </div>
              </div>

              <div className="ml-3 align-self-center">
                <a
                  href="<?php echo base_url('admin/setting/user'); ?>"
                  className="text-white"
                >
                  <i className="icon-cog3"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="card card-sidebar-mobile">
          <ul className="nav nav-sidebar" data-nav-type="accordion">
            <li className="nav-item-header">
              <div className="text-uppercase font-size-xs line-height-xs">
                Main
              </div>
              <i className="icon-menu" title="Main"></i>
            </li>
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
                <i className="icon-stack"></i> <span>Asset</span>
              </a>
              <ul className="nav nav-group-sub" data-submenu-title="Starter kit">
                <li className="nav-item">
                  <a href="/admin/asset/add" className="nav-link">
                    Add New
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/admin/asset/list" className="nav-link">
                    Asset List
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item nav-item-submenu">
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
            </li>
            <li className="nav-item nav-item-submenu">
              <a href="#" className="nav-link">
                <i className="icon-stack"></i> <span>Hotel</span>
              </a>
              <ul
                className="nav nav-group-sub"
                data-submenu-title="Starter kit"
              >
                <li className="nav-item">
                  <a href="/hotel/add" className="nav-link">
                    Add New
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/hotel/list" className="nav-link">
                    Hotel List
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
