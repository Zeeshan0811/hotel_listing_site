import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
    return (
        <div className="sidebar sidebar-dark sidebar-main sidebar-expand-md no-print">
            <div className="sidebar-mobile-toggler text-center">
                <Link href="#" className="sidebar-mobile-main-toggle">
                    <i className="icon-arrow-left8"></i>
                </Link>
                Navigation
                <Link href="#" className="sidebar-mobile-expand">
                    <i className="icon-screen-full"></i>
                    <i className="icon-screen-normal"></i>
                </Link>
            </div>

            <div className="sidebar-content">

                <div className="card card-sidebar-mobile">
                    <ul className="nav nav-sidebar" data-nav-type="accordion">
                        <li className="nav-item">
                            <Link href="/" className="nav-link">
                                <i className="icon-home4"></i>
                                <span>Dashboard</span>
                            </Link>
                        </li>
                        <li className="nav-item nav-item-submenu">
                            <Link href="#" className="nav-link">
                                <i className="icon-stack"></i> <span>Category</span>
                            </Link>
                            <ul className="nav nav-group-sub" data-submenu-title="Starter kit">
                                <li className="nav-item">
                                    <Link href="/admin/category/add" className="nav-link">
                                        Add New
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/admin/category/list" className="nav-link">
                                        Category List
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item nav-item-submenu">
                            <Link href="#" className="nav-link">
                                <i className="icon-stack"></i> <span>Services</span>
                            </Link>
                            <ul className="nav nav-group-sub" data-submenu-title="Starter kit">
                                <li className="nav-item">
                                    <Link href="/admin/services/add" className="nav-link">
                                        Add New
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/admin/services/list" className="nav-link">
                                        Services List
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item nav-item-submenu">
                            <Link href="#" className="nav-link">
                                <i className="icon-stack"></i> <span>Hotel</span>
                            </Link>
                            <ul className="nav nav-group-sub" data-submenu-title="Starter kit">
                                <li className="nav-item">
                                    <Link href="/admin/hotel/add" className="nav-link">
                                        Add New
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/admin/hotel/list" className="nav-link">
                                        Hotel List
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item nav-item-submenu">
                            <Link href="#" className="nav-link">
                                <i className="icon-stack"></i> <span>Room</span>
                            </Link>
                            <ul className="nav nav-group-sub" data-submenu-title="Starter kit">
                                <li className="nav-item">
                                    <Link href="/admin/room/add" className="nav-link">
                                        Add New
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/admin/room/list" className="nav-link">
                                        Room List
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item nav-item-submenu">
                            <Link href="#" className="nav-link">
                                <i className="icon-stack"></i> <span>User</span>
                            </Link>
                            <ul className="nav nav-group-sub" data-submenu-title="Starter kit">
                                <li className="nav-item">
                                    <Link href="/admin/user/add" className="nav-link">
                                        Add New
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/admin/user/list" className="nav-link">
                                        User List
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item nav-item-submenu">
                            <Link href="#" className="nav-link">
                                <i className="icon-cog3"></i> <span>Settings</span>
                            </Link>
                            <ul className="nav nav-group-sub" data-submenu-title="Starter kit">
                                <li className="nav-item">
                                    <Link href="/admin/setting/company" className="nav-link" title="Company Setting">
                                        Company Setting
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/admin/setting/password" className="nav-link" title="Change Password">
                                        Change Password
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/admin/setting/user" className="nav-link" title="User Setting">
                                        User Setting
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
