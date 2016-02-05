module.exports = {
    environments: ['dev', 'localqa', 'qa', 'production', 'test'],
    appFiles: {
        js: ['./src/app/**/*.js', './src/configs/**/*.js', './src/templates/**/*.js', '!./src/app/**/*.spec.js'],
        css: './src/app/**/*.css',
        less: './src/styles/main.less',
        html: ['./src/app/**/*.html'],
        index: './src/index.html',
        images: './src/images/**/*.*',
        fonts: ['./src/fonts/**/*.*'],
        constants: './src/configs/constants.json',
        favicon: './src/favicon.ico',
        staticFiles: ['./web.config', '.src/unsupported-browser.html'],
        bowerRoot: './bower_components'
    },
    vendorFiles: {
        js: [
        ],
        css: [
        ]
    },
    taskFiles: {
        jshint: ['./src/app/**/*.js']
    },
    buildFiles: ['./build/**/*.*', './build/*', './src/configs/*.js', './src/templates'],
    outputPaths: {
        js: './build/scripts',
        css: './build/css',
        fonts: './build/fonts',
        images: './build/images',
        root: './build',
        constants: './src/configs',
        templates: './src/templates',
        injectIgnoreString: '/build'
    },
    names: {
        mainModule: 'angular-seed',
        templatesModule: 'angular-seed.templates',
        constantsModule: 'angular-seed.constants',
        templatesFile: 'templates.js',
        output: {
            appCss: 'build.css',
            vendorCss: 'vendor.css',
            appJs: 'build.js',
            vendorJs: 'vendor.js'
        }
    },
    watch: {
        less: './src/styles/**/*.less',
        js: ['./src/app/**/*.js', '!./src/app/**/*.spec.js'],
        images: './src/images/**/*.{svg,png,jpg,jpeg,webp,gif}',
        html: './src/app/**/*.html',
        index: './src/index.html',
        constants: './src/configs/constants.json'
    }
};
