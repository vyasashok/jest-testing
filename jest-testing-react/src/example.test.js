import React, { Component } from 'react';
import renderer from 'react-test-renderer';
import * as enzyme from 'enzyme';
import {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new Adapter() });
import Example from './example';


describe('<Example />', () =>{

    it('Example  snapshot test', ()=>{
        const component = renderer.create(
             <Example />
        );
        let tree = component.toJSON();
         expect(tree).toMatchSnapshot();
    });
   

    it('Example  props test', ()=>{
        const component = enzyme.shallow(<Example name="ashok"/>);
        // console.log(component.prop.name);
        expect(component.instance().props.name).toEqual("ashok");
    });

    it('Example  div length', ()=>{
        const component = shallow(<Example />);
        expect(component.find('div')).toHaveLength(6);
    });


    it('Example test state', ()=>{
        const component = shallow(<Example />);

        component.find('button').simulate('click');
      
        expect(component.state('clientId')).toBe("122");
    });
});
