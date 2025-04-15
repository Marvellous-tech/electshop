import React from 'react';
// import Product from './Product';
import HeroSection from './HeroSection';
// import dayoldchick from '../assets/dayoldchick.jpg';
// import dayoldbrownchick from '../assets/dayoldbrownchick.jpg';
// import layer from '../assets/layer.jpg';
// import egg from '../assets/egg.jpg';
import browncow from '../assets/browncow.jpg';
import FeaturedCategories from './FeatureCategories';
import FeaturedProducts from './FeatureProducts';
import Testimonials from './Testimonies';

export default function Home() {
    return (
        <>
            <HeroSection />
            <FeaturedCategories />
            <FeaturedProducts />
            <Testimonials />
             {/* <div className="mt-12 p-">
                <div className="p-6 bg-black text-3xl">
                    <h1 className="font-extrabold text-white">Trending Egg sizes</h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 md:gap-4 w-full">
                
                <Product
                    id="1"
                    image={dayoldchick}
                    title="Fresh Egg Dozen"
                    description="Farm-to-table eggs from free-range hens, delivered in eco-protective packaging."
                    price="12.99"
                />
                <Product
                    id="2"
                    image={dayoldbrownchick}
                    title="Fresh Egg Dozen"
                    description="Farm-to-table eggs from free-range hens, delivered in eco-protective packaging."
                    price="10.99"
                />
                <Product
                    id="2"
                    image={dayoldbrownchick}
                    title="Fresh Egg Dozen"
                    description="Farm-to-table eggs from free-range hens, delivered in eco-protective packaging."
                    price="10.99"
                />
                <Product
                    id="2"
                    image={dayoldbrownchick}
                    title="Fresh Egg Dozen"
                    description="Farm-to-table eggs from free-range hens, delivered in eco-protective packaging."
                    price="10.99"
                />
            </div>
            </div>
           <div className="">
                <div className="p-6 bg-black text-3xl">
                    <h1 className="font-extrabold text-white">Chicken </h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-2 md:gap-4 w-full">
                <Product
                    id="3"
                    image={layer}
                    title="Fresh Egg Dozen"
                    description="Farm-to-table eggs from free-range hens, delivered in eco-protective packaging."
                    price="50.99"
                />
                <Product
                    id="4"
                    image={egg}
                    title="Fresh Egg Dozen"
                    description="Farm-to-table eggs from free-range hens, delivered in eco-protective packaging."
                    price="20.99"
                />
                <Product
                    id="5"
                    image={browncow}
                    title="Fresh Egg Dozen"
                    description="Farm-to-table eggs from free-range hens, delivered in eco-protective packaging."
                    price="100.99"
                />
            </div>
           </div> */}
            
            {/* <div className="grid grid-cols-1 w-full sm:grid-cols-1 lg:grid-cols-1 md:gap-4 ">
                 <Product
                     image={product}
                     title="Fresh Egg Dozen"
                     description="Farm-to-table eggs from free-range hens, delivered in eco-protective packaging."
                    price="28.99"
                 />
            </div>  */}
        </>    
    )
}