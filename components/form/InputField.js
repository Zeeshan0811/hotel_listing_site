
export default function InputField({ column, type, label, name, value, onchange }) {
    return (
        <div className={`${column} form-group`}>
            <label htmlFor={name}>{`${label} :`}</label>
            {(type == 'textarea') ? (
                <textarea name={name} id={name} value={value} className="form-control" onChange={onchange} />
            ) : (
                <input name={name} id={name} type={type} value={value} className="form-control" onChange={onchange} />
            )}
        </div>
    )
}