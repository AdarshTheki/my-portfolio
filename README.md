# Create React App with the help of Sanity.io backend

## Available Scripts

In the project directory, you can run:
```bash
    npx install create-react-app
    cd my-portfolio
    npm start
    npm run build

    npm i @sanity/client
    cd sanity_project
    sanity build
    sanity start
    npm i @sanity/image-url
    npm i @sanity/block-content-to-react
```
## The function exports a React component 
* This is a React component called `About` that fetches data from a Sanity.io backend using the `client` object imported from "../client.js". It uses the `useEffect` hook to fetch the data when the component mounts, and the `useState` hook to store the fetched data in the `author` state variable. 

* This is a React component that fetches and displays a list of blog posts with their titles and images. @returns This component is returning a list of blog post articles with their titles and main images displayed. Each article is wrapped in a link that leads to the individual blog post page. The data for the posts is fetched from a Sanity.io backend using the `client` object. The fetched data is stored in the `posts` state variable using the `useState` hook and mapped over to display each post using the

* This is a React component that fetches and displays project data from a Sanity.io database. @returns The `Project` component is being returned, which renders a section containing a list of projects fetched from a Sanity.io database. Each project is displayed in an article element with its title, date, place, description, project type, link, and tags. The project title is a link that opens the project in a new tab.

* The function exports a React component that sets up the routing for a website using React Router and renders various components based on the URL path. @returns The App component is being returned, which contains the BrowserRouter, NavBar, and Routes components. The Routes component contains several Route components that define the paths and components to be rendered for each path.

