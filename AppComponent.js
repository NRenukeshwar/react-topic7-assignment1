import React from 'react';
import PropTypes from 'prop-types';
class App extends React.Component
{

  render(){
  return (
    <div>
      <p>Name: {this.props.name}</p>
      <p>
      Cities:  {this.props.cities}
      </p>
      <p>Age:{this.props.age}</p>
    </div>
  )
}
}
const array=[];
for(var i=18;i<=60;i++) array.push(i);

App.propTypes = {
  name: PropTypes.string.isRequired,
  cities: PropTypes.array,
  age: PropTypes.oneOf(array)
};

App.defaultProps = {
  name:'Steve',
  cities: ['Bangalore','Chennai'],
  age:18
}
export default App;