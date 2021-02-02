import React from 'react';

const Food = ({ name, price}) => {
    return (
    <div>
        <p>{name}은 {price}원입니다.</p>
    </div>
    );
};

export default Food;