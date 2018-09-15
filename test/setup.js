import Enzyme, { shallow, render, mount } from 'enzyme'

// Make Enzyme functions available in all test files without importing
global.shallow = shallow
global.render = render
global.mount = mount
