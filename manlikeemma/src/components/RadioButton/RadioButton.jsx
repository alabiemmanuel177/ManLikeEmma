import React from 'react';

export const RadioButton = ({ label, value, checked, onChange }) => {
    return (
        <label style={{ display: 'flex', alignItems: 'center', marginRight: '10px' }}>
            <input
                type="radio"
                defaultValue={value}
                checked={checked}
                onChange={onChange}
                style={{ display: 'none' }}
            />
            <div
                style={{
                    width: '20px',
                    height: '20px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    display: 'inline-block',
                    marginRight: '8px',
                    backgroundColor: checked ? '#ccc' : 'transparent',
                }}
            ></div>
            {label}
        </label>
    );
};
