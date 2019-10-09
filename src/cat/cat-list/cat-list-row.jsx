import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CatListRow = ({ cat, onClickCat }) => {
    const [styleRow, setStyleRow] = useState({ cursor: 'default' });
    return (
        <tr
            style={styleRow}
            onClick={() => onClickCat(cat)}
            onMouseEnter={() => setStyleRow({ cursor: 'pointer' })}
            onMouseLeave={() => setStyleRow({ cursor: 'default' })}
        >
            <td>{cat.id}</td>
            <td>{cat.name}</td>
        </tr>
    );
};

CatListRow.propTypes = {
    cat: PropTypes.object,
    onClickCat: PropTypes.func
};

export default CatListRow;