import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
    return (
        <div className="sidebar sidebar-dark sidebar-main sidebar-expand-md no-print">
            <div className="sidebar-mobile-toggler text-center">
                <Link href="#">
                    <a className="sidebar-mobile-main-toggle">
                        <i className="icon-arrow-left8"></i>
                    </a>
                </Link>
                Navigation
                <Link href="#">
                    <a className="sidebar-mobile-expand">
                        <i className="icon-screen-full"></i>
                        <i className="icon-screen-normal"></i>
                    </a>
                </Link>
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
                            <Link href="#">
                                <a className="nav-link">
                                    <i className="icon-stack"></i> <span>Category</span>
                                </a>
                            </Link>
                            <ul className="nav nav-group-sub" data-submenu-title="Starter kit">
                                <li className="nav-item">
                                    <Link href="/admin/category/add">
                                        <a className="nav-link">
                                            Add New
                                        </a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/admin/category/list">
                                        <a className="nav-link">
                                            Category List
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item nav-item-submenu">
                            <Link href="#">
                                <a className="nav-link">
                                    <i className="icon-stack"></i> <span>Services</span>
                                </a>
                            </Link>
                            <ul className="nav nav-group-sub" data-submenu-title="Starter kit">
                                <li className="nav-item">
                                    <Link href="/admin/services/add">
                                        <a className="nav-link">
                                            Add New
                                        </a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/admin/services/list">
                                        <a className="nav-link">
                                            Services List
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item nav-item-submenu">
                            <Link href="#">
                                <a className="nav-link">
                                    <i className="icon-stack"></i> <span>Hotel</span>
                                </a>
                            </Link>
                            <ul className="nav nav-group-sub" data-submenu-title="Starter kit">
                                <li className="nav-item">
                                    <Link href="/admin/hotel/add">
                                        <a className="nav-link">
                                            Add New
                                        </a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/admin/hotel/list">
                                        <a className="nav-link">
                                            Hotel List
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item nav-item-submenu">
                            <Link href="#">
                                <a className="nav-link">
                                    <i className="icon-stack"></i> <span>Room</span>
                                </a>
                            </Link>
                            <ul className="nav nav-group-sub" data-submenu-title="Starter kit">
                                <li className="nav-item">
                                    <Link href="/admin/room/add">
                                        <a className="nav-link">
                                            Add New
                                        </a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/admin/room/list" >
                                        <a className="nav-link">
                                            Room List
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item nav-item-submenu">
                            <Link href="#" >
                                <a className="nav-link">
                                    <i className="icon-stack"></i> <span>User</span>
                                </a>
                            </Link>
                            <ul className="nav nav-group-sub" data-submenu-title="Starter kit">
                                <li className="nav-item">
                                    <Link href="/admin/user/add">
                                        <a className="nav-link">
                                            Add New
                                        </a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/admin/user/list">
                                        <a className="nav-link">
                                            User List
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item nav-item-submenu">
                            <Link href="#">
                                <a className="nav-link">
                                    <i className="icon-cog3"></i> <span>Settings</span>
                                </a>
                            </Link>
                            <ul className="nav nav-group-sub" data-submenu-title="Starter kit">
                                <li className="nav-item">
                                    <Link href="/admin/setting/company">
                                        <a className="nav-link" title="Company Setting">
                                            Company Setting
                                        </a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/admin/setting/password">
                                        <a className="nav-link" title="Change Password">
                                            Change Password
                                        </a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/admin/setting/user">
                                        <a className="nav-link" title="User Setting">
                                            User Setting
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div >
        </div >
    );
}
