import Image from "next/image";
import Link from "next/link";
import { signOut } from "next-auth/react"

export default function SidebarNew() {
    return (<>
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
                                <a href="#"></a>
                            </div>

                            <div className="media-body">
                                <div className="media-title font-weight-semibold"></div>
                                <div className="font-size-xs opacity-50">
                                    <i className="icon-pin font-size-sm"></i>
                                </div>
                            </div>

                            <div className="ml-3 align-self-center">
                                <a href="#" className="text-white"><i className="icon-cog3"></i></a>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="card card-sidebar-mobile">
                    <ul className="nav nav-sidebar" data-nav-type="accordion">
                        <li className="nav-item-header">
                            <div className="text-uppercase font-size-xs line-height-xs">Main</div> <i className="icon-menu" title="Main"></i>
                        </li>
                        <li className="nav-item nav-item-submenu">
                            <a href="#" className="nav-link"><i className="icon-stack"></i> <span>Class</span></a>
                            <ul className="nav nav-group-sub" data-submenu-title="Starter kit">
                                <li className="nav-item"><a href="<?php echo base_url('admin/class_add')  ?>" className="nav-link">Add New</a></li>
                                <li className="nav-item"><a href="<?php echo base_url('admin/classes')  ?>" className="nav-link">Class List</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </>
    )
}
