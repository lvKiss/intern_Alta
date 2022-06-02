import { FiLogOut, FiMonitor } from "react-icons/fi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiStackLine, RiSettingsLine } from "react-icons/ri";
import { AiOutlineBarChart, AiOutlineMore, AiOutlineComment } from "react-icons/ai";
import logo from "../../src/assert/logo.svg";
import { Link } from "react-router-dom";
export const Menubar = () => {
    return (
        <div className="main-menubar">
            <div className="main-logo" >
                <img src={logo} alt="" />
            </div>
            <div className="menubar">
                <div className="menubar-item">
                    <Link to="/dashboard">
                        <MdOutlineDashboard className="icon" />
                        <p>Dashboard</p>
                    </Link>
                </div >
                <div className="menubar-item">
                    <Link to="/devices">
                        <FiMonitor className="icon" />
                        <p>Thiết bị</p>
                    </Link>
                </div>
                <div className="menubar-item">
                    <Link to="services">
                        <AiOutlineComment className="icon" />
                        <p>Dịch vụ</p>
                    </Link>
                </div>
                <div className="menubar-item">
                    <Link to="oder-number">
                        <RiStackLine className="icon" />
                        <p>Cấp số</p>
                    </Link>
                </div>
                <div className="menubar-item">
                    <Link to="report">
                        <AiOutlineBarChart className="icon" />
                        <p>Báo cáo</p>
                    </Link>
                </div>
                <div className="menubar-item">
                    <Link to="#">
                        <RiSettingsLine className="icon" />
                        <p> Cài đặt hệ thống </p>
                        <AiOutlineMore className="icon1" />
                        <div className="drop-down-item">
                            <Link to="#">
                                <p>Quản lý vai trò</p>
                            </Link>
                            <Link to="#">
                                <p>Quản lý tài khoản</p>
                            </Link>
                            <Link to="#">
                                <p>Nhật ký người dùng</p>
                            </Link>
                        </div>
                    </Link>
                </div>
            </div>
            <div className='logout'>
                <a href="/">
                    <div>
                        <FiLogOut className='icon' />
                        <p>Đăng xuất</p>
                    </div>
                </a>
            </div>
        </div>

    )
}
export default Menubar