import Link from "next/link";
import { signOut } from "next-auth/react"

export default function SidebarSupervision() {
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
                                <i className="icon-stack"></i> <span>Hotel</span>
                            </Link>
                            <ul className="nav nav-group-sub" data-submenu-title="Starter kit">
                                <li className="nav-item">
                                    <Link href="/supervision/hotel/add" className="nav-link">
                                        Add New
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/supervision/hotel/list" className="nav-link">
                                        Hotel List
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
                                    <Link href="/supervision/user/list/5" className="nav-link">
                                        Admin
                                    </Link>
                                    <Link href="/supervision/user/list/2" className="nav-link">
                                        Hotel Agent
                                    </Link>
                                    <Link href="/supervision/user/list/1" className="nav-link">
                                        General User
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
                        <li className="nav-item">
                            <Link href="/" className="nav-link" onClick={_ => signOut({ callbackUrl: "/login" })}>
                                <i className="icon-switch2"></i>
                                <span>Logout</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div >
        </div >
    );
}
