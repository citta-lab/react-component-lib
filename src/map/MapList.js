import React from 'react';
import PropTypes from 'prop-types';

class MapList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mutiplier: [2, 3, 4, 5],
    };
  }

  render() {
    const { mutiplier } = this.state;
    const { num } = this.props;
    const [first, rest] = [...mutiplier];
    const value = num ? num * first : first;
    return (
      <div>
        <h1> Map List View </h1>
        <p>
          {' '}
          {value}
          {' '}
and
          {rest[0]}
          {' '}
                    : W3Schools is optimized for learning, testing, and training.
                     Examples might be simplified
                     to improve reading and basic understanding. Tutorials, references,
                      and examples are constantly
                    reviewed to avoid errors, but we cannot warrant full correctness
                    of all content.
          {' '}
        </p>
      </div>
    );
  }
}

MapList.propTypes = {
  num: PropTypes.number,
};

MapList.deaultProps = {
  num: undefined,
};


export default MapList;
