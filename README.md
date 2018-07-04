# Star Chart

### Full Stack Project 2 for WDI-025 Boston
### Built by Dan Nissen

## Repositories:
#### API:
The repository for the Star Chart API is hosted on GitHub at the following link: https://github.com/DanNissen/star-chart-api
The deployed API is hosted on Heroku, and can be found at this link: https://star-chart-api.herokuapp.com/
#### Client:
The repository for the Star Chart Client is hosted on GitHub at the following link: https://github.com/DanNissen/star-chart-client
The deployed client is hosted on GitHub Pages, and can be found at this link: https://dannissen.github.io/star-chart-client/

## Application Description
Welcome to Star Chart!  I've built an unconventional Star Chart for you.  Instead of the traditional start chart where you would set your goals, and then use self-discipline to attempt to accomplish these goals, this chart encourages you to end each day with a gratitude exercise of writing what positive accomplishments you've achieved for the day.

In a 2014 Harvard Business Review article by David DeSteno titled, "Gratitude is the New Willpower," they describe a study where using self-discipline to accomplish goals eventually fails, but an alternative way to accomplish goals was using gratitude.  Gratitude can foster long-term thinking and encourage people to go after their goals even when raw self- discipline is exhausted.

This star chart was designed with exactly these types of psychological research in mind.  Happy starring!

## Technologies Used
To build this application I used a wide variety of technologies. The client is built with HTML, CSS (via Sass), and JavaScript. Bootstrap and Handlebars was instumental for building the HTML layout dynamically. JQuery was used for event listening and DOM manipulation, and I used AJAX to communicate with the custom built API. Changes were tracked using git and Github, and the live application hosted on GitHub Pages.

The API was built Using Ruby on Rails to scaffold the resources, and the database is a Postgresql SQL database. Changes were tracked using git and Github, and the live application is hosted on Heroku.

## Problems for Future Iterations
The most critical feature for future versions is to add an additional resource for defining user goals. The vision is that each user can define goals that they would like to accomplish everyday, and when they log in they can simply check if the goal was accomplsihed for that day or not. Additionally, future versions should improve the view of the accomplishments. The goal is to have a calendar view where at first glance all that you can see are the different colored stars for each day and a legend that describes what each color represents.

## Planning and Development Process
The development process started with coming up with the idea for the application. When thinking of ideas I looked for little problems in my life that could be simplified by creating a an application to automate something I already do. I already track my acheivements for the day, so this seemed like a perfect fit.

After the idea was formulated, I started by defining how the database would be structured, and creating wireframes and user stories for the application. The link to the wireframes and ERD is here: https://imgur.com/a/1NWbq0h. The user stories that I formulated are below:

#### User Stories:
* As a user I want to be able to specify what my goal is for sleeping, working out, and eating well.
* As a user I want to be able to view my progress on a calendar.
* As a user I want to add more goals that i can track.
* As a user I want my goals to be distinguishable by symbols or colors I choose.
* As a user i want to be able to be able to edit past accomplishments
