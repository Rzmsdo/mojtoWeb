const navLinks = [
 {
	id: "cocktails",
	title: "Cocteles",
 },
 {
	id: "about",
	title: "Sobre Nosotros",
 },
 {
	id: "art",
	title: "El Arte",
 },
 {
	id: "contact",
	title: "Contacto",
 },
];

const cocktailLists = [
 {
	name: "Spice Monkey",
	country: "AU",
	detail: "Battle",
	price: "10€",
 },
 {
	name: "Rum Sour  ( Santa Teresa )",
	country: "AU",
	detail: "Battle",
	price: "49€",
 },
 {
	name: "Rhino Pale Ale",
	country: "CA",
	detail: "750 ml",
	price: "20€",
 },
 {
	name: "Irish Guinness",
	country: "IE",
	detail: "600 ml",
	price: "29€",
 },
];

const mockTailLists = [
 {
	name: "Tropical Bloom",
	country: "US",
	detail: "Battle",
	price: "10€",
 },
 {
	name: "Passionfruit Mint",
	country: "US",
	detail: "Battle",
	price: "49€",
 },
 {
	name: "Citrus Glow",
	country: "CA",
	detail: "750 ml",
	price: "20€",
 },
 {
	name: "Lavender Fizz",
	country: "IE",
	detail: "600 ml",
	price: "29€",
 },
];

const profileLists = [
 {
	imgPath: "/images/profile1.png",
 },
 {
	imgPath: "/images/profile2.png",
 },
 {
	imgPath: "/images/profile3.png",
 },
 {
	imgPath: "/images/profile4.png",
 },
];

const featureLists = [
 "Mezclas perfectamente equilibradas",
 "Decorado a la perfección",
 "Siempre helado",
 "Agitado y mezclado por expertos",
];

const goodLists = [
 "Ingredientes cuidadosamente seleccionados",
 "Técnicas de élite",
 "Arte de la coctelería en acción",
 "Sabores recién triturados",
];

const storeInfo = {
 heading: "Dónde Encontrarnos",
 address: "456, Raq Blvd. #404, Los Ángeles, CA 90210",
 contact: {
	phone: "(555) 987-6543",
	email: "hola@jsmcocktail.com",
 },
};

const openingHours = [
 { day: "Lun–Jue", time: "11:00am – 12am" },
 { day: "Vie", time: "11:00am – 2am" },
 { day: "Sáb", time: "9:00am – 2am" },
 { day: "Dom", time: "9:00am – 1am" },
];

const socials = [
 {
	name: "Instagram",
	icon: "/images/insta.png",
	url: "#",
 },
 {
	name: "X (Twitter)",
	icon: "/images/x.png",
	url: "#",
 },
 {
	name: "Facebook",
	icon: "/images/fb.png",
	url: "#",
 },
];

const allCocktails = [
 {
	id: 1,
	name: "Classic Mojito",
	image: "/images/drink1.png",
	title: "Ingredientes Simples, Sabor Audaz",
	description:
	 "Hecho con tequila, jugo de lima y licor de naranja, el Margarita es fácil de preparar y lleno de carácter. Agrega un borde de sal para la bebida perfecta en las noches de verano.",
 },
 {
	id: 2,
	name: "Raspberry Mojito",
	image: "/images/drink2.png",
	title: "Un Clásico Picante Que Nunca Falla",
	description:
	 "El Margarita es un clásico que equilibra la lima ácida, el tequila suave y un toque de dulzura. Agitado, congelado o con hielo, siempre es fresco y refrescante.",
 },
 {
	id: 3,
	name: "Violet Breeze",
	image: "/images/drink3.png",
	title: "Ingredientes Simples, Sabor Audaz",
	description:
	 "Hecho con tequila, jugo de lima y licor de naranja, el Margarita es fácil de preparar y lleno de carácter. Agrega un borde de sal para la bebida perfecta en las noches de verano.",
 },
 {
	id: 4,
	name: "Curacao Mojito",
	image: "/images/drink4.png",
	title: "Elaborado con Cuidado, Servido con Amor",
	description:
	 "Cada cóctel se elabora con ingredientes frescos y una pasión por perfeccionar cada vertido, ya sea que estés celebrando o simplemente relajándote.",
 },
];

export {
 navLinks,
 cocktailLists,
 mockTailLists,
 profileLists,
 featureLists,
 goodLists,
 openingHours,
 storeInfo,
 socials,
 allCocktails,
};