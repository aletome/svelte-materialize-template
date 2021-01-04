import '../../materialize-custom.scss';
import App from './About1.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

window.app = app;

export default app;