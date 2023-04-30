const links = [{
  label: 'Home',
  route: '/'
}, {
  label: 'Git user',
  route: '/Git user'
}]


import './../styles/globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
        <title>Programming IV - Firts test</title>
      </head>
      <body>

        <header>
          <nav class="navbar navbar-inverse">
            <div class="container-fluid">
              <div class="navbar-header">
                <a class="navbar-brand" href="#home">My Porfolio</a>
              </div>
              <ul class="nav navbar-nav">
                <li class="active"><a href="#porfo">Home</a></li>
                <li><a href="#git">Git user</a></li>
                <li><a href="#link">Linkedin</a></li>
                <li><a href="#oter">Others</a></li>
              </ul>
            </div>
          </nav>
        </header>

        <button type="button" class="btn btn-primary">Search</button>
        {children}
      </body>
    </html>
  )
}
