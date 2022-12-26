import { useRouter } from 'next/router'
import Link from 'next/link'

export default function SubHeader({ title }) {
  const router = useRouter();

  return (
    <>
      <div className="page-header page-header-light">
        <div className="page-header-content header-elements-md-inline">
          <div className="page-title d-flex">
            <h4>
              <i className="icon-arrow-left52 mr-2" onClick={() => router.back()}></i>
              <span className="font-weight-semibold">{title}</span>
            </h4>
          </div>

          <div className="header-elements d-none">
            <div className="d-flex justify-content-center"></div>
          </div>
        </div>

        <div className="breadcrumb-line breadcrumb-line-light header-elements-md-inline">
          <div className="d-flex">
            <div className="breadcrumb">
              <Link href="/">
                <a className="breadcrumb-item">
                  <i className="icon-home2 mr-2"></i> Dashboard
                </a>
              </Link>
              {/* <a href="/" className="breadcrumb-item">
                Dashboard
              </a> */}
              <span className="breadcrumb-item active">{title}</span>
            </div>

          </div>

        </div>
      </div>
    </>
  );
}
