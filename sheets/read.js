const API_KEY = 'AIzaSyAfe1-rk1k1-2VUCMNKKwnA345CcB38fy4'
const spreadsheetId = '18Ch2P_A-T3Ni3P7intie1vJ338dWddw3z7bzpFuBHYk'
const range = 'Ages'

const cards = document.querySelector( '.cards' )
const botao = document.querySelector( 'button' )

// https://spreadsheets.google.com/feeds/cells/18Ch2P_A-T3Ni3P7intie1vJ338dWddw3z7bzpFuBHYk/Ages/public/full?alt=json

const DISCOVERY_DOCS = [
    'https://sheets.googleapis.com/$discovery/rest?version=v4'
]

function gapiLoaded() {
    gapi.load( 'client', intializeGapiClient )
}

async function intializeGapiClient() {

    await gapi.client.init( {
        apiKey: API_KEY,
        discoveryDocs: DISCOVERY_DOCS,
    } )

    // Habilita botão após carregar API
    botao.disabled = false
    botao.addEventListener( 'click', carregar )

}

function carregar() {

    let opcoes = {
        spreadsheetId: spreadsheetId,
        range: range
    }

    try {

        gapi.client.sheets.spreadsheets.values.get( opcoes )
            .then( response => mostrar( response.result.values ) )

    } catch ( error ) {

        alert( error.message )

    }

}

function mostrar( lista ) {

    limpar()

    // Remove o 1º item da lista (cabeçalho)
    lista.shift()

    for ( let item of lista ) {

        let li = document.createElement( 'li' )

        let nome  = item[ 0 ]
        let idade = item[ 1 ]
        let real  = item[ 2 ]

        li.textContent = `${ nome } tem ${ idade } anos, mas ${ real } na vida real`
    
        cards.append( li )
    }

}

function limpar() {

    cards.textContent = ''

}