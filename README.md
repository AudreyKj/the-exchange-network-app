# React exchange network app

React app themed around the idea of exchange: users can post messages in an "Exchange" section to exchange languages, skills, or services with other people. Users can decide wether their posts should be visible to
all the users (public) or only visible to their friends (private).

[visit live app](https://the-exchange-network.herokuapp.com/)

## Features

- register/login (password hashed with bcrypt)
- change profile picture
- edit bio
- search & find other users
- make friends
- chat made with socket.io
- post messages in Exchange section (private or public option)
- logout
- delete account and all associated info

## Tech

**Stack**: HTML, CSS, JavaScript, Three.js, Node.js, React, Redux, PostgreSQL, socket.io<br />
**Protection**: CSURF <br />
**Storage**: AWS in dev | Cloudinary in prod <br />
**Testing**: React Testing Library + Jest <br />
**Deployment**: Heroku

## Future improvements

- Automate sending of emails so that users can change their password.
- Improve chat

## Design - color palette

<p align="center">
<img width="150" height="250" src="readMe/palette.jpg">
<p align="center">
black, #333333 </br>
blue, #00909e </br>
light grey, #d6d6d6 </br>
grey, #aaaaaa </br>
</p>
</p>

## Visuals

![screenshot](readMe/screenshot_1.png)
![screenshot](readMe/screenshot_4.png)
![screenshot](readMe/screenshot_5.png)

<p align="center">
<img width="300" height="614" src="readMe/mobile.png">
</p>
<p align="center">
<img width="300" height="606" src="readMe/mobile2.png">
</p>
