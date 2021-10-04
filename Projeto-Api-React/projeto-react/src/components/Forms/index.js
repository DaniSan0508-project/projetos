
export function Forms({
    formKey,
    formType,
    formLabel,
    formRequired,
}){

 
    return(
        <form key={formKey}>
            <label>{formLabel}</label>
            <input type={formType} required={formRequired}/>
        </form>
    )
}