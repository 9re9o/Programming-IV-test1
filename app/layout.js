const links = [{
  label: 'Home',
  route: '/'
}, {
  label: 'Git user',
  route: '/GitUser'
}]


import Link from 'next/link'
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
                <a class="navbar-brand" href="/">My Porfolio</a>
              </div>
              <ul class="nav navbar-nav">
                {links.map(({label, route}) => (
                  <li key={route}>
                    <Link href={route}>
                      {label}
                    </Link>
                  </li>
                ))}

                <li><a href="Linkedin">Linkedin</a></li>
                
              </ul>
            </div>
          </nav>
        </header>
        
        {children}
      </body>
    </html>
  )
}
