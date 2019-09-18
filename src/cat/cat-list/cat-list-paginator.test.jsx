import React from 'react';
import CatListPaginator from './cat-list-paginator';
import Pagination from 'react-bootstrap/Pagination';

import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Given a CatListPaginator...', () => {

    let rows;
    beforeAll(() => {
        rows = 10;
    });

    test('There are four buttons (first, prev, next, last)', () => {
        const catListPaginator = shallow(<CatListPaginator/>);
        const catListPaginatorCompo = catListPaginator.instance();
        expect(catListPaginator.find(Pagination.First)).toHaveLength(1);
        expect(catListPaginator.find(Pagination.Prev)).toHaveLength(1);
        expect(catListPaginator.find(Pagination.Next)).toHaveLength(1);
        expect(catListPaginator.find(Pagination.Last)).toHaveLength(1);
    });

    test('We can navigate properly between btns', () => {
        const props = {
            rows: 10, 
            catTotal: 100, 
            onChangePage: jest.fn()
        };
        const spyState = jest.spyOn(React, 'useState');
        const catListPaginator = shallow(<CatListPaginator {...props}/>);
        catListPaginator.find(Pagination.First).at(0).simulate('click');
        console.log(spyState.mock);
        expect(spyState.mock.results).toHaveLength(3);
    });

    test('All btns are deactivated when there isn\'t enough results', () => {

    });

    test('First & prev btn is deactivated in the first page', () => {

    });

    test('Next & last btn is deactivated in the last page', () => {

    });
});


