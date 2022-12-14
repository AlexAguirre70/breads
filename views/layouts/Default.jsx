const React = require('react')

function Default(html) {
  return (
    <html>
      <head>
        <title>Default Page</title>
      </head>
      <body>
        <h1>HTML Rendered!</h1>
        <div className="container">
            {html.children}
        </div>
      </body>
    </html>
  )
}

module.exports = Default

