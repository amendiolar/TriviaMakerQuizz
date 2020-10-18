
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    module:{
        rules:[ // Aqui se cargan todos los loaders para que webpack trabaje
            {
                test: /\.html$/, // expresion regular ---> busca todos los archivos que terminen en .html
                use: [
                    {
                        loader: "html-loader", // Este va a traducir todo el html para que webpack lo entienda
                        options: {minimize:true}
                    }
                ]
                //test ---> que tengo que buscar
                //use ---> de lo que encontre que loader voy a aplicar
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: "babel-loader"
                }
            },
            {
                test: /\.scss$/,
                use: [ //En loaders el orden si importa
                    "style-loader", // Procesa estilos en line
                    "css-loader", // Procesa estilos en archivos css
                    "sass-loader" // procesa estilos en archivos scss (sass)
                ]
            },
            {
                test: /\.(png|jpg|svg|gif|jpeg)$/,
                use:[
                    'file-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template:"./src/index.html", //Que archivo de html va a ser el base para el proyecto
            filename:"./index.html"// Que unico archivo de html se va a generar
        }),
        new MiniCssExtractPlugin({ // es opcional, pero es una buena practica
            
            filename:"[name].css", 
            chunkFilename: "[id].css" // solo es el caso si hay mucho css o hay muchas lineas de css
        })
        
    ]
}

