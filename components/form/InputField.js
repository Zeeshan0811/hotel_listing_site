
export default function InputField({ column, type, label, id, name, value, onchange, error = false }) {
    return (

        <div className={`${column} form-group`}>
            <label htmlFor={name}>{`${label} :`}</label>
            {(type == 'textarea') ? (
                <textarea name={name} id={(id) ? id : name} value={value} className="form-control" onChange={onchange} />
            ) : (
                <input name={name} id={(id) ? id : name} type={type} value={value} className={(error == true) ? 'form-control border border-danger' : 'form-control'} onChange={onchange} />
            )}
        </div>
    )
}