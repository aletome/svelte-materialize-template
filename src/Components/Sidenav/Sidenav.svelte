<script>
	import { onMount } from 'svelte';
	import M from 'materialize-css';

	onMount(async () => {
		document.addEventListener('DOMContentLoaded', function () {
			const elem = document.getElementById('slide-out');
			const instance = M.Sidenav.init(elem, {});
		});
	});
</script>

<nav>
	<div class="nav-wrapper">
		<a href="#!" data-target="slide-out" class="sidenav-trigger show-on-large">
			<i class="material-icons">menu</i></a>
		<a href="#!" class="brand-logo">Logo</a>
	</div>
</nav>

<ul id="slide-out" class="sidenav">
	<li>
		<div class="user-view">
			<div class="background">
				<img src="images/office.jpg" alt="">
			</div>
			<a href="#!"><i class="medium material-icons grey-text lighten-2">account_circle</i></a>
			<a href="#!"><span class="name">John Doe</span></a>
			<a href="#!"><span class="email">jdandturk@gmail.com</span></a>
		</div>
	</li>
	<li><a href="about1.html" class="waves-effect"><i class="material-icons">cloud</i>About 1</a></li>
	<li><a href="about2.html" class="waves-effect">About 2</a></li>
	<li>
		<div class="divider"></div>
	</li>
	<li><a href="#!" class="subheader">Settings</a></li>
	<li><a class="waves-effect" href="#!">Link With Waves</a></li>
</ul>
