<script>
	export let segment;
	let isOpen = false;
	function toggleNav(){
		isOpen = !isOpen;
	}
</script>

<style>
	@media (min-width: 769px){
		nav{
			border-bottom: solid gray 1px;
		}
	}
</style>

<nav class="navbar" role="navigation" aria-label="main navigation">
	<div class="navbar-brand">
		<a class="navbar-item" href="/" >
			<img src="logo.jpg" alt="virus">		  
		</a>
		<span on:click="{toggleNav}" class:is-active={isOpen} class="navbar-burger" aria-label="menu" aria-expanded="false" >
			<span aria-hidden="true"></span>
			<span aria-hidden="true"></span>
			<span aria-hidden="true"></span>
		</span>
		<div  class="navbar-menu" class:is-active={isOpen}>
			<div class="navbar-start">
			  <a href="/" class="navbar-item" class:is-active={segment === undefined}>Home</a>
			  <a href="/about" class="navbar-item" class:is-active={segment === 'about'}>About</a>
			</div>
	</nav>
