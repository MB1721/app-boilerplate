const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const dotenv = require('dotenv');

// set up application-level middleware
const app = express();
app.use(express.json());

const mode = process.argv[2];
// configure deveopment or production environment
if (mode === 'development') { // use webpack development middleware
  const webpackConfig = require('./views/site/webpack.dev.js');
  const compiler = webpack(webpackConfig);
  const publicPath = webpackConfig.output.publicPath;
  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: publicPath,
    })
  );
} else if (mode === 'production') dotenv.config();

// require routers
const { siteRouter } = require('./routes/index.js');

// set up siteRouter 
app.use(express.static(siteRouter.static));

app.use('/', siteRouter.router);

// configure host variables
const { PORT: port = 5670, HOST: host = 'localhost', PROTOCOL: protocol = 'http' } = process.env;

app.listen(port, host, () => console.log(`App listening on ${protocol}://${host}:${port}\n`));
