// Setup Notes: Read Working with React 16 ( https://airbnb.io/enzyme/docs/installation/)
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// Setup fetch so that we can mock it easily
window.fetch = require('jest-fetch-mock');