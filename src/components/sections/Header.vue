<template>
<div class="demo-6 loading">
		<transition
			appear
			@before-enter="beforeEnter"
			@enter="enter"
			:css="false"
		>
        <div class="content">
            <div class="content__drag-area">
					<profile
						v-for="(user,userIndex) in $page.users.edges"
						:key="userIndex"
						:image="user.node.imagen.url"
					/>
            </div>
				<logo/>
        </div>
			</transition>
</div>
</template>

<script>
import '@/static/dragAnimation.js';
import logo from '../ui/logo';
import profile from '../ui/profile'

import gsap from 'gsap'
let masterTL= gsap.timeline()

export default {
	name: 'Header',
	components: {
		logo,
		profile
	},
	methods: {
		beforeEnter(el) {
			el.style.transform='skewX(50deg) skewY(-20deg)'
			// el.style.transform ='scale(0,0)'
		},
		enter(el){
			gsap.to(el, {
				duration:2,
				opacity:1,
				skewX:"0deg",
				skewY:"0deg",
				rotate:"0deg",
				scale:1,
				ease: 'elastic',
			})
		}
	},
};
</script>

<style lang='scss' >
.img-wrap {
	--img-width: 200px;
	--img-height: 270px;
	width: var(--img-width);
	height: var(--img-height);
	position: relative;
	pointer-events: none;
	margin: 4rem;
}

.img-wrap:nth-child(1) {
	margin-top: 30vh;
}

.img-wrap:nth-child(2) {
	margin-top: 0;
}

.img-drag {
	border-radius:8px;
	box-shadow: 12px 2px 35px #00000030;
	position: relative;
	width: 100%;
	height: 100%;
	overflow: hidden;
	opacity: 1;
	pointer-events: auto;
	cursor: grab;
}

.img-drag__inner {
	background-size: cover;
	background-position: 50% 50%;
	width: 100%;
	height: 100%;
}

.img-trail {
	width: var(--img-width);
	height: var(--img-height);
	position: absolute;
	top: 0;
	left: 0;
	opacity: 0;
	mix-blend-mode: color-dodge;
}

.content__title {
	mix-blend-mode: difference;
}

.demo-6 {
	position: sticky;
	margin: 0;
	--color-text: #000;
	--color-link: #594343;
	--color-link-hover: #000;
	color: var(--color-text);
	background-color: #ffff00;
	--font-main: Geneva, Tahoma, Verdana, sans-serif;
	--font-alt: bigmoore, serif;
	--font-weight-alt: 400;
	--color-title: inherit;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	line-height: 1;
}

.demo-6 {
	--color-link: #a17d66;
    --color-bg: #E9BEC8!important;
    --font-alt: bigmoore, serif;
	overflow: hidden;
}


@keyframes loaderAnim {
	to {
		opacity: 1;
		transform: scale3d(0.5,0.5,1);
	}
}

a {
	text-decoration: none;
	color: var(--color-link);
	outline: none;
}

a:hover,
a:focus {
	color: var(--color-link-hover);
	outline: none;
}

.frame {
	padding: 3rem 5vw;
	text-align: center;
	position: relative;
	z-index: 1000;
}

.frame__title {
	font-size: 1rem;
	margin: 0 0 1rem;
	font-weight: inherit;
}

.frame__links {
	display: block;
}

.frame__links a:not(:last-child),
.frame__demos a:not(:last-child) {
	margin: 0 1rem 0.35rem 0;
}

.frame__demos {
	margin: 1rem 0;
}

.frame__demo--current,
.frame__demo--current:hover {
	color: var(--color-text);
}

.frame__initials {
	font-weight: var(--font-weight-alt);
	font-size: 2rem;
	pointer-events: none;
	line-height: 14px;
}

.content {
	display: flex;
	position: relative;
	flex-direction: column;
	height: calc(100vh - 13rem);
	position: relative;
	justify-content: center;
	align-items: center;
}

.content__title {
	font-size: 10vw;
	font-weight: var(--font-weight-alt);
	margin: 0;
	position: relative;
	pointer-events: none;
	z-index: 1000;
	color: var(--color-title);
	text-align: center;
}

.content__title--multiline {
	font-size: 8.5vw;
	line-height: 1.3;
	text-transform: none;
}

.content__title-row {
	display: block;
}

.content__title-row:first-child {
	margin-right: 22vw;
}

.content__title--up {
	text-transform: uppercase;
}

.month {
	font-weight: 700;
	font-size: 4vw;
}

.year {
	font-size: 10vw;
}

.content__drag-area {
	position: absolute;
	max-width: 90vw;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
}

.img-drag,
.img-wrap {
	flex: none;
}

@media screen and (min-width: 53em) {
	.frame {
		position: fixed;
		text-align: left;
		z-index: 10000;
		top: 0;
		left: 0;
		display: grid;
		align-content: space-between;
		width: 100%;
		max-width: none;
		height: 100vh;
		padding: 2.5rem 4rem;
		pointer-events: none;
		grid-template-columns: 40% 20% 40%;
		grid-template-rows: auto auto auto;
		grid-template-areas: 'title initials demos'
							'... ... ...'
							'... ... info';
	}
	.frame__title-wrap {
		grid-area: title;
	}
	.frame__title {
		margin: 0 0 3rem 0;
	}
	.frame__initials {
		grid-area: initials;
		margin: 0;
		justify-self: center;
	    align-self: start;
	}
	.frame__demos {
		margin: 0;
		grid-area: demos;
		justify-self: end;
		align-self: start;
	}
	.frame__links {
		grid-area: links;
		padding: 0;
		justify-self: end;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}
	.frame__info {
		grid-area: info;
		margin: 0;
		justify-self: end;
	}
	.frame a {
		pointer-events: auto;
	}
	.content {
		height: 100vh;
		justify-content: center;
	}
}
.img-wrap {
	--img-width: 200px;
	--img-height: 270px;
	width: var(--img-width);
	height: var(--img-height);
	position: relative;
	pointer-events: none;
	margin: 4rem;
}

.img-wrap:nth-child(1) {
	margin-top: 30vh;
}

.img-wrap:nth-child(2) {
	margin-top: 0;
}

.img-drag {
	position: relative;
	width: 70%;
	height: 70%;
	overflow: hidden;
	opacity: 1;
	pointer-events: auto;
	cursor: grab;
}

.img-drag__inner {
	background-size: cover;
	background-position: 50% 50%;
	width: 100%;
	height: 100%;
}

.img-trail {
	width: var(--img-width);
	height: var(--img-height);
	position: absolute;
	top: 0;
	left: 0;
	opacity: 0;
	mix-blend-mode: color-dodge;
}

.content__title {
	mix-blend-mode: difference;
}

</style>