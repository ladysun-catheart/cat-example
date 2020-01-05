import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const CellRegular = ({ columnList, data }) => (
    columnList.map(column => <td>{data[column.id]}</td>)
);

const CellActions = ({ actionList, data }) => (
    <td style={{ textAlign: 'right' }}>
        {actionList.map(btn => (
            <Button
                style={{ marginRight: '5px' }}
                size='sm'
                variant='secondary'
                onClick={e => {
                    e.stopPropagation()
                    btn.handlerClick(data)
                }}
            >
                {btn.name}
            </Button>
        ))}
    </td>
);

const TableRow = ({ actionList, columnList, data, onClick, 'data-testid': dataTestid }) => {
    const [styleRow, setStyleRow] = useState({ cursor: 'default' });
    return (
        <tr
            data-testid={dataTestid}
            style={styleRow}
            onClick={() => onClick(data)}
            onMouseEnter={() => setStyleRow({ cursor: 'pointer' })}
            onMouseLeave={() => setStyleRow({ cursor: 'default' })}
        >
            <CellRegular columnList={columnList} data={data} />
            {actionList && <CellActions actionList={actionList} data={data} />}
        </tr>
    );
};

TableRow.propTypes = {
    'data-testid': PropTypes.string,
    actionList: PropTypes.array,
    columnList: PropTypes.array,
    data: PropTypes.object,
    onClick: PropTypes.func
};

export default TableRow;
