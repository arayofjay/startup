# startup
CS 260 startup project

## Startup Deliverable - Let's Go!

### Elevator pitch

I have always been the friend in a group that has to plan hang outs, movie night, or any group activity. But it is always a hassle to get everyone on the same page. I usually have to text people individually to get their availabilit, or I would have to use a calendar like Outlook or Google, but honestly that stuff is already just cluttered with school or work things. So my app, Let's Go!, is a calendar app that simplifies the process of making plans and inviting people to them. This makes making plans hassle free, and with it, you will have a calendar full of fun for you and all your friends and family at just a push of a button.

### Design 

I want to use an application design that is simple, easy to use, and not too cluttered.

![home-screen](images/home-screen.png)

This shows the initial screen one would come across with opening the application. It includes the calendar, the options to create new events and groups, join a group, and other settings.

![other-screens](images/other-screens.png)

Here are the other screens I plan to implement with the application, from settings, to seeing event details. There may be some parts that I may be currently neglecting, or oversimplifying, but this is the jist of what the app will look like when navigating it.

### Key features

- HTTPS for secure login
- Ability to create groups for certain events, and everyone in that group will be notified of the event
- No email required, just a phone number
- Ability for everyone invited to an event to mark whether they are going, are not able to go, or are possibly going
- Everyone else can see who else is coming to the event
- Ability to turn notifications of events on and off
- Ability to see everyone in the group and invite others to group
- Easily add multiple groups to events, and multiple people to groups
- Events, groups, and people are persistent

### Technologies

I am using the following required technologies and method in order to implement the application:

- **HTML** - Uses correct HTML structure for application. Will need at least 5 HTML pages for certain parts of the application. Namely viewing the calendar, event details, group details, login screen, settings menu, etc.
- **CSS** - Application styling that looks good on different screen sizes, uses good whitespace, color choice and contrast.
- **JavaScript** - Provides login, event display, group display, handles user status for events, displays user status' for an event, backend endpoint calls.
- **Service** - Backend service with endpoints for:
  - login
  - creating events
  - creating groups
  - retrieving events, and invitee status'
  - retrieving groups
- **DB** - Store users, events, and groups in database.
- **Login** - Register and login users. Credentials securely stored in database. Can't see event unless authenticated.
- **WebSocket** - When you update you status for an event, all other invitees can see your status.
- **React** - Application ported to use the React web framework.

### Optional features

These are features that I have not currently planned to implement in my application, but I would like to if time permits

- Application background picture that changes according to what group you are seeing events for
- Implement a way that the application will send SMS notifications instead of just app notifications
- Dark mode

## HTML Deliverable

- **HTML pages** - Added 8 pages for each part of the web application (settings, login, calendar, etc)
- **Links** - Pages link together in meaningful way, and everything links backs to the home page as well
- **Text** - Text for buttons, text inputs, and header/footers
- **Images** - Using an image as a placholder, but will not be in final application
- **Login** - Login page set, and text inputs areas set
- **Database** - Haven't attached any DB to application
- **WebSocket** - Haven't done any Websocket programming yet

## CSS Deliverable

For this deliverable, I added CSS for these parts of my application:

- **Header, footer, and main content body** - Consistent formatting, colors, and functionality
- **Navigation elements** - Better styling for buttons, switches, and text input areas. Also, formatted these elements on the page in a more organized way.
- **Responsive to window resizing** - Able to resize the window without making any content inaccessible.
- **Application elements** - Have everything except the Calendar itself. Still need to fix that, or just make it into an accordian style dropdown list with the different events instead.
- **Application text content** - Consistent fonts, but may need to change some of the header texts to make it look better. Also need to change footer text formatting
- **Application images** - I have an image, but just as a placeholder, so I do not feel the need to really do anything with it.

## JavaScript Deliverable
