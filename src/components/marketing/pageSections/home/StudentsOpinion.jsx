import React from "react";

import image4 from "../../../../medias/photos/img-herotop.png";
import ImgCircle from "../../../elements/imgCircle/ImgCircle";


const StudentsOpinion = () => {


	let pagenum = 1;

	function AutoRotate() {

		let myele = null;
		let allElements = document.getElementsByTagName('label');

		for (let i = 0, n = allElements.length; i < n; i++) {

			let myfor = allElements[i].getAttribute('for');

			if ((myfor !== null) && (myfor == ('slide_2_' + pagenum))) {

				allElements[i].click();

				break;
			}
		}
		if (pagenum == 4) {
			pagenum = 1;
		} else {
			pagenum++;
		}
	}
	setInterval(AutoRotate, 9000);


	return(

		<div className="container_sections_home lg:mx-60 mx-5">

			<div className="testimonial_slider_2 shadow py-5 lg:pl-5">
				<input type="radio" name="slider_2" id="slide_2_1" checked />
				<input type="radio" name="slider_2" id="slide_2_2" />
				<input type="radio" name="slider_2" id="slide_2_3" />
				<input type="radio" name="slider_2" id="slide_2_4" />
				<div className="boo_inner clearfix">
					<div className="slide_content">
						<div className="testimonial_2 grid lg:grid-cols-2">
							<div className="lg:ml-40 lg:order-last mx-auto">
								<ImgCircle src={image4} classe="img_slider shadow" />
								<p className="text-bold text-center">Elève de 3ième</p>
							</div>
							<div className="content_2 lg:ml-12 lg:mt-0 mt-5">
								<p>
									<blockquote><q className="text-lg"> &emsp;Se faire encadrer par les profs de Bteach a simplement été un grand
									plaisir, avant j'avais beaucoup du mal à assimiler les notions comme
									les mathématiques en cours mais aujourd'hui je peux compter sur mon 
									repétiteur pour me mettre à la ligne. </q></blockquote>
								</p>
							</div>
						</div>
					</div>
					<div className="slide_content">
						<div className="testimonial_2 grid lg:grid-cols-2">
							<div className="lg:ml-40 lg:order-last mx-auto">
								<ImgCircle src={image4} classe="img_slider shadow" />
								<p className="text-bold text-center">Elève de 3ième</p>
							</div>
							<div className="content_2 lg:ml-12 lg:mt-0 mt-5">
								<p>
									<blockquote><q className="text-lg"> &emsp;Se faire encadrer par les profs de Bteach a simplement été un grand
									plaisir, avant j'avais beaucoup du mal à assimiler les notions comme
									les mathématiques en cours mais aujourd'hui je peux compter sur mon 
									repétiteur pour me mettre à la ligne. </q></blockquote>
								</p>
							</div>
						</div>
					</div>
					<div className="slide_content">
						<div className="testimonial_2 grid lg:grid-cols-2">
							<div className="lg:ml-40 lg:order-last mx-auto">
								<ImgCircle src={image4} classe="img_slider shadow" />
								<p className="text-bold text-center">Elève de 3ième</p>
							</div>
							<div className="content_2 lg:ml-12 lg:mt-0 mt-5">
								<p>
									<blockquote><q className="text-lg"> &emsp;Se faire encadrer par les profs de Bteach a simplement été un grand
									plaisir, avant j'avais beaucoup du mal à assimiler les notions comme
									les mathématiques en cours mais aujourd'hui je peux compter sur mon 
									repétiteur pour me mettre à la ligne. </q></blockquote>
								</p>
							</div>
						</div>
					</div>
					<div className="slide_content">
						<div className="testimonial_2 grid lg:grid-cols-2">
							<div className="lg:ml-40 lg:order-last mx-auto">
								<ImgCircle src={image4} classe="img_slider shadow" />
								<p className="text-bold text-center">Elève de 3ième</p>
							</div>
							<div className="content_2 lg:ml-12 lg:mt-0 mt-5">
								<p>
									<blockquote><q className="text-lg"> &emsp;Se faire encadrer par les profs de Bteach a simplement été un grand
									plaisir, avant j'avais beaucoup du mal à assimiler les notions comme
									les mathématiques en cours mais aujourd'hui je peux compter sur mon 
									repétiteur pour me mettre à la ligne. </q></blockquote>
								</p>
							</div>
						</div>
					</div>
				</div>
				<div id="controls">
					<label for="slide_2_1"></label>
					<label for="slide_2_2"></label>
					<label for="slide_2_3"></label>
					<label for="slide_2_4"></label>
				</div>
			</div>

		</div>

	);
}

export default StudentsOpinion;