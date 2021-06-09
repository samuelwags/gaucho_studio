import React from 'react';
import ReactDOM from 'react-dom';
import sanityClient from '@sanity/client';
import './Global.scss';

import Projects from './components/Projects';
import About from './components/About';

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
        this.getAbout();
    }

    state = {
        projects: [],
        aboutContent: [],
        about: false,
        alignTop: true
    }

    // componentDidMount() {
    //     window.addEventListener('wheel', this.watchScroll);
    // }

    getProjects = async () => {
        const query = '*[_type == "project"]{title, role, collaborators, thumbnail{asset->}}';
        try {
            const response = await client.fetch(query);
            this.setState({
                projects: response
            });
        } catch {
            console.log("error");
        }
    }

    getAbout = async () => {
        const query = '*[_type == "page" && title == "About"]{...}';
        try {
            const response = await client.fetch(query);
            this.setState({
                aboutContent: response[0].content
            });
        } catch {
            console.log("error fetching about");
        }
    }

    // toggleAbout = (newAbout = !this.state.about) => {
    //     if (newAbout && this.state.alignTop) {
    //         this.setState({about: newAbout, alignTop: false});
    //     } else if (!newAbout && this.state.alignTop) {
    //         this.setState({about: newAbout, alignTop: false})
    //     } else {
    //         this.setState({about: newAbout});
    //     }
    // }

    // toggleTopAlign = (newAlignTop = !this.state.alignTop) => {
    //     this.setState({alignTop: newAlignTop});
    // }

    // watchScroll = (event) => {
    //     if (event.deltaY > 0) {
    //         this.setState({alignTop: false});
    //     } else {
    //         this.setState({alignTop: true});
    //     }
    // }

    render() {
        return (
            <div className="content">
                <About aboutContent={this.state.aboutContent}/>
                <Projects projects={this.state.projects} />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector("#root")
)