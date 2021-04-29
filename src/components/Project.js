import React from 'react';

class Project extends React.Component {
    

    render() {
        const {title, role, collaborators, thumbnail} = this.props.project;

        return (
            <div class="project">
                <img alt={"screencapture of website for" + {title}} class="thumbnail" src={thumbnail.asset.url} />
                <h2>{title}</h2>
                <p>{role}</p>
                <p>{collaborators}</p>
            </div>
        )
    }
}

export default Project;