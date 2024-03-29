import dots from "../../assets/images/dots.png";
import halfimg1 from "../../assets/images/halfimg1.png";
import halfimg2 from "../../assets/images/halfimg2.png";
import halfimg3 from "../../assets/images/halfimg3.png";

import "./Promotion.css";
function Promotion() {
	const features = [
		"Smart IT solutions, reliable performance, dedicated support.",
		"Cutting-edge IT, unwavering support, your pathway to digital excellence.",
		"Empowering success through tech innovation and unwavering support.",
	];

	return (
		<div className="promotion">
			<div className="description">
				<a href="#">About the Company</a>
				<h2>
					Elevate your business with cutting-edge <span>IT solutions</span>.
				</h2>
				<h3>
					Empowering your digital journey with seamless IT solutions tailored to elevate your business&apos;s efficiency, security, and
					innovation.
				</h3>
				{features.map((feature, index) => (
					<div key={index} className="rows">
						<div>
							<div></div>
						</div>
						<p>{feature}</p>
					</div>
				))}
			</div>
			<div className="images">
				<img className="img1" src={dots} alt="" />
				<img className="img2" src={halfimg1} alt="" />
				<img className="img3" src={halfimg2} alt="" />
				<img className="img4" src={halfimg3} alt="" />
			</div>
		</div>
	);
}

export default Promotion;
