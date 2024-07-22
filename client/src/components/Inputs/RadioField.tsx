const RadioField = ({ name, id, value }: { name: string, id: string, value: string }) => {
    return (
        <div className="flex items-center gap-5">
            <input id={id} name={name} type="radio" value={value} />
            <label htmlFor={id} className="capitalize">{id}</label>
        </div>
    )
}

export default RadioField;
