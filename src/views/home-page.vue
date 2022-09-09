<template>
	<main class="home-page">
		<div class="inner-container">
			<section class="sec1">
				<div class="top-sec1">
					<div class="left-sec1">
						<div class="heading text-shadow">
							<h1>
								חדש בישראל יבוא רשמי ראש השטיפה שכובש את אירופה עכשיו לקנייה
								באתר
							</h1>
							<h3>
								שטיפה, חיטוי ושאיבה בראש אחד בואו לגלות איך התוסף הקטן הזה כבש
								את אירופה בשטיפה
							</h3>
						</div>
						<dysonVersion></dysonVersion>
						<safety />
					</div>
					<div class="right-sec1">
						<img src="/withstik.png" alt="" srcset="" />
					</div>
				</div>
				<div class="footer-sec1">
					<span
						>כל הנתונים המוזנים על ידי המשתמשים אל מערכת המחשוב של האתר נשמרים
						על גבי שרת מסדי הנתונים של האתר, אשר הינו מנותק לחלוטין משרת
						הרשת.כך, נתוני המשתמשים נשמרים חסויים ומאובטחים מפני חדירה ו/או גישה
						בלתי מורשית למידע המאוחסן על גבי מערכות המחשוב של האתר. על מנת
						להקטין עוד יותר את הסיכון לחשיפת פרטי המשתמשים, פרטי כרטיסי האשראי
						של לקוחות האתר נמחקים באופן אוטומטי ממערכת המחשוב של האתר לאחר ביצוע
						העסקה באתר. שירות הסליקה איתו אנו עובדים היא חברת הסליקה “יעד שריג”
						חברת סליקה המובילה בארץ אשר נותנת מענה לכל האתרים הכי גדולים בארץ,
						MAX עסקים, SHOPIFY ,משרדי ממשלה, בנקים ועוד. אנו מאחלים לכם חווית
						קניה נעימה ובטוחה.</span
					>
				</div>
			</section>

			<section class="sec2">
				<div class="inner-wrapper">
					<h2>
						<b>300,000</b><br />
						מכירות באירופה ב 2021
					</h2>

					<boxes>
						<template v-slot:strip>
							<span class="small">STRONG WHEELS</span>
						</template>
						<template v-slot:stripHeb
							><span class="medium">גלגלים חזקים </span>
						</template>
						<template v-slot:default>
							<span class="medium-plus"></span> גוף חזק עם שני מנועים המנקים
							במהירות של 650 פעולות לדקה
						</template>

						<template v-slot:img>
							<img src="/box2.png" alt="" srcset=""
						/></template>
					</boxes>
					<boxes>
						<template v-slot:strip>
							<span class="small">STRONG WHEELS</span>
						</template>
						<template v-slot:stripHeb
							><span class="medium">גלגלים חזקים </span>
						</template>
						<template v-slot:default>
							<span class="medium-plus"></span> גוף חזק עם שני מנועים המנקים
							במהירות של 650 פעולות לדקה
						</template>

						<template v-slot:img>
							<img src="/box2.png" alt="" srcset=""
						/></template>
					</boxes>
					<boxes>
						<template v-slot:strip>
							<span class="small">STRONG WHEELS</span>
						</template>
						<template v-slot:stripHeb
							><span class="medium">גלגלים חזקים </span>
						</template>
						<template v-slot:default>
							<span class="medium-plus"></span> גוף חזק עם שני מנועים המנקים
							במהירות של 650 פעולות לדקה
						</template>

						<template v-slot:img>
							<img src="/box2.png" alt="" srcset=""
						/></template>
					</boxes>
					<boxes>
						<template v-slot:strip>
							<span class="small">STRONG WHEELS</span>
						</template>
						<template v-slot:stripHeb
							><span class="medium">גלגלים חזקים </span>
						</template>
						<template v-slot:default>
							<span class="medium-plus"></span> גוף חזק עם שני מנועים המנקים
							במהירות של 650 פעולות לדקה
						</template>

						<template v-slot:img>
							<img src="/box2.png" alt="" srcset=""
						/></template>
					</boxes>
				</div>
			</section>
			<section class="sec3 videos">
				<div class="content-vid">
					<h2>Just another text</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. In nulla
						expedita obcaecati quas enim accusantium sint, vero labore veritatis
						iusto ad aliquid perspiciatis dicta qui. Tempora, blanditiis
						nesciunt! Ullam, debitis.
					</p>
				</div>
				<div class="video-wrapper">
					<video
						src="/dyson-mop.mp4"
						type="video/mp4"
						autoplay
						muted
						loop
						id="dyson">
						<!-- <source src="/dyson-mop.mp4" type="video/mp4" /> -->
					</video>
				</div>
			</section>
			<section class="sec4 videos">
				<div class="video-wrapper">
					<video
						src="/dyson2.mp4"
						type="video/mp4"
						autoplay
						muted
						loop
						id="dyson">
						<!-- <source src="/dyson-mop.mp4" type="video/mp4" /> -->
					</video>
				</div>
				<div class="content-vid">
					<h2>Just another text</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. In nulla
						expedita obcaecati quas enim accusantium sint, vero labore veritatis
						iusto ad aliquid perspiciatis dicta qui. Tempora, blanditiis
						nesciunt! Ullam, debitis.
					</p>
				</div>
			</section>
			<section class="sec5">
				<div @click="addRemoveClass($event)" class="options">
					<div class="option active" style="--optionBackground: url(/t61.jpg)">
						<div class="shadow"></div>
						<div class="label">
							<div class="icon">
								<i class="fas fa-walking"></i>
							</div>
							<div class="info">
								<div class="main">Blonkisoaz</div>
								<div class="sub">Omuke trughte a otufta</div>
							</div>
						</div>
					</div>
					<div class="option" style="--optionBackground: url(/t62.jpg)">
						<div class="shadow"></div>
						<div class="label">
							<div class="icon">
								<i class="fas fa-snowflake"></i>
							</div>
							<div class="info">
								<div class="main">Oretemauw</div>
								<div class="sub">Omuke trughte a otufta</div>
							</div>
						</div>
					</div>
					<div class="option" style="--optionBackground: url(/t63.jpg)">
						<div class="shadow"></div>
						<div class="label">
							<div class="icon">
								<i class="fas fa-tree"></i>
							</div>
							<div class="info">
								<div class="main">Iteresuselle</div>
								<div class="sub">Omuke trughte a otufta</div>
							</div>
						</div>
					</div>
					<div class="option" style="--optionBackground: url(/t64.jpg)">
						<div class="shadow"></div>
						<div class="label">
							<div class="icon">
								<i class="fas fa-tint"></i>
							</div>
							<div class="info">
								<div class="main">Idiefe</div>
								<div class="sub">Omuke trughte a otufta</div>
							</div>
						</div>
					</div>
					<div class="option" style="--optionBackground: url(/t65.jpg)">
						<div class="shadow"></div>
						<div class="label">
							<div class="icon">
								<i class="fas fa-sun"></i>
							</div>
							<div class="info">
								<div class="main">Inatethi</div>
								<div class="sub">Omuke trughte a otufta</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	</main>
