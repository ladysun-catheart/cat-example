import React from 'react';
import faker from 'faker';
import CatList, { CatListRow } from './cat-list';
import Table from 'react-bootstrap/Table';
import CatListPaginator from './cat-list-paginator';
import CatApi from '../../core/apis/cat-api';

import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

jest.mock('../../core/apis/cat-api');
CatApi.fetchCatList.mockResolvedValue({});

describe('Given a cat-list...', () => {
    let catListInfo;
    const catListInit = () => {
        return Array(100).fill({}).map((cat, index) => ({
            id: index + 1,
            name: faker.lorem.word(),
            sex: 'male',
            birthday: 1568714386074,
            description: faker.lorem.sentence()
        })); 
    };

    beforeAll(() => {
        catListInfo = catListInit();
    });

    test('There is a table and a paginator', () => {
        const catList = shallow(<CatList />);
        const table = catList.find(Table);
        const paginator = catList.find(CatListPaginator);
        expect(table).toHaveLength(1);
        expect(paginator).toHaveLength(1);
    });

    test('Show a cat result list', () => {
        const props = {
            catList: catListInfo.slice(0, 10),
            catTotal: 100,
            onClickCat: jest.fn(() => {}),
            saveCatList: jest.fn(() => {})
        }
        const catList = shallow(<CatList {...props}/>);
        const rows = catList.find(CatListRow);
        expect(rows).toHaveLength(10);
    });
});