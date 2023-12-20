
# LaserLink

This is the repository for the LaserLink interface prototype.


## Authors

- [@m-kudahl](https://github.com/m-kudahl)
- [@HiwotYitbarek](https://github.com/HiwotYitbarek)
- [@Veteranpit](https://github.com/Veteranpit)
- [@bioe3](https://github.com/bioe3)



## Repository structure
- node_modules  *Folder containing node modules*
- p9
- p9-app                       *Folder containing app*
    - public                *The public folder containing the json files used by the server*
        - alerts.json       *json file storing alerts*
        - door.json *json file storing doorstatus*
        - favicon.ico
        - index.html
        - manifest.json
    - Server.mjs  *This is the express server*
    - src *source folder*
        - components *components folder*
            - Images *Images folder*
                - Account.png *Image file for the user icon in lower left part of the interface*
                - Placeholder.png *Image file for the placeholder image in lower right part of the interface*
            - Sidebar *Folder containing sidebar components*
                - ChangeUser.css
                - ChangeUser.js *Displays text above user image*
                - Sidebar.css
                - Sidebar.js *Displays sidebar in left side of interface*
                - SidebarButtons.css 
                - SidebarButtons.js *Displays nonfunctional buttons in sidebar*
                - Startbutton.js *Displays and manages functionality for the start button*
            - Alertbox.css
            - Alertbox.js *Displays and manages Alertbox functionality*
            - Logo.css
            - Logo.js *Displays logo in bottom right corner of interface*
            - Navbar.css
            - Navbar.js *Displays the navigation bar in the top of interface*
            - Popup.css
            - Popup.js *Displays and manages functionality for popups*
            - Status.css
            - Status.js *Displays and manages functionality for status boxes (only doorstatus)
            - Timeleft.css
            - Timeleft.js *Displays time left box*
        - App.css
        - App.js *Initializes application*
        - index.css
        - index.js *Renders React app*
- .gitignore
- README.md
- package-lock.json
- package.json

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/m-kudahl/p9.git

2. **Install dependencies**

```bash
  cd p9-app
  npm install 
  npm install node-fetch
  npm install express
  npm install cors
```
## Features

- Debug buttons to add new alerts
- Clickable alerts opening popup info box
- Start button functionality 
  - Checks doorstatus and starts if door is locked. If door is unlocked an error alert is added to the alertbox



## Usage

**To run the server** 

In a terminal, navigate to the \p9-app\src\components location and run the following command

```bash
  node server.mjs
```

**To run the React client**

In a terminal, navigate to the \p9-app\ location and run the following command

```bash
npm start
```

Alerts must be removed manually from alerts.json.
