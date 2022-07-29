class SalaModel{
    constructor(id, dimensao, capacidade, lucratividade, exibicoes){
        this.dimensao = dimensao
        this.capacidade = capacidade
        this.lucratividade = lucratividade
        this.exibicoes = exibicoes
    }
}
           /*lucratividade
             valor = valor.replace(",",".")
            valor = valor.toFixed(2)  
            trata --- se tiver dois numeros depois da virgula ou ponto arredondar, torna-lo float (tranformar , em .)
            */


export default SalaModel