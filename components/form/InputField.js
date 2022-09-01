import React from 'react'

export default function InputField(column, type, label, name, value, required) {
    return (
        <div className="{`column` form-group}  form-group ">
            <label>{label} :</label>
            <input name={name} type={type} value={value} className="form-control" {...required} />
        </div>
    )
}
