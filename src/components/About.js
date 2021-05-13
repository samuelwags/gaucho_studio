import React from 'react';
import blocksToHtml from '@sanity/block-content-to-html';
import parse from 'html-react-parser';
import GauchoSVG from './GauchoSVG';

class About extends React.Component {

    mapRichText = (blocks) => {
        let string = blocksToHtml({
            blocks: blocks
        });
        return string;
    }

    mapAboutBlocks = (textBlocks) => {
        console.log(textBlocks);
        let blocks = textBlocks.map(block => {
            let string =  `<div class="aboutBlock"><h2>${block.header}</h2>${this.mapRichText(block.content)}</div>`;
            console.log(string);
            return parse(string);
        });
        return blocks;
    }

    render() {
        return (
            <div className="aboutPage">
                <GauchoSVG />
                <div className="aboutBlocks">
                    {this.mapAboutBlocks(this.props.aboutContent)} 
                </div>
            </div>
        )
    }
}

export default About;