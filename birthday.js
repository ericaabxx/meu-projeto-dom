function quantoFaltaPara(m, d) {

    const dataAtual = new Date()
    dataAtual.setHours(0)
    dataAtual.setMinutes(0)
    dataAtual.setSeconds(0)
    dataAtual.setMilliseconds(0)

    let anoAtual = dataAtual.getFullYear()

    const dataNiver = new Date(anoAtual, m - 1, d)

    const dataAtualTS = +dataAtual //getTime()
    let dataNiverTS = +dataNiver //getTime

    if (dataNiverTS < dataAtualTS) {
        //se a data for menor que data atual, significa que o aniversaio passou
        //somanmos mais um ao ano atual
        dataNiver.setFullYear(++anoAtual)
        //atualiamos dataNIverTS
        dataNiverTS = +dataNiver
    }

    const UM_DIA = 24 * 60 * 60 * 1000
    const diferenca = dataNiverTS - dataAtualTS //quantos milesigundos falta

    return parseInt(diferenca / UM_DIA) //para resultar em dias e nao milesegundos




}
