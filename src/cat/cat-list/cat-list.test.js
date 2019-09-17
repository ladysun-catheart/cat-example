import React from 'react';

import CatList, { CatListRow } from './cat-list';
import Table from 'react-bootstrap/Table';
import CatListPaginator from './cat-list-paginator';
import CatApi from '../../core/apis/cat-api';

import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { JestEnvironment } from '@jest/environment';

configure({ adapter: new Adapter() });

JestEnvironment.mock(CatApi);
CatApi.fetchCatList.mockResolvedValue({});

describe('Given a cat-list...', () => {

    test('There is a table and a paginator', () => {
        const catList = shallow(<CatList />);
        const table = catList.find(Table);
        const paginator = catList.find(CatListPaginator);
        expect(table).toHaveLength(1);
        expect(paginator).toHaveLength(1);
    });

    test('Show a cat result list', () => {
        const catList = [
            {id:1,name:"cumque",sex:"male",birthday:1568714386074,description:"Voluptatem sint ratione animi id."},
            {id:2,name:"praesentium",sex:"male",birthday:1568714386074,description:"Aliquid ea esse corrupti et molestiae repellat."},
            {id:3,name:"hic",sex:"male",birthday:1568714386074,description:"Sit eligendi officiis voluptatum placeat consequatur."},
            {id:4,name:"quo",sex:"male",birthday:1568714386074,description:"Deleniti eveniet quae occaecati."},
            {id:5,name:"id",sex:"male",birthday:1568714386074,description:"Ipsa enim quod ut et."}
        ];
        const props = {
            catList, 
            catTotal: 100, 
            onClickCat, 
            saveCatList
        }
        const catList = shallow(<CatList {...props}/>);
        const rows = catList.find(CatListRow);
        expect(rows).toHaveLength(5);
    });
});