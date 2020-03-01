# Fullstack with Rails, React, and Redux

- Create backend with Rails
```
rails _5.2.3_ new my_project_name -G --database=postgresql --skip-turbolinks
```

- Update Gemfile
```
gem 'better_errors'
gem 'binding_of_caller'
gem 'pry-rails'
gem 'annotate'
gem 'bcrypt'
gem 'jquery-rails'
``` 

- run `bundle install`

- update application.js file
```
//= require jquery
//= require rails-ujs
```

- run 'git init' and create .gitignore file and write these codes to prevent from pushing unwanted files
```
node_modules/
bundle.js
bundle.js.map
```

- create a package.json file by running `npm init --yes` and create frontend folder including  actions, reducers, store, util, and components folders

- install frontend frameworks and libraries
```
npm install --save webpack webpack-cli react react-dom react-router-dom redux react-redux @babel/core @babel/preset-react @babel/preset-env babel-loader lodash redux-logger redux-thunk
```
- optionally, if you want to use css-loader, install as follows, which enables to use `import './another-stylesheet.css'`
```
npm install --save-dev css-loader
```

- create 'webpack.config.js' file and set up the entrypoint, output path, and babel transpilation, set up the absolute paths, and include devtool: 'source-map'
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
    extensions: [".js", ".jsx", "*"],
    alias: {
      components: path.resolve(__dirname, "frontend/components"),
      actions: path.resolve(__dirname, "frontend/actions"),
      store: path.resolve(__dirname, "frontend/store"),
      util: path.resolve(__dirname, "frontend/util"),
      reducers: path.resolve(__dirname, "frontend/reducers")
    }
  }
};
```

- set up your entry file (entry_file_name.jsx that correspondes to the entry file in webpack.config.js)
```
import React from "react";
import ReactDOM from "react-dom";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);
});
```
 
## Rails Backend
- set up StaticPagesController with a root view containing 
```
rails g controller StaticPages
```
- inside /app/views/static_pages, create root.html.erb and make a root div
```
<div id="root"></miv>
```

- update routes.rb file with root to static_pages#root
```
root to: 'static_pages#root'
```

### Auth Backend


