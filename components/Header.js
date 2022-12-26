import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Header() {

    const handleGetuser = async (e) => {
        e.preventDefault();
        console.log('Account Settings');
        const user = await axios.get('api/user');
        console.log(user);
    }

    const handleLogout = async (e) => {
        e.stopPropagation();
        console.log("Log Out Now ");
    }

    const logo = `/upload/logo/logo.png`;

    return (
        <div className="navbar navbar-expand-md navbar-dark">
            <div className="navbar-brand">
                <Link href="/">
                    <a className="d-inline-block">
                        <img src={logo} alt=""
                            // layout='fill'
                            width={'90px'}
                            height={'100px'}
                            loading="lazy" />
                    </a>
                </Link>
            </div>

            <div className="d-md-none">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-mobile">
                    <i className="icon-tree5"></i>
                </button>
                <button className="navbar-toggler sidebar-mobile-main-toggle" type="button">
                    <i className="icon-paragraph-justify3"></i>
                </button>
            </div>

            <div className="collapse navbar-collapse" id="navbar-mobile">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link href="#">
                            <a className="navbar-nav-link sidebar-control sidebar-main-toggle d-none d-md-block">
                                <i className="icon-paragraph-justify3"></i>
                            </a>
                        </Link>
                    </li>
                </ul>

                <span className="badge bg-success ml-md-3 mr-md-auto">Online</span>

                <ul className="navbar-nav">
                    <li className="nav-item dropdown dropdown-user">
                        <Link href="#">
                            <a className="navbar-nav-link d-flex align-items-center dropdown-toggle" data-toggle="dropdown">
                                <Image src="" className="rounded-circle mr-2" height="34" width="34" alt=""></Image>
                                <span>Admin</span>
                            </a>
                        </Link>

                        <div className="dropdown-menu dropdown-menu-right">.
                            <Link href="#" >
                                <a onClick={(e) => handleGetuser(e)} className="dropdown-item">
                                    <i className="icon-cog5"></i>
                                    Account settings
                                </a>
                            </Link>
                            <Link href="#" >
                                <a className="dropdown-item" onClick={(e) => { e.preventDefault(); console.log('asdsad'); }}>
                                    <i className="icon-switch2"></i>
                                    Logout
                                </a>
                            </Link>
                        </div>
                    </li>
                </ul>
            </div>
        </div >
    );
}
