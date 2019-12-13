## Edited by Shenny Yang -2019/9/20 ##

##	<Visual Studio Code> Install extensions
* *	For Vue: `Eno Snippets`, `Omi Snippets`, 
##	1.<Nvm> Install 
* *	Install nvm-windows for windows, using an installer: https://github.com/coreybutler/nvm-windows/releases
		nvm-windows usage: https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows
		nvm usage: https://github.com/nvm-sh/nvm#usage
* *	[Note]: Must <Restart Computer> after New installation or command `yarn run build` will get "node path" error

##	2.Install <Node & Npm>
* *	Install or update to the latest: *** ` nvm install latest ` ***
	` nvm install latest `  //This will installs the latest Node & Npm
		[option]: Istall an old version
	` nvm install 6.10.1 32 ` //usage: nvm install <version> //"32" means a 32 bit version

##	3.<Nvm> On
* *	Start Node & Npm: *** ` nvm on ` ***

##	<Yarn> Install: https://yarnpkg.com/latest.msi
* *	Test Yarn is installed by running: *** ` yarn --version ` ***
* *	Check Yarn version: `yarn -V` Upgrade Yarn all packages: `yarn upgrade`
* *	To update new version of Yarn (1): `npm i -g yarn` and restart the VS Code
* *	To update new version of Yarn (2): `curl --compressed -o- -L https://yarnpkg.com/install.sh | bash` and restart the VS Code

##	<Vue Cli> Create new project: 
* *	`https://vuetifyjs.com/zh-Hans/getting-started/quick-start`
* *	Check Vue version: *** `vue -V` or `vue --version` ***
* *	Install Vue Cli just one time if needed: *** `yarn global add @vue/cli @vue/cli-service-global` ***
* *	Create new Vue project in target directory:
	1. *** `vue create template` *** //`template` means the project name
		Skip prompts and use default preset: *** `vue create -d` *** 
		App running at:
	- Local:   ` http://localhost:8080/ `
	- Network: ` http://192.168.101.67:8080/ `
* *	Get started with the following commands:
	2. Change to project directory: *** ` cd template ` ***
