import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" />

                <div className="home__row">
                    <Product title='Manga Guide to Draw Manga' price='8' rating={4}
                    image='https://m.media-amazon.com/images/I/51wIG41dtxL.jpg'/>

                    <Product title='Redmi 9A (Nature Green, 2GB Ram, 32GB Storage)' price='199' rating={4}
                    image='https://m.media-amazon.com/images/I/710fuhtgISL._AC_UY327_FMwebp_QL65_.jpg'/>
                </div>
                <div className="home__row">
                    <Product title='Echo Dot (3rd Gen) – Smart speaker with Alexa' price='30' rating={4}
                    image='https://images-eu.ssl-images-amazon.com/images/I/41tEQogY3qL._AC_US327_FMwebp_QL65_.jpg'/>
                   
                    <Product title="Redux Analogue Blue Dial Men’s and Boy's Watch RWS0216S" price='450' rating={5}
                    image='https://images-na.ssl-images-amazon.com/images/I/81BDpSIwu3L._UY550_.jpg'/>
                   
                    <Product title='KIDDY STAR Full Sleeve Hooded Sweatshirts/Hoodies for Kids Boys and Girls' price='19' rating={3}
                    image='https://images-na.ssl-images-amazon.com/images/I/31uoKzqnEdL.jpg'/>
                </div><div className="home__row">
                    <Product title='This is power of function' price='19' rating={2}
                    image='https://images-na.ssl-images-amazon.com/images/I/51M-0OzscIL.jpg'/>
                </div>
            </div>
        </div>
    )
}

export default Home
