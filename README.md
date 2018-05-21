1) To develope the web app firstly install the react through below commands::

npx create-react-app my-first-router

cd my-first-router

and then npm start

2) afterthat install the react-router-dom:

npm install --save react-router-dom

3) afterthat install the react-bootstrap to get the better UI.

npm install --save react-bootstrap

4) dump the Bootstrap CSS into main file.

Public > index.html

5)


Imp ::

 activeStyle = {{color:'red'}} // only we can append the css not class

activeClassName = 'active-name' // active class style you can append

Nav element should only have NavItem in bootstrap else it throws a warning.


Home::

-> images uploaded on server imgur.com
-> if you don't want to upload these images on server and dump it into public > images > imgname...
-> don't put all the carausel data at same place..
-> make the chunks of code by which you could apply a map function over that
-> here we used 'uuid' to generate the random id
-> To comment in JSX use /* ... */, but it should be inside curly brackets{}.
-> if working with inline css then always use camelCase css like style={{width:'400px', lineHeight:'30px'}}
->AnotherWay to use the css
const bgCs = {
  
  // css code goes here
}
and you can call it through style={bgCs}


404 page not found::

-> warp all the routes into the Switch tag and import Switch.
-> Create the route without the path and only pass the component here which you want to show.

Sign in/Sign out::







About Us::

-> To create the Parallax on about us page, install react-parallax
-> follow the instructions from parallax document


Normailze.css::

->To reset the css use normalize.css
npm install --save normalize.css

We don't required normailze.css,  if we're working with boostrap






