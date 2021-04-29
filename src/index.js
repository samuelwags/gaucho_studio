import React from 'react';
import ReactDOM from 'react-dom';
import sanityClient from '@sanity/client';
import './Global.css';

import Projects from './components/Projects';
import Header from './components/Header';

const client = sanityClient({
    projectId: 'tfzftnd4',
    dataset: 'production',
    apiVersion: '2020-04-20',
    token: '',
    useCdn: true,
});

class App extends React.Component {
    constructor() {
        super();
        this.getProjects();
    }

    state = {
        projects: []
    }

    getProjects = async () => {
        const query = '*[_type == "project"]{title, role, collaborators, thumbnail{asset->}}';
        try {
            const response = await client.fetch(query);
            console.log(response);
            this.setState({
                projects: response
            });
        } catch {
            console.log("error");
        }
    }

    render() {
        return (
            <div>
                <Header />
                <Projects projects={this.state.projects} />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector("#root")
)