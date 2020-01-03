import React from 'react'
import {
    render,
    fireEvent
} from '@testing-library/react'
import CatToolbar from './cat-toolbar'


describe('Given a CatToolbar...', () => {

    let inputText;
    let buttonSearch;
    let buttonCreate;
    let mockOnClickSearch;
    let mockGoToCreateCat;

    beforeEach(() => {
        mockOnClickSearch = jest.fn()
        mockGoToCreateCat = jest.fn()
        const { getByTestId } = render(<CatToolbar 
            onClickSearch={mockOnClickSearch} 
            goToCatCreate={mockGoToCreateCat} 
            />)
        inputText = getByTestId('input-search-toolbar')
        buttonSearch = getByTestId('btn-search-toolbar')
        buttonCreate = getByTestId('btn-insert-toolbar')
    })

    test('You can search by any word without spaces', () => {
        // Arrange
        const inputTest = 'test '
        // Act
        fireEvent.change(inputText, {target: {value: inputTest}})
        fireEvent.click(buttonSearch)
        // Asset
        expect(inputText.value).toBe(inputTest.trim())
        expect(mockOnClickSearch.mock.calls[0]).toEqual([1, 10, inputTest.trim()])
    })

    test('When you do not type nothing in the search input, it will find all cats', () => {
        // Act
        fireEvent.click(buttonSearch)
        // Asset
        expect(mockOnClickSearch.mock.calls[0]).toEqual([1, 10, /\w/])
    })

    test('When you press the insert cat button, it will be a redirection to this section', () => {
        // Act
        fireEvent.click(buttonCreate)
        // Asset
        expect(mockGoToCreateCat.mock.calls.length).toBe(1)
    })

})