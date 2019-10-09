import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TableRow = ({ columnList, data, onClick }) => {
    const [styleRow, setStyleRow] = useState({ cursor: 'default' });
    return (
        <tr
            style={styleRow}
            onClick={() => onClick(data)}
            onMouseEnter={() => setStyleRow({ cursor: 'pointer' })}
            onMouseLeave={() => setStyleRow({ cursor: 'default' })}
        >
            { columnList.map(column => <td>{ data[column.id] }</td>) }
        </tr>
    );
};

TableRow.propTypes = {
    columnList: PropTypes.array,
    data: PropTypes.object,
    onClick: PropTypes.func
};

export default TableRow;