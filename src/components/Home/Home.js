import React from "react";
import banner_image_1 from "../../images/Banner_image1.png";
import Product from "../Product/Product";
import "./Home.css";
import product1 from "../../images/product_1.png";
import product2 from "../../images/product_2.png";
import product3 from "../../images/product_3.png";
import product4 from "../../images/product_4.png";
import product5 from "../../images/product_5.png";
import product6 from "../../images/product_6.png";
import product7 from "../../images/product_7.png";

function Home() {
	return (
		<div className="home">
			<div className="home__container">
				<img className="home__image" src={banner_image_1} alt="banner 1" />

				<div className="home__row">
					<Product
						id="1"
						image={product1}
						title={
							"The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
						}
						price={549.99}
						rating={5}
					/>
					<Product
						id="2"
						image={product2}
						title={
							"Bajaj DX-7 1000W Dry Iron with Advance Soleplate and Anti-bacterial German Coating Technology, White"
						}
						price={770}
						rating={4}
					/>
				</div>
				<div className="home__row">
					<Product
						id="3"
						image={product3}
						title={"Apple iPhone 14 128GB Midnight"}
						price={79999}
						rating={5}
					/>
					<Product
						id="4"
						image={product4}
						title={
							"Razer Blade 15 Advanced Gaming Laptop 2021: Intel Core i7-11800H 8-Core, NVIDIA GeForce RTX 3070, 15.6” QHD 165Hz, 16GB RAM, 1TB SSD - CNC Aluminum - Chroma RGB - THX Spatial Audio - Thunderbolt 3"
						}
						price={355999}
						rating={5}
					/>
					<Product
						id="5"
						image={product5}
						title={"DC Men's Pure M Shoe Leather Sneakers"}
						price={10000}
						rating={4}
					/>
				</div>
				<div className="home__row">
					<Product
						id="6"
						image={product6}
						title={
							"Samsung Galaxy Watch4 Bluetooth(4.4 cm, Black, Compatible with Android only"
						}
						price={11999}
						rating={3}
					/>
					<Product
						id="7"
						image={product7}
						title={
							"God Of War Ragnarok | Launch Edition | PS4 Game (PlayStation 4)"
						}
						price={3999}
						rating={3}
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
