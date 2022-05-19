import React from 'react'
import './CSS Components/Home.css'
import Product from './Product';

function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
            <img className='home__image'
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/AugART/Teaser/PC/revised/V1/FIle-1_PC_01.jpg"
                alt="Amazon banner"/>
            <div className='home__row'>
                <Product id={123123123}
                title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
                price={24.99}
                image="https://m.media-amazon.com/images/I/51T-sMqSMiL.jpg"
                rating={4}
                />
                <Product id={456456}
                title="Samsung Galaxy Watch 3 45mm Bluetooth (Mystic Black),SM-R840NZKAINS"
                price={16999.99}
                image="https://m.media-amazon.com/images/I/61w674PbGRL._SL1500_.jpg"
                rating={5}/>
            </div>
            <div className='home__row'>
                <Product id={654321}
                title="Redgear A-15 Wired Gaming Mouse, Black"
                price={449}
                image="https://m.media-amazon.com/images/I/61MUoISbzjL._SL1500_.jpg"
                rating={3}/>
                <Product id={987654321}
                title="STRIFF Adjustable Laptop Stand Patented Riser Ventilated Portable Foldable Compatible with MacBook Notebook Tablet Tray Desk Table Book with Free Phone Stand(Black)"
                price={329}
                image="https://m.media-amazon.com/images/I/71Zf9uUp+GL._SL1500_.jpg"
                rating={5}/>
                <Product id={654321789}
                title="Vega Crux Black Helmet-L"
                price={1140}
                image="https://m.media-amazon.com/images/I/91Jg-E1tygL._SL1500_.jpg"
                rating={3}/>
            </div>
            <div className='home__row'>
                <Product id={741852963}
                title="Bosch Aquatak 125 1500-Watt High Pressure Washer"
                price={10770}
                image="https://m.media-amazon.com/images/I/717wYrO+b0L._SL1500_.jpg"
                rating={5}/>
            </div>
        </div>
    </div>
  );
}

export default Home;