
export default function InputField({ column, type, label, id, name, value, onchange, error = false, checked = false, icon = false }) {
    return (
        <div className={`${column} form-group`}>
            {(type == 'textarea') ? (
                <>
                    <label htmlFor={name}>{`${label} :`}</label>
                    <textarea name={name} id={(id) ? id : name} value={value} className="form-control" onChange={onchange} />
                </>
            ) : (type == 'radio') ? (
                <div className="form-check">
                    <input className="form-check-input" type={type} name={name} id={id} value={value} onChange={onchange} checked={checked} />
                    <label className="form-check-label" htmlFor={id}>
                        {label}
                    </label>
                </div>
            ) : (type == 'checkbox') ? (
                <><div className="form-check">
                    <input className="form-check-input" type={type} name={name} id={id} value={value} onChange={onchange} checked={checked} />
                    <label className="form-check-label" htmlFor={id}>
                        {label}
                    </label>
                </div></>
            ) : (
                <>
                    <label htmlFor={name}>{`${label} :`}</label>
                    <input name={name} id={(id) ? id : name} type={type} value={value} className={(error == true) ? 'form-control border border-danger' : 'form-control'} onChange={onchange} />
                </>
            )
            }
        </div >
    )
}