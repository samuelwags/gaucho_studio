import React from 'react';
import Project from './Project';
import './Projects.scss';

class Projects extends React.Component {

    mapProjects = () => {
        return this.props.projects.map( project => {
            return <Project key={project.title} project={project} />
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