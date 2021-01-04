import '../../materialize-custom.scss';
import App from './About2.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

window.app = app;

export default app;