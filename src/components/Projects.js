import React from 'react';
import Project from './Project';
import './Projects.css';

class Projects extends React.Component {

    mapProjects = () => {
        return this.props.projects.map( project => {
            return <Project project={project} />
        });
    }

    render() {
        return (
            <div className="projects">
                {this.mapProjects()}
            </div>
        );
    }
}

export default Projects;