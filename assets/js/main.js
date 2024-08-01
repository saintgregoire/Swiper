function mySwiper(
	btnRight, 
	btnLeft, 
	cards, 
	clicksSmMd, 
	clicksLg = clicksSmMd, 
	clicksXl = clicksLg, 
	clicksXxl = clicksXl ) {
	let counter = 0;

	if (btnRight && btnLeft && cards) {
		const viewportWidth = window.innerWidth;
		let clicksNumber = 0;
		
			if(viewportWidth < 768){
				clicksNumber = clicksSmMd;
			}
			else if(viewportWidth < 1024){
				clicksNumber = clicksLg;
			}
			else if(viewportWidth < 1440){
				clicksNumber = clicksXl;
			}
			else{
				clicksNumber = clicksXxl;
			}


		btnRight.addEventListener('click', ()=>{
			if(counter === clicksNumber){
				for(let i = 0; i<cards.length; i++){
					cards[i].classList.remove('hidden');
				}
				counter = 0;
				btnLeft.classList.remove('onClick');
			}
			else{
			cards[counter].classList.toggle('hidden');
			counter++;
			btnLeft.classList.add('onClick');
			}
		})

		btnLeft.addEventListener('click', () => {
			
			if(counter > 0){
				cards[counter-1].classList.remove('hidden');
				counter--;
			}
			if(!cards[0].classList.contains('hidden')){
				btnLeft.classList.remove('onClick');
			}
		});

	}
}

document.addEventListener('DOMContentLoaded', ()=>{

  const btnRight = document.querySelector('.swiper__btn.right');
	const btnLeft = document.querySelector('.swiper__btn.left');
	const cards = document.querySelectorAll('.swiper__card');

	// ? By default, my swiper displays 1 card on screens from 375px to 1024px, 2 cards on screens from 1024px to 1440px, and 3 cards on screens above, so I had to specify the number of clicks for each screen size.
	let clicksSmMd = cards.length - 1
	let clicksMdLg = clicksSmMd;
	let clicksXlXxl = cards.length - 2;
	let clicksXxl = cards.length - 3;
	// ? clicksSmMd is required since this is the initial number of clicks.
	// ? The number of clicks for subsequent screen sizes inherits the number of clicks of the previous screen and does not need to be reassigned.
	// *For example, if you always have only one card displayed, your function will look like:
	// * let clicksSmMd = cards.length - 1;
	// * mySwiper(btnRight, btnLeft, cards, clicksSmMd);
	// * Because:
	// * clicksLg = clicksSmMd, 
	//* clicksXl = clicksLg, 
	//* clicksXxl = clicksXl


	mySwiper(btnRight, btnLeft, cards, clicksSmMd, clicksMdLg, clicksXlXxl, clicksXxl);

});