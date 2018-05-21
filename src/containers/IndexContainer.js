import React, { Component } from 'react';
import IndexInput from './IndexInput';
import Index from '../components/Index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchStories } from '../actions/story';
import PropTypes from 'prop-types';

class IndexContainer extends Component {
  componentDidMount() {
    this.props.fetchStories()
  }

  render() {
    let stories;
    if (this.props.stories === undefined || this.props.stories.length === 0 ) {
      stories = 
      <div className="noStories">
        There aren't any stories yet. 
      </div>
    } else {
      stories = <Index stories={this.props.stories} />
    }
    return (
      <div className="indexContainer">
        <div className="topRight"><IndexInput /></div>
        {stories}
      </div>
    )
  }
}

IndexContainer.defaultProps = {
  stories: []
}

IndexContainer.propTypes = {
  stories: PropTypes.array
}

const mapStateToProps = (state) => {
  return { stories: state.stories}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchStories: fetchStories
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexContainer);