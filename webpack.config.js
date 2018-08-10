const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    mode:'development',
    entry: './src/index.js',
    output: {
        path:path.resolve(__dirname,'./dist'),
        filename:'bundle.js'
    },
    module:{
        rules:[{
            test:/\.vue$/,
            loader: 'vue-loader'
        },
        {
            test: /\.css$/,
            use: [
              'vue-style-loader',
              'css-loader'
            ]
          },
          {
            test: /\.styl$/,
            use: [
                'style-loader',
              'css-loader',
              'stylus-loader'
            ]
          },
          {
            test:/\.svg$/,
            use :{
                loader:'url-loader',
                options:{
                    limit:'1000'
                }
            }
        },
        {
            test:/\.png$/,
            use :{
                loader:'url-loader',
                options:{
                    limit:'8192'
                }
            }
        },
    ]
    },
    plugins: [
        new VueLoaderPlugin(),
    ]
}