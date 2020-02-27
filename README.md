# Fullstack with Rails, React, and Redux

- Create backend with Rails
```
rails _5.2.3_ new my_project_name -G --database=postgresql --skip-turbolinks
```

- Update Gemfile
```
better_errors
binding_of_caller
pry-rails
annotate
bcrypt
jquery-rails 
``` 
- run 'bundle install'

- update application.js file
```
//= require jquery
//= require rails-ujs
```

- run 'git init' and update .gitignore file
```
node_modules/
bundle.js
bundle.js.map
```

- create a package.json file by running 'npm init --yes' and create frontend folder including  actions, reducers, store, util, and components folders

- install frontend frameworks and libraries
```
npm install --save webpack webpack-cli react react-dom react-router-dom redux react-redux @babel/core @babel/preset-react @babel/preset-env babel-loader
```

- create 'webpack.config.js' file and setup the entrypoint, output path, and babel transpilation, and include devtool: 'source-map'
```
const path = require("path");

module.exports = {
  context: __dirname,
  entry: "./frontend/bench_bnb.jsx",
  output: {
    path: path.resolve(__dirname, "app", "assets", "javascripts"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          query: {
            presets: ["@babel/env", "@babel/react"]
          }
        }
      }
    ]
  },
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx", "*"]
  }
};

```
 
