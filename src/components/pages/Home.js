import {Navbar} from '../NAVBAR/Navbar';
import mainImg from '../images/Artboard 1.png'
import '../../css/home.css'
import '../../css/texts.css'
import { CiSearch } from "react-icons/ci";
import gdesign from '../images/graphicdesign.png'
import banner2 from '../images/banner2.png'
import logo from '../images/logo.png'

function Home(){
    return(
        <>
        <Navbar/>
        <div className="container1">
            <img className="mainImg" src={mainImg} alt="" />
            <div className="mainImgSearch">
                <h1 className='head1'>Find your Best Freelancer</h1>
                <div className="searchcont">
                    <input type="search" className='searchbox' placeholder='Search Categories'/>
                <CiSearch className='searchicon'/>
                </div>
            </div>
        </div>

        <div className="popularServ">
            <h1>Popular Services</h1>
            <div className="popbox">
                <img src={gdesign} alt="" />
                <img src={gdesign} alt="" />
                <img src={gdesign} alt="" />
                <img src={gdesign} alt="" />
            </div>
        </div>

        <div className="banner">
            <img src={banner2} alt="" />
            <div className="bannertext">
            <img src={logo} alt="" />
            <h1>Advanced solutions and professional talent for businesses</h1>
            </div>
        </div>

        
        
        
        
        
        </>
    );
}
export {Home}