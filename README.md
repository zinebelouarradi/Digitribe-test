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
<li> I created the Controller PersonneController to handle requests coming from the client, that I manually set at the address <a href="url">http://localhost:3000/</a> that locally hosts the client</li>
<h3> Front end using React </h3>
<li> I then set up a ReactJS front-end application to call my Spring Boot API and display the fetched data with the possibility of sorting (Ascending and descending order).
 I created:
 
 Three Components:<br/>
 <br/>
 <b>PersonCompenent:</b> Main component for displaying data in a table.<br/>
 <b>NavigationBar:</b> Simple navigation bar with Digitribe logo.<br/>
 <b>Footer:</b> Simple footer.<br/>
 
 One Service:<br/>
 <br/>
 <b>PersonneService:</b> An axios-based service to retrieve data  from my REST API, hosted at http://localhost:8080/api/personnes/<br/>
 
</li>
</ol>
<h4> Part 2</h4>
<ol>
  <li>I Added the embedded H2  database in memory mode</li>

The Spring project was initialized with a H2 database dependency. Spring Boot was then configured to connect the application to the in-memory database (via acting on the <i>application.properties</i> file)

<img src="https://github.com/zinebelouarradi/Digitribe-test/blob/main/Capture2.PNG?raw=true"></img>
 
  <li>I Created a sample of the database of 20 objects, stored under data.sql in <i>src/main/resources</i>, which can also be accessed and modified via the H2 console</li>

  <li>When working on pagination, I opted for server-side pagination because it's more practical, allowing a faster initial page loading, and it could be perfect for large datasets. The front-end application was eventually modified to implement the server-side pagination, allowing users to navigate the table of Personnes.</li>
</ol>

<img src="https://github.com/zinebelouarradi/Digitribe-test/blob/main/Capture.PNG?raw=true"></img>


