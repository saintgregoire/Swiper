function mySwiper(
	btnRight, 
	btnLeft, 
	cards, 
	clicksSmMd = 5, 
	clicksLg = clicksSmMd, 
	clicksXl=clicksLg, 
	clicksXxl=clicksXl ) {
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
	let lengthMdLg = cards.length - 1;
	let lengthXl = cards.length - 2;
	let lengthXxl = cards.length - 3;


	mySwiper(btnRight, btnLeft, cards, lengthMdLg, lengthMdLg, lengthXl, lengthXxl);

});