* *	Install Vuetify:
	3. *** `vue add vuetify lru-cache` ***
		Once Vuetify has been installed, create a folder within the sub directory named [plugins] of the src directory. Add a [vuetify.js] file in the [plugins] directory. It is where we will handle all of our bootstrapping and setup of Vuetify for your project.
	4. Install packages: *** `yarn add @mdi/font @mdi/js @fortawesome/fontawesome-free @fortawesome/fontawesome-svg-core @fortawesome/vue-fontawesome @fortawesome/free-solid-svg-icons @fortawesome/free-brands-svg-icons @fortawesome/free-regular-svg-icons -D` ***
		and if needed: (*** `yarn add sass-loader sass -D` *** //`-D` the same as `--dev`)
* *	Note that the development build is not optimized in webpack.
	5. To develop: ***  ` yarn serve ` ***
		TO create a production build: *** `yarn build` ***
		*** `yarn build --no-clean` *** //Disable removing 'dist' directory before building, same as `vue-cli-service build --no-clean`
		*** `yarn build --modern` *** //This will produce two versions of your app: one modern `smaller` bundle targeting modern browsers that support ES modules, and one legacy bundle targeting older browsers that do not.

##	<Node.js> Eslint: To disable “unexpected console statement” in Node.js
* *	Open package.json and under section eslintConfig put no-console under rules and restart dev server
		"eslintConfig": {
			"rules": {
				"no-console": "off"
			},
		}


##	<Vuetify Custom>
* *	1. Color: `vuetify/src/styles/generic/_colors.scss`

##	<Yarn> Create new project if needed, or ignore this step
1.	Starting a new project: *** ` yarn init -y ` ***
	` yarn init ` //Creating <package.json>
	` yarn init -y ` //Creating <package.json> with default value

2.	Adding dependencies: *** `yarn add uikit tailwindcss` and `yarn add webpack webpack-cli webpack-dev-server webpack-dev-middleware webpack-merge style-loader css-loader postcss-loader sass-loader node-sass autoprefixer-loader file-loader url-loader html-loader html-webpack-plugin clean-webpack-plugin mini-css-extract-plugin optimize-css-assets-webpack-plugin babel-loader @babel/core @babel/preset-env @babel/plugin-syntax-dynamic-import vue-loader vue-template-compiler @fortawesome/fontawesome-free --dev` ***
***	` vue --version ` *** //Check Vue-cli version

* * <devDependencies>(開發依賴) is used to save the package for development/test purpose. <dependencies>(運行依賴) is used to save the package required for the application to run.
	` yarn add [package] `
	` yarn add [package]@[version] `
	` yarn add [package]@[tag] `

3.	Adding devDependencies, peerDependencies, and optionalDependencies respectively:
	` yarn add [package] --dev `
	` yarn add [package] --peer `
	` yarn add [package] --optional `

4.	Upgrading all dependencies: *** ` yarn ` or ` yarn upgrade ` ***
	` yarn upgrade ` //will upgrade all packages
	` yarn upgrade --latest ` //will upgrade all packages and the version specified by the latest tag will be used (potentially upgrading the packages across major versions).
	` yarn upgrade [package] `
	` yarn upgrade [package]@[version] `
	` yarn upgrade [package]@[tag] `

5.	Removing a dependency
	` yarn remove [package] `

6.	Installing all dependencies: *** ` yarn ` or ` yarn install ` ***

##	Webpack
1.	To run the local installation of webpack (Guide: https://webpack.js.org/guides/getting-started/)
		(Note: Installing Webpack "globally" is not a recommended practice. Installing globally locks you down to a specific version of webpack and could fail in projects that use a different version.)
	` yarn add webpack webpack-cli --dev ` //The 'cli' means command line interface. It's the same as below:
	` yarn add webpack --dev ` and ` yarn add webpack-cli --dev `

2.	Output main.js: Using the <command-line> (CLI)
	` yarn run webpack ` // For using npm v5.2.0 or greater, which will take our script at <src/index.js> as the entry point, and will generate <dist/main.js> as the output

3.	NPM Scripts: This is much more efficient than having to manually type in a lot of commands in the terminal
* *	1.	<webpack-Watch-Mode>: This will start webpack's Watch Mode
		The only downside is that you have to refresh your browser in order to see the changes. Add a script in <package.json> then run:
  ` "scripts": {"watch": "webpack --watch"} `
	` yarn watch ` or ` yarn run watch `
* *	2.	<webpack-dev-server> & <Enabling-HMR>: This needs to install <webpack-dev-server> and <webpack-dev-middleware> to create local server <localhost:8080>.
		The browser will automatically load up the page. If you now change any of the source files and save them, the web server will automatically reload after the code has been compiled. Add a script in <package.json> then run:
  ` "scripts": {"start": "webpack-dev-server --open --hotOnly"} `
	` yarn start ` or ` yarn run start `
* *	3.	<express-node-server>: This needs to install <express> and <webpack-dev-middleware> to create local server <localhost:3000>
		Also needs to create <server.js> and add a script in <package.json> then run:
  ` "scripts": {"server": "node server.js"} `
	` yarn server ` or ` yarn run server `
4.	<SplitChunksPlugin> for production:
		The SplitChunksPlugin allows us to extract common dependencies into an existing entry chunk or an entirely new chunk.
  ` optimization: {splitChunks: {chunks: 'all',},}, ` //Add script in <webpack.config.js>
* * <Dynamic-Imports>: This allows us to extract common dependencies dynamically. <Babel> & <babel/plugin-syntax-dynamic-import>
* * The first and recommended approach is to use the import() syntax that conforms to the ECMAScript proposal for dynamic imports.
		As import() returns a promise, it can be used with async functions. However, this requires using a pre-processor like Babel and the Syntax Dynamic Import Babel Plugin. Add script in <index.js>
5.	To minify the output:
* *	Use a plugin like <optimize-css-assets-webpack-plugin>. Add scripts in <webpack.config.js>
6.	Finally build production:
  ` "scripts": {"build": "webpack --mode production"} ` //Add script in <package.json>, then run:
  ` "scripts": {"build": "webpack --config webpack.prod.js"} ` //Compare above two scripts
	` yarn build ` or ` yarn run build `