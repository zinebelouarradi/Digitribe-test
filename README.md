<h2> Digitribe technical test</h2>
<h3> backend using Spring Boot </h3>

<h4> Part 1</h4>
<ol>
 
<li>I started with setting up a simple Java back-end application, with Spring Boot,  to expose a REST API with 20 Java objects of the type Personne
  with the following attributes :

    Name 
    First name 
    Age 
    Gender</li>

<li>I then moved to creating a PersonService service that allows to return an arbitrary listof persons.</li>
<li> I created the Controller PersonneController to handle requests coming from the client. That I manually set at the address http://localhost:3000/ that hosts my front end application</li>
<li> I then Set up a ReactJS front-end application that allows to invoke
the back-end service performed, and display the list of objects in a table,
with the possibility of sorting </li>

</ol>

<h4> Part 2</h4>
<ol>
  <li>I Added the embedded H2  database in memory mode</li>
  <li>I Created a sample of the database of 20 objects</li>
  <li>I had to Update PersonService to retrieve the list from H2</li>
  <li>I added tha pagination on the server-side, because it's more practical, allowing a faster initial page load, and it's perfect when we are navigating through a large datasets. I finally implemeneted my backend pagination with my front end application</li>
</ol>
<img src="https://github.com/zinebelouarradi/Digitribe-test/blob/main/Capture.PNG?raw=true"></img>


