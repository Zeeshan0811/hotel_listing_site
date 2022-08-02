
export default function Sidebar() {
  return (
    <div class="sidebar sidebar-dark sidebar-main sidebar-expand-md no-print">

        <div class="sidebar-mobile-toggler text-center">
            <a href="#" class="sidebar-mobile-main-toggle">
                <i class="icon-arrow-left8"></i>
            </a>
            Navigation
            <a href="#" class="sidebar-mobile-expand">
                <i class="icon-screen-full"></i>
                <i class="icon-screen-normal"></i>
            </a>
        </div>


        <div class="sidebar-content">

            <div class="sidebar-user">
                <div class="card-body">
                    <div class="media">
                        <div class="mr-3">
                            <a href="#"><img src="upload/user/" width="38" height="38" class="rounded-circle" alt="" /></a>
                        </div>

                        <div class="media-body">
                            <div class="media-title font-weight-semibold">Name</div>
                            <div class="font-size-xs opacity-50">
                                <i class="icon-pin font-size-sm"></i> &nbsp; Address
                            </div>
                        </div>

                        <div class="ml-3 align-self-center">
                            <a href="<?php echo base_url('admin/setting/user'); ?>" class="text-white"><i class="icon-cog3"></i></a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card card-sidebar-mobile">
                <ul class="nav nav-sidebar" data-nav-type="accordion">

                    <li class="nav-item-header">
                        <div class="text-uppercase font-size-xs line-height-xs">Main</div> <i class="icon-menu" title="Main"></i>
                    </li>
                    <li class="nav-item">
                        <a href="/" class="nav-link">
                            <i class="icon-home4"></i>
                            <span>
                                Dashboard
                            </span>
                        </a>
                    </li>
                    <li class="nav-item nav-item-submenu">
                        <a href="#" class="nav-link"><i class="icon-stack"></i> <span>Class</span></a>
                        <ul class="nav nav-group-sub" data-submenu-title="Starter kit">
                            <li class="nav-item"><a href="<?php echo base_url('admin/class_add')  ?>" class="nav-link">Add New</a></li>
                            <li class="nav-item"><a href="<?php echo base_url('admin/classes')  ?>" class="nav-link">Class List</a></li>
                        </ul>
                    </li>
                    <li class="nav-item nav-item-submenu">
                        <a href="#" class="nav-link"><i class="icon-cog3"></i> <span>Settings</span></a>
                        <ul class="nav nav-group-sub" data-submenu-title="Starter kit">
                            <li class="nav-item"><a href="<?php echo base_url('admin/setting/company')  ?>" class="nav-link">Company Setting</a></li>
                            <li class="nav-item"><a href="<?php echo base_url('admin/setting/password')  ?>" class="nav-link">Change Password</a></li>
                            <li class="nav-item"><a href="<?php echo base_url('admin/setting/user')  ?>" class="nav-link">User Setting</a></li>
                        </ul>
                    </li>
                </ul>
            </div>


        </div>

    </div>
  )
}
