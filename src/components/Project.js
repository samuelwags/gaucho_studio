import { getByTitle } from '@testing-library/dom';
import React from 'react';

const imageAPI = "https://cdn.sanity.io/images/tfzftnd4/production/";

class Project extends React.Component {
    

    render() {
        const {title, role, collaborators, thumbnail} = this.props.project;

        return (
            <div class="project">
                <img class="thumbnail" src={thumbnail.asset.url} />
                <h2>{title}</h2>
                <p>{role}</p>
                <p>{collaborators}</p>
            </div>
        )
    }
}

export default Project;