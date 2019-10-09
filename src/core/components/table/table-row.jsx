import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonToolbar } from 'react-bootstrap';

const TableRow = ({ actionList, columnList, data, onClick }) => {
    const [styleRow, setStyleRow] = useState({ cursor: 'default' });
    return (
        <tr
            style={styleRow}
            onClick={() => onClick(data)}
            onMouseEnter={() => setStyleRow({ cursor: 'pointer' })}
            onMouseLeave={() => setStyleRow({ cursor: 'default' })}
        >
            {columnList.map(column => <td>{data[column.id]}</td>)}
            <td style={{textAlign: 'right'}}>
                {actionList.map(btn => (
                    <Button
                        style={{ marginRight: '5px' }}
                        size='sm'
                        variant='secondary'
                        onClick={btn.handlerClick}>{btn.name}
                    </Button>
                ))}
            </td>
        </tr>
    );
};

TableRow.propTypes = {
    actionList: PropTypes.array,
    columnList: PropTypes.array,
    data: PropTypes.object,
    onClick: PropTypes.func
};

export default TableRow;