// import '../node_modules/materialize-css/dist/css/materialize.css';
// import '../node_modules/materialize-css/sass/materialize.scss';
import '../../materialize-custom.scss';
import App from './Index.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

window.app = app;

export default app;