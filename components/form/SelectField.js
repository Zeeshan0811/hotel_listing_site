
export default function SelectField({ column, label, name, options, onchange }) {
    return (
        <div className={`${column} form-group`}>
            <label htmlFor={name}>{`${label} :`}</label>
            <select name={name} id={name} className="form-control" onChange={onchange}>
                {
                    options.forEach(option => {

                    })
                }
            </select>
        </div>
    )
}