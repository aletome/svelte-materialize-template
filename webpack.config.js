const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PurgeCSSPlugin = require('purgecss-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const glob = require('glob');
const path = require('path');

const mode = process.env.NODE_ENV || 'development';
const prod = mode === 'production';
const PATHS = {
	src: path.join(__dirname, 'src')
}

const getWebPackPages = () => {
	let entries = {};
	let plugins = [];
	const pages = glob.sync(`${PATHS.src}/Pages/**/main.js`,  { nodir: true });
	pages.forEach((page) => {
		const pageName = page.match(/(\/Pages\/)(\w+)(\/main\.js)/)[2];
		entries[pageName] = [page];
		plugins.push(new HtmlWebpackPlugin({
			template: `${PATHS.src}/template.ejs`,
			chunks: [pageName],
			filename: `${pageName.toLowerCase()}.html`
		}));
	});
	return { entries, plugins };
}

const pages = getWebPackPages();


module.exports = {
	entry: pages.entries,
	resolve: {
		alias: {
			svelte: path.resolve('node_modules', 'svelte')
		},
		extensions: ['.mjs', '.js', '.svelte', 'scss'],
		mainFields: ['svelte', 'browser', 'module', 'main']
	},
	output: {
		path: __dirname + '/public',
		filename: '[name]-[contenthash].js',
		chunkFilename: '[name].[id].js'
	},
	module: {
		rules: [
			{
				test: /\.(html|svelte)$/,
				exclude: /node_modules/,
				use: {
					loader: 'svelte-loader',
					options: {
						// emitCss: true,
						hotReload: true
					}
				}
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
				  // Creates `style` nodes from JS strings
				  "style-loader",
				  // Translates CSS into CommonJS
				  "css-loader",
				  // Compiles Sass to CSS
				  "sass-loader",
				],
			},
			{
				test: /\.css$/,
				use: [
					/**
					 * MiniCssExtractPlugin doesn't support HMR.
					 * For developing, use 'style-loader' instead.
					 * */
					prod ? MiniCssExtractPlugin.loader : 'style-loader',
					'css-loader'
				]
			}
		]
	},
	mode,
	plugins: [
		new CleanWebpackPlugin(),
		new CopyPlugin({
			patterns: [
			  { from: `${PATHS.src}/favicon.png`, to: 'favicon.png' },
			  { from: `${PATHS.src}/global.css`, to: 'global.css' },
			],
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css'
		}),
		new PurgeCSSPlugin({
			paths: glob.sync(`${PATHS.src}/**/*`,  { nodir: true }),
		})
	].concat(pages.plugins),
	devtool: prod ? false: 'source-map',
	optimization: {
		splitChunks: {
		  maxSize: 20000
		}
	}
};
