// import 'materialize-css';
import '../node_modules/materialize-css/dist/css/materialize.css';
import App from './App/App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

window.app = app;

export default app;