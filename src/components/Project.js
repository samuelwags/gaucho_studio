import React from 'react';

class Project extends React.Component {
    constructor() {
        super();
        this.projectEl = React.createRef();
    }

    componentDidMount() {
        let requestSize = Math.ceil(this.projectEl.current.offsetWidth / 250) * 250;
        this.setState({componentWidth: requestSize});
    }

    state = {
        show: false,
        componentWidth: 0,
    }

    handleLoad = () => {
        this.setState({show: true});
    }

    render() {
        const {title, role, collaborators, thumbnail} = this.props.project;

        return (
            <div className={this.state.show ? "project" : "project hide"} ref={this.projectEl}>
                {this.state.componentWidth > 0 ? 
                    <img 
                        onLoad={this.handleLoad} 
                        alt={"screencapture of website for" + {title}} 
                        className="thumbnail" 
                        src={thumbnail.asset.url + `?w=${this.state.componentWidth}`} 
                    />
                : null }
                <h2>{title}</h2>
                <p>{role}</p>
                <p>{collaborators}</p>
            </div>
        )
    }
}

export default Project;