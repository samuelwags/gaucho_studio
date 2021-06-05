import React from 'react';
import blocksToHtml from '@sanity/block-content-to-html';
import parse from 'html-react-parser';
import GauchoSVG from './GauchoSVG';

class About extends React.Component {
    constructor() {
        super();
        this.colorDeltas = {
            r: 5,
            g: 5,
            b: 5,
        }
        this.colorCycles = {
            r: 5,    
            g: 10,
            b: 15,
        }
    }

    state = {
        color: {
            r: 255,
            g: 255,
            b: 255,
        },
    }

    componentDidMount() {
        this.interval = setInterval(
            this.mutateColor,
            100
        );
    }

    checkTransitionEnd = (rgbCycles) => {
        if (rgbCycles.r === 0) {
            let newDestination = Math.floor(Math.random() * 255);
            let steps = Math.floor(Math.random() * 30) + 20;
            let difference = newDestination - this.state.color.r;
            this.colorDeltas.r = difference / steps;
            this.colorCycles.r = steps;
            console.log("r new transition")
        }
        if (rgbCycles.g === 0) {
            let newDestination = Math.floor(Math.random() * 255);
            let steps = Math.floor(Math.random() * 30) + 20;
            let difference = newDestination - this.state.color.g;
            this.colorDeltas.g = difference / steps;
            this.colorCycles.g = steps;
            console.log("g new transition")
        }
        if (rgbCycles.b === 0) {
            let newDestination = Math.floor(Math.random() * 255);
            let steps = Math.floor(Math.random() * 30) + 20;
            let difference = newDestination - this.state.color.b;
            this.colorDeltas.b = difference / steps;
            this.colorCycles.b = steps;
            console.log("b new transition")
        }

        return true;
    }

    mutateColor = () => {
        if (this.checkTransitionEnd(this.colorCycles)) {
            this.setState({
                color: {
                    r: this.state.color.r + this.colorDeltas.r,
                    g: this.state.color.g + this.colorDeltas.g,
                    b: this.state.color.b + this.colorDeltas.b,
                },
            });
            this.colorCycles = {
                r: this.colorCycles.r - 1,
                g: this.colorCycles.g - 1,
                b: this.colorCycles.b - 1,
            }
        }
    }

    mapRichText = (blocks) => {
        let string = blocksToHtml({
            blocks: blocks
        });
        return string;
    }

    mapAboutBlocks = (textBlocks) => {
        let blocks = textBlocks.map(block => {
            let string =  `<div class="aboutBlock"><h2>${block.header}</h2>${this.mapRichText(block.content)}</div>`;
            return parse(string);
        });
        return blocks;
    }

    backgroundColor = () => {
        let styles = {
            backgroundColor: `rgb(${this.state.color.r}, ${this.state.color.g}, ${this.state.color.b})`,
        }
        return styles;
    }

    render() {
        return (
            <div className="aboutPage" style={this.backgroundColor()}>
                <GauchoSVG />
                <div className="aboutBlocks">
                    {this.mapAboutBlocks(this.props.aboutContent)} 
                </div>
            </div>
        )
    }
}

export default About;