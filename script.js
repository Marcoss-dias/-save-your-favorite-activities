const compara = (parametro) => {

    const text = parametro.toLowerCase()

    const x = (text.match(/x/g) ||  []).length
    const o = (text.match(/o/g) ||  []).length

    let condition = true

    if( x != o ){
        
        condition = false

    }

    return condition

}