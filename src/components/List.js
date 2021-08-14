import React from 'react';

const List =({ name, children }) => {
    return (
        <>
            <h1>{name}</h1>
            <ul>
                {children}
            </ul>
        </>);
}

export default List;