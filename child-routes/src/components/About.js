import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import Nick from './Nick';
import Cat from './Cat';

class About extends Component {
    render() {
        // can also be written this.props.match.url
        const {match} = this.props;
        return (
            <div>
                <h1>About</h1>
                <Link to={match.url + '/nick'}>Nick</Link>
                <Link to={match.url + '/cat'}>Cat</Link>
                <Switch>
                    <Route path={match.url + '/nick'} component={Nick} />
                    <Route path={match.url + '/cat'} component={Cat} />
                </Switch>
            </div>
        );
    }
}

export default About;