</template>

<script>
	import dysonVersion from "../components/app-version.cmp.vue";
	import boxes from "../components/app-text-boxes.cmp.vue";
	import safety from "../components/app-safe.cmp.vue";
	import { ref, onMounted, unref, shallowRef, onBeforeUnmount } from "vue";
	import { entries } from "lodash";

	export default {
		setup() {
			const section = ref("");
			onMounted(() => {
				const obsorver = new IntersectionObserver(
					(entries) => {
						entries.forEach((entry) => {
							// section.value = entry.target.getAttribute("tag");
							entry.target.classList.toggle("show", entry.isIntersecting);
							console.log("section", entry.target);
						});
					},
					{ rootMargin: "-200px", trashold: 0.3 },
				);
				const allSections = document.querySelectorAll("section");
				// console.log("test", test);
				allSections.forEach((section) => {
					obsorver.observe(section);
				});
			});
			function addRemoveClass(ev) {
				const options = document.querySelectorAll(".option");
				options.forEach((op) => {
					op.classList.remove("active");
				});
				ev.target.classList.add("active");
			}
			return {
				addRemoveClass,
				// options,
			};
		},

		data() {
			return {
				isActive: false,
			};
		},
		methods: {},
		components: {
			dysonVersion,
			boxes,
			safety,
		},
	};
</script>
