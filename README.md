<h2> Digitribe technical test</h2>


<h4> Part 1</h4>

<ol>
 <h3> Backend using Spring Boot </h3>
<li>I started with setting up a simple Spring Boot  application, and java class Personne
  with the following attributes :

    Name 
    First name 
    Age 
    Gender

<li>I then moved to creating a Person JpaRepository, as well as a PersonService, that allows returning an arbitrary list of people. </li>
<li> I created the Controller PersonneController to handle requests coming from the client, that I manually set at the address http://localhost:3000/ that locally hosts the client</li>
<h3> Front end using React </h3>
<li> I then set up a ReactJS front-end application to call my Spring Boot API and display the fetched data with the possibility of sorting (Ascending and descending order).
 I created:
 
 3 Components: 
 PersonCompenent: Main component for displaying data in a table.
 NavigationBar: Simple navigation bar with Digitribe logo.
 Footer: Simple footer.
 
 1 Service:
 PersonneService: An axios-based service to retrieve data  from my REST API, hosted at http://localhost:8080/api/personnes/
 
</li>
</ol>
<h4> Part 2</h4>
<ol>
  <li>I Added the embedded H2  database in memory mode</li>
  <li>I Created a sample of the database of 20 objects</li>
  <li>I had to Update PersonService to retrieve the list from H2</li>
  <li>I added tha pagination on the server-side, because it's more practical, allowing a faster initial page loading, and it's perfect when navigating through a large dataset. I finally modified my frontend application to implement the spring boott allowing users to navigate the table of results.</li>
</ol>

<img src="https://github.com/zinebelouarradi/Digitribe-test/blob/main/Capture.PNG?raw=true"></img>


