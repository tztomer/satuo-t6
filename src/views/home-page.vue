<template>
	<main class="home-page">
		<div class="inner-container">
			<section class="sec1 overflow-hidden">
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
					</div>
					<div class="right-sec1">
						<img src="../assets/withstik.png" alt="" srcset="" />
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
			<section class="sec2 flex flex-wrap">
				<div class="inner-wrapper">
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
							<img src="../assets/box2.png" alt="" srcset=""
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
							<img src="../assets/box2.png" alt="" srcset=""
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
							<img src="../assets/box2.png" alt="" srcset=""
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
							<img src="../assets/box2.png" alt="" srcset=""
						/></template>
					</boxes>
				</div>
			</section>
		</div>
	</main>
</template>

<script>
	import dysonVersion from "../components/app-version.cmp.vue";
	import boxes from "../components/app-text-boxes.cmp.vue";
	export default {
		components: {
			dysonVersion,
			boxes,
		},
	};
</script>
