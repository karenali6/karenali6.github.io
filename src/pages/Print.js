import React from 'react'
import OtherProjectsButton from '../components/OtherProjectsButton'
import banner from "../assets/images/print/banner.png"
import bannerMobile from "../assets/images/print/banner.png"
import businessCard from "../assets/images/print/business_card.jpg"
import brochureENG from "../assets/images/print/brochureENG.jpg"
import brochure from "../assets/images/print/brochure.jpg"
import brochure2 from "../assets/images/print/brochure2.jpg"
import LPEvent from "../assets/images/print/LP_poster.jpg"
import calendar2 from "../assets/images/print/calendar_2018_2.jpg"
import calendar from "../assets/images/print/calendar_2018.jpg"
import calendar3 from "../assets/images/print/calendar_2018_3.jpg"
import recycleBag1 from "../assets/images/print/recycle_bag_1.png"
import recycleBag2 from "../assets/images/print/recycle_bag_2.png"
import recycleBag3 from "../assets/images/print/recycle_bag_3.png"
import recycleBag4 from "../assets/images/print/recycle_bag_4.png"
import leaflet from "../assets/images/print/FlyerSS2.jpg"
import folder from "../assets/images/print/folder.jpg"
import folderFront from "../assets/images/print/folder_front.jpg"
import folderBack from "../assets/images/print/folder_back.jpg"
import postcard from "../assets/images/print/Postcard.jpg"
import billboardTW from "../assets/images/print/TW_billboard.jpg"
import billboardTW2 from "../assets/images/print/TW_billboard_outline.jpg"
import billboardSS from "../assets/images/print/SS_billboard.png"
import billboardSS2 from "../assets/images/print/SS_billboard2.jpg"
import billboardKT from "../assets/images/print/KT_billboard.jpg"
import billboardKT2 from "../assets/images/print/KT_billboard_2.jpg"
import billboardKT3 from "../assets/images/print/KT_billboard_3.jpg"
import billboardKT4 from "../assets/images/print/KT_billboard_4.jpg"
import billboardYL from "../assets/images/print/YL_billboard.jpg"
import billboardYL2 from "../assets/images/print/YL_billboard_2.jpg"
import Container from 'react-bootstrap/Container';

const Print = () => {
  return (
    <div id='print' className='project'>
      <div className='banner'>
        <div className='image'>
          <img src={banner} alt="Print banner" className='desktop' />
          <img src={bannerMobile} alt="Print banner" className='mobile' />
        </div>
        <div className='title'>
          <div className='name'>Print</div>
          <div className='summary'>Specialize in the creation of visual designs for printing such as brochures, flyers, business cards, billboard and a range of other printable marketing materials.</div>
        </div>
        
        {/* <div className='content'>
          <div className='keypoint'>
            <div>MY ROLE: <span>PRODUCT DESIGN 丨<span>BRANDING</span> 丨<span>3D DESIGN</span></span></div>
            <div>TIMELINE: <span>4 WEEKS, 2023</span></div>
          </div>
          <div className='icons'>
            <img src={floorPlannerIcon} alt="floorplanner icon" />
            <img src={PSIcon} alt="ps icon" />
            <img src={AIIcon} alt="ai icon" />
          </div>
        </div> */}
      </div>
      <Container>
        <div className='section center'>
          <h2>Recycle Bag</h2>
          <div className='description'>Creativity recycle bag design “Dont let the cat out of the bag” it’s mean don’t reveal or say something that is supposed to be secret.</div>
          <img src={recycleBag1} alt="Recycle Bag" loading='lazy' />
          <img src={recycleBag2} alt="Recycle Bag" loading='lazy' />
          <div className='flexbox'>
            <img src={recycleBag3} alt="Recycle Bag" loading='lazy' />
            <img src={recycleBag4} alt="Recycle Bag" loading='lazy' />
          </div>
        </div>
        <div className='section center'>
          <h2>Brochure</h2>
          <div className='description'>I responsible to create a layout design, ensure the page text and images are balanced and create a natural flow for the reader to follow.</div>
          <img src={brochureENG} alt="Brochure" loading='lazy' />
          <img src={brochure} alt="Brochure" loading='lazy' />
          <img src={brochure2} alt="Brochure" loading='lazy' />
        </div>
        <div className='section center'>
          <h2>Life Club event poster</h2>
          <div className='description'>Develop a poster overall look and feel, choose the image and gather all information from marking team to create poster for center weekly used.</div>
          <img src={LPEvent} alt="Life Club event poster" loading='lazy' />
        </div>
        <div className='section center'>
          <h2>Business card</h2>
          <div className='description'>By following the guideline and create business card for all teachers and staffs. </div>
          <img src={businessCard} alt="Business card" loading='lazy' />
        </div>
        <div className='section center'>
          <h2>Calendar</h2>
          <div className='description'>I responsible to choose the images, create a layout, look and feel that match with guideline and prepare digital output file for print shop.</div>
          <div className='flexbox'>
            <img src={calendar} alt="Calendar" loading='lazy' />
            <img src={calendar2} alt="Calendar" loading='lazy' />
          </div>
          <img src={calendar3} alt="Calendar" loading='lazy' />
        </div>

        <div className='section center'>
          <h2>Leaflet</h2>
          <div className='description'>Design a leaflet for different promotion used and align the style with the brand.</div>
          <img src={leaflet} alt="Leaflet" loading='lazy' />
        </div>
        <div className='section center'>
          <h2>Folder & postcard design</h2>
          <img src={folder} alt="Folder" loading='lazy' />
          <div className='flexbox'>
            <img src={folderFront} alt="Folder front" loading='lazy' />
            <img src={folderBack} alt="Folder back" loading='lazy' />
          </div>
          <img src={postcard} alt="Postcard" loading='lazy' />
        </div>
        {/* <div className='section center'>
          <h2>Postcard</h2>
          <img src={postcard} alt="Postcard" loading='lazy' />
        </div> */}
        <div className='section center'>
          <h2>Billboard</h2>
          <div className='description'>Responsible to create short advertising messages that can be read easily and delivery the key message to audience.</div>
          <img src={billboardTW} alt="Billboard in Taiwan" loading='lazy' />
          <img src={billboardTW2} alt="Billboard in Taiwan" loading='lazy' />
        </div>
        <div className='section'>
          <img src={billboardSS} alt="Billboard in Sheung Shui" loading='lazy' />
          <img src={billboardSS2} alt="Billboard in Sheung Shui" loading='lazy' />
        </div>
        <div className='section flexbox custom'>
          <img src={billboardKT} alt="Billboard in Kung Tong" loading='lazy' />
          <div className='vert'>
            <img src={billboardKT2} alt="Billboard in Kung Tong" loading='lazy' />
            <img src={billboardKT3} alt="Billboard in Kung Tong" loading='lazy' />
            <img src={billboardKT4} alt="Billboard in Kung Tong" loading='lazy' />
          </div>
        </div>
        <div className='section'>
          <img src={billboardYL} alt="Billboard in Yuen Long" loading='lazy' />
          <img src={billboardYL2} alt="Billboard in Yuen Long" loading='lazy' />
        </div>
        <div className="section center">
          <OtherProjectsButton />
        </div>
      </Container>
    </div>
  )
}

export default Print