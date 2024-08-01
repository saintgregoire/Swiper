# Breakpoints

>As mentioned earlier, I used the **mobile-first method**.

## How to change the breakpoint value

### If you are using SCSS

In the **_vars.scss** file, replace the values ​​of the variables listed below with your values.

```scss
$breakpoint-md: 768px;
$breakpoint-lg: 1024px;
$breakpoint-xl: 1440px;
$breakpoint-xxl: 1920px;
```

### If you are using CSS

In the **style.css** file, you must replace the values ​​manually for all *@media*

```css
@media (min-width: 1024px){}
👇👇👇👇👇👇👇👇👇👇👇
@media (min-width: yourValue){}
```

### JS

You need to also replace the values ​​in the **main.js** file.

```javascript
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
		
			if(viewportWidth < 768 👈 your value){
				clicksNumber = clicksSmMd;
			}
			else if(viewportWidth < 1024 👈 your value){
				clicksNumber = clicksLg;
			}
			else if(viewportWidth < 1440 👈 your value){
				clicksNumber = clicksXl;
			}
			else{
				clicksNumber = clicksXxl;
			}
      ...
```

If you will have any questions [contact me](../../README.md#contact-me).