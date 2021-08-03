import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
           <div>
			           {/* <!-- Footer Start --> */}
			<div className="footer">
				<div className="container">
					<div className="row">
						<div className="col-lg-7">
							<div className="row">
								<div className="col-md-6">
									<div className="footer-contact">
										<h2>Our Address</h2>
										<p><i className="fa fa-map-marker-alt"></i>123 Street, New York, USA</p>
										<p><i className="fa fa-phone-alt"></i>+012 345 67890</p>
										<p><i className="fa fa-envelope"></i>info@example.com</p>
										<div className="footer-social">
											<a href=""><i className="fab fa-twitter"></i></a>
											<a href=""><i className="fab fa-facebook-f"></i></a>
											<a href=""><i className="fab fa-youtube"></i></a>
											<a href=""><i className="fab fa-instagram"></i></a>
											<a href=""><i className="fab fa-linkedin-in"></i></a>
										</div>
									</div>
								</div>
								<div className="col-md-6">
									<div className="footer-link">
										<h2>Quick Links</h2>
										<a href="">Terms of use</a>
										<a href="">Privacy policy</a>
										<a href="">Cookies</a>
										<a href="">Help</a>
										<a href="">FQAs</a>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-5">
							<div className="footer-newsletter">
								<h2>Newsletter</h2>
								<p>
									Lorem ipsum dolor sit amet elit. Quisque eu lectus a leo dictum nec non quam. Tortor eu placerat rhoncus, lorem quam iaculis felis, sed lacus neque id eros.
								</p>
								<div className="form">
									<input className="form-control" placeholder="Email goes here"></input>
									<button className="btn custom-btn">Submit</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="copyright">
					<div className="container">
						<p>Copyright &copy; <a href="#">Your Site Name</a>, All Right Reserved.</p>
						<p>Designed By <a href="https://htmlcodex.com">HTML Codex</a></p>
					</div>
				</div>
			</div>
			{/* <!-- Footer End --> */}
			<a href="#" className="back-to-top"><i className="fa fa-chevron-up"></i></a>
			</div>
		
        );
    }
}

export default Footer;
