import React from 'react';

function MySelect({arr, innerval , title, value, onChange}) {


    return (
        <div className="header__chooseBar">
            <div className="header__chooseText">{title}</div>
            <div className="header__chooseOption">
                <select 
                    value={value}
                    onChange={event => onChange(event.target.value)}    
                >
                    <option value='none'>
                        -
                    </option>
                    {arr.map((val, index) =>
                        <option key={val} value={innerval[index]}>{val}</option>
                    )}
                </select>
            </div>
        </div>
    );
}

export default MySelect;