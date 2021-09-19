const blueOceanBody = `
Harmony is a mobile-first group chat app that lets users and their friends stay connected. Users for our app can create chat rooms with multiple text and video channels.
My own personal responsibilities was creating the profile and update profile pages for each user as well as connecting all the individual components together using React Router.
In addition to that, I was the elected as the product manager and was responsibile for keeping in contact with the client that requested this app.
`;

const blueOceanCarosel = `${blueOceanBody}
As product manager, I was tasked to manage a team of 10 software engineers to deliver Harmony App to changing specifications. For example, Harmony App was originally a web app,
but then later on the project specifications changed to a mobile app. On the more technical side, I was tasked to create the profile page and the update profile page for Harmony App.
I did this by using React, and then tied all the pieces of the project (profile page, rooms page, main page, etc) together using React Router.
`;

const puppyRanker = `
This was a solo project where I created a website that would allow users to upload photos of puppies and rank them based on cuteness.
Afterward, the users can click on the scoreboard button to see the current rankings of puppies in the system. In addtion to rankings, MMR ranking and image of each puppy will be shown.
Rankings can be viewed globally or locally. MMR rankings are created using the standard elo-rating system. Users have the option to upload their own photos, or start ranking from the public
database.
`;

const puppyRankerCarosel = `${puppyRanker}
  PuppyRanker was created using React for the front end with MongoDB as the database and connected together using Axios and Express. The MongoDB database stores the rankings and images
  of submmitted pictures of puppies.
`;

const pegasus = `
I worked with a team of engineers to develop a front-end Ecommerce website.
I was responsible for the reviews section of the website which allowed users to write, view, and rate reviews for a given product. The reviews under the reviews section can be organized by
date, recommended, and usefullness while each review contains information about the product, the ratings given to product, whether or not the product was useful, date of the review, username
of reviewer, and any potential response from the seller.
`;

const pegasusCarosel = `${pegasus}
I crated the ratings and reviews section using React and CSS while connecting that to the backend API using Axios and Express.After all parts of the web app was complete, we then deployed
the website to AWS EC2 for all public use. We also implemented a clicker counter, that tracks what a user clicks on during the webpage. This information will be used to get an idea on what
users are most attracted to and use for our web application.
In addition to that, I created the coding style and standards that was agreed upon between my teammates and I to be enforced during code reviews.
`;

const twitterSent = `
This was a solo project where I created an web app that conducts sentiment analysis on a selected user's Twitter Account. The app would scan the user's
tweets and then conduct sentiment analysis to determine if the tweet had positive, negative, or neutral sentiment. The application would then return
this information in the format of a doughnut graph. In addition to that, the application would graph the number of tweets, retweets,and likes in a certain timeframe,
and also display a users most commonly used words in a word cloud.
`;

const twitterSentCarosel = `${twitterSent}
Twitter Sentiment Analysis web application front end is created using React and CSS, and connected to the Twitter API using Axios and Express. The web application uses the Sentiment NPM package
to conduct sentiment analysis, react-chartjs-2 NPM package to graph the number of tweets, likes, and retweets of a user, and react-wordcloud NPM package to create the word cloud of a users most
commonly uses words.
`;

export default {
  blueOceanBody,
  blueOceanCarosel,
  puppyRanker,
  puppyRankerCarosel,
  pegasus,
  pegasusCarosel,
  twitterSent,
  twitterSentCarosel,
};
