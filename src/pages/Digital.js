import React from 'react'
import OtherProjectsButton from '../components/OtherProjectsButton'
import banner from "../assets/images/digital/banner.png"
import bannerMobile from "../assets/images/digital/banner_mobile.jpg"
import igFeed from "../assets/images/digital/igfeed.jpg"
import XHSPost from "../assets/images/digital/XHSpost.jpg"
import googleAd1 from "../assets/images/digital/google_ad1.GIF"
import googleAd2 from "../assets/images/digital/google_ad2.GIF"
import englishBite1 from "../assets/images/digital/englishBite1.jpg"
import englishBite2 from "../assets/images/digital/englishBite2.jpg"
import englishBite3 from "../assets/images/digital/englishBite3.jpg"
import happyWinter from "../assets/images/digital/happy_winter.png"
import bucketList from "../assets/images/digital/bucket_list.png"
import phone from "../assets/images/digital/phone_wheel_of_teachers.png"
import Container from 'react-bootstrap/Container';

const Digital = () => {
  return (
    <div id='digital' className='project'>
      <div className='banner'>
        <div className='image'>
          <img src={banner} alt="Digital banner" className='desktop' />
          <img src={bannerMobile} alt="Digital banner" className='mobile' />
        </div>
        <div className='title'>Digital</div>
      </div>
      <Container>
        <div className="section center">
          <h2>Social media feeds</h2>
          <img src={igFeed} alt="Social media feeds" loading='lazy' />
        </div>
        <div className="section center">
          <h2>Xiaohongshu post</h2>
          <img src={XHSPost} alt="Xiaohongshu post" loading='lazy' />
        </div>
        <div className="section center">
          <h2>Google Ads gif banner and Landing page</h2>
          <div className='flexbox'>
            <img src={googleAd1} alt="english bite gif" loading='lazy' />
            <img src={googleAd2} alt="english bite gif" loading='lazy' />
          </div>
          <div className='image mb-5'><img src={englishBite1} alt="english bite" loading='lazy' /></div>
          <div className='flexbox custom'>
            <img src={englishBite2} alt="english bite" loading='lazy' />
            <img src={englishBite3} alt="english bite" loading='lazy' />
          </div>
        </div>
        <div className="section center">
          <h2>Little Red Book Landing page</h2>
          <img src={bannerMobile} alt="Little Red Book Landing page" loading='lazy' />
        </div>
        <div className="section center">
          <h2>Gif poster - Happy Winter solstice</h2>
          <img src={happyWinter} alt="Happy Winter solstice" loading='lazy' />
        </div>
        <div className="section center">
          <h2>Social media CNY creative</h2>
          <div className='flexbox'>
            <img src={bucketList} alt="bucket list" loading='lazy' />
            <img src={phone} alt="wheel of teachers" loading='lazy' />
          </div>
        </div>
        <div className="section center">
          <OtherProjectsButton />
        </div>
      </Container>
    </div>
  )
}

export default Digital