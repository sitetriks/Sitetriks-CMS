const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: {
        // source files

        // common:
        'common/logger': './SiteTriks/StaticFiles/scripts/common/logger.js',
        'common/mediator': './SiteTriks/StaticFiles/scripts/common/mediator.js',

        // modules:
        'grid': './SiteTriks/StaticFiles/scripts/modules/grid.js',

        // sitetriks specific:
        'sitetriks/libraries': './SiteTriks/StaticFiles/scripts/sitetriks/libraries.js',
        'sitetriks/files': './SiteTriks/StaticFiles/scripts/sitetriks/files.js',
        'sitetriks/pages': './SiteTriks/StaticFiles/scripts/sitetriks/pages.js',
        'sitetriks/edit-content': './SiteTriks/StaticFiles/scripts/sitetriks/edit-content.js',
        'sitetriks/templates': './SiteTriks/StaticFiles/scripts/sitetriks/templates.js',
        'sitetriks/dashboard': './SiteTriks/StaticFiles/scripts/sitetriks/dashboard.js',
        'sitetriks/news': './SiteTriks/StaticFiles/scripts/sitetriks/news.js',
        'sitetriks/dashboard-configuration': './SiteTriks/StaticFiles/scripts/sitetriks/dashboard-configuration.js',
        'frontend-layout-scripts': './SiteTriks/StaticFiles/scripts/frontend-layout-scripts.js',
        'sitetriks/users': './SiteTriks/StaticFiles/scripts/sitetriks/users.js',
        'sitetriks/user-groups': './SiteTriks/StaticFiles/scripts/sitetriks/user-groups.js',
        'sitetriks/roles': './SiteTriks/StaticFiles/scripts/sitetriks/roles.js',
        'sitetriks/dynamics': './SiteTriks/StaticFiles/scripts/sitetriks/dynamics.js',
        'sitetriks/extensions': './SiteTriks/StaticFiles/scripts/sitetriks/extensions.js',
        'sitetriks/thumbnailSizes': './SiteTriks/StaticFiles/scripts/sitetriks/thumbnailSizes.js',
        'sitetriks/widget-configuration': './SiteTriks/StaticFiles/scripts/sitetriks/widget-configuration.js',
        'sitetriks/marketing-emails': './SiteTriks/StaticFiles/scripts/sitetriks/marketing-emails.js',
        'sitetriks/blog': './SiteTriks/StaticFiles/scripts/sitetriks/blog.js',
        'sitetriks/helpers': './SiteTriks/StaticFiles/scripts/sitetriks/helpers.js',
        'sitetriks/forum': './SiteTriks/StaticFiles/scripts/sitetriks/forum.js',
        'sitetriks/setup': './SiteTriks/StaticFiles/scripts/sitetriks/setup.js',
        'sitetriks/sitemap': './SiteTriks/StaticFiles/scripts/sitetriks/sitemap.js',
        'sitetriks/smtp-config': './SiteTriks/StaticFiles/scripts/sitetriks/smtp-config.js',
        'sitetriks/storemanager': './SiteTriks/StaticFiles/scripts/sitetriks/storemanager.js',
        'sitetriks/storeitemmanager': './SiteTriks/StaticFiles/scripts/sitetriks/storeitemmanager.js',
        'sitetriks/categorymanager': './SiteTriks/StaticFiles/scripts/sitetriks/categorymanager.js',
        'sitetriks/store-skins': './SiteTriks/StaticFiles/scripts/sitetriks/store-skins.js',
        'sitetriks/documentation': './SiteTriks/StaticFiles/scripts/sitetriks/documentation.js',
        'sitetriks/endpoints': './SiteTriks/StaticFiles/scripts/sitetriks/endpoints.js',
        'sitetriks/languages': './SiteTriks/StaticFiles/scripts/sitetriks/languages.js',
        'sitetriks/sitesync': './SiteTriks/StaticFiles/scripts/sitetriks/sitesync.js',
        'sitetriks/dynamic-views': './SiteTriks/StaticFiles/scripts/sitetriks/dynamic-views.js',
        'sitetriks/layout': './SiteTriks/StaticFiles/scripts/sitetriks/layout.js',
        'sitetriks/permissions': './SiteTriks/StaticFiles/scripts/sitetriks/permissions.js',
        'sitetriks/side-navigation-control': './SiteTriks/StaticFiles/scripts/side-navigation-control.js',

        //Widgets
        'calculator':'./SiteTriks/StaticFiles/scripts/fintech/calculator.js',
        'subscription': './SiteTriks/StaticFiles/scripts/widgets-helpers/subscription.js',
        'manage-profile-index': './SiteTriks/StaticFiles/scripts/manage-profile-index.js',

        //SCSS
        'scss/site': './SiteTriks/StaticFiles/styles/site.scss',
        'scss/front-end-entry': './SiteTriks/StaticFiles/styles/front-end-entry.scss',
        'scss/back-end-entry': './SiteTriks/StaticFiles/styles/back-end-entry.scss',
        'scss/page-builder-preview-entry': './SiteTriks/StaticFiles/styles/page-builder-preview-entry.scss',

        //Separate SCSS not yet categorized
        'scss/ecommerce': './SiteTriks/StaticFiles/styles/ecommerce.scss',
        'scss/extensions': './SiteTriks/StaticFiles/styles/extensions.scss',
        'scss/file-handler': './SiteTriks/StaticFiles/styles/file-handler.scss',
        'scss/forum': './SiteTriks/StaticFiles/styles/forum.scss',
        'scss/grid': './SiteTriks/StaticFiles/styles/grid.scss',
        'scss/st-grid': './SiteTriks/StaticFiles/styles/st-grid.scss',
        'scss/layout': './SiteTriks/StaticFiles/styles/layout.scss',
        'scss/progress-bar': './SiteTriks/StaticFiles/styles/progress-bar.scss',
        'scss/navbar-remove': './SiteTriks/StaticFiles/styles/navbar-remove.scss',
        'scss/page-content-edit': './SiteTriks/StaticFiles/styles/page-content-edit.scss',

        'scss/sitetriks/st-lg-preview': './SiteTriks/StaticFiles/styles/sitetriks/st-lg-preview.scss',
        'scss/sitetriks/st-md-preview': './SiteTriks/StaticFiles/styles/sitetriks/st-md-preview.scss',
        'scss/sitetriks/st-sm-preview': './SiteTriks/StaticFiles/styles/sitetriks/st-sm-preview.scss',
        'scss/sitetriks/st-xs-preview': './SiteTriks/StaticFiles/styles/sitetriks/st-xs-preview.scss',



        'bundle': './SiteTriks/StaticFiles/scripts/bundle.js'
    },
    resolve: {
        modules: [
            path.resolve('./SiteTriks/StaticFiles/scripts'),
            path.resolve('./node_modules')
        ],
        // file extensions
        extensions: ['.js']
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: [/node_modules/],
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        },
        {
            test: /\.scss$/,
            use: [
                {
                    loader: 'file-loader',
                    //options: {
                    //    name: 'css/scss/[name].css'
                    //}
                },
                {
                    loader: 'extract-loader'
                },
                {
                    loader: 'css-loader?-url'
                },
                {
                    loader: 'sass-loader',
                    options: {
                        implementation: require("sass")
                    }
                }
            ]
        },
        {
            test: require.resolve('jquery'),
            use: [{
                loader: 'expose-loader',
                options: 'jQuery'
            }, {
                loader: 'expose-loader',
                options: '$'
            }]
        },
        {
            test: /\.(sa|sc|c)ss$/,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: '/css/'
                    }
                },
                {
                    loader: 'css-loader',
                    options: { url: false }
                },
                {
                    loader: 'sass-loader',
                    options: {
                        implementation: require("sass")
                    }
                }
            ]
        }]
    },
    optimization: {
        minimizer: [
            // specifying a custom UglifyJsPlugin here to get source maps
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                uglifyOptions: {
                    compress: false,
                    ecma: 6,
                    mangle: true
                },
                sourceMap: true
            })
        ]
    },
    devtool: false,
    plugins: [
        new webpack.SourceMapDevToolPlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: 'css/[id].css'
        })
    ],
    output: {
        // The format for the outputted files
        filename: 'js/[name].js',
        // The output directory "wwwroot/js/"
        path: path.resolve(__dirname, 'SiteTriks/StaticFiles/'),
        publicPath: '/js/'
    }
};