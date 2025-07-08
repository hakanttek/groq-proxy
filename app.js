var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var groqRouter = require('./routes/groq').default;
var searchRouter = require('./routes/search').default;
var customerRouter = require('./routes/customer').default;

var app = express();

const allowedOrigins = [
  'http://localhost:' + process.env.PORT || 3000,
  process.env.ALLOWED_ORIGIN || 'https://lead-genie.onrender.com',
];

const cors = require('cors');

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));

const { swaggerUi, specs } = require('./swagger');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/groq', groqRouter);
app.use('/api/search', searchRouter);
app.use('/api/customer', customerRouter);

// 404 Not Found Middleware
app.use(function (req, res, next) {
  res.status(404).json({
    error: 'Not Found',
    message: `Cannot ${req.method} ${req.originalUrl}`,
  });
});

// Global Error Handling Middleware
app.use(function (err, req, res, next) {
  console.error('Error stack trace:', err.stack);
  res.status(err.status || 500).json({
    error: 'Server Error',
    message: err.message || 'An unexpected error occurred.',
  });
});

module.exports = app;
