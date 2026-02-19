
export const getFormatDate = (dateString, locale= "en-US", type = "short") => {
    if(!dateString) return ""

    const date = new Date(dateString)
    
    return date.toLocaleDateString(locale,{
        day:"2-digit",
        month:type,
        year:"numeric"
    })
    
}