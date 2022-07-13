const API_KEY = 'AIzaSyAfe1-rk1k1-2VUCMNKKwnA345CcB38fy4'
const spreadsheetId = '18Ch2P_A-T3Ni3P7intie1vJ338dWddw3z7bzpFuBHYk'
const range = 'Heights'
const valueInputOption = 'USER_ENTERED'
const insertDataOption = 'INSERT_ROWS'

const DISCOVERY_DOCS = [
    'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest',
    'https://sheets.googleapis.com/$discovery/rest?version=v4'
]

let gapiInited = false

function gapiLoaded() {
    gapi.load('client', intializeGapiClient)
}

async function intializeGapiClient() {

    await gapi.client.init( {
        apiKey: API_KEY,
        discoveryDocs: DISCOVERY_DOCS,
    } )

    gapiInited = true
}

let inputs = {
    name: document.querySelector( '[name="name"]' ),
    height: document.querySelector( '[name="height"]' )
}

function validate() {

    if ( !gapiInited ) {
        alert( 'API not loaded yet' )
        return false
    }

    let name = inputs.name.value.trim()
    let height = Math.round( inputs.height.value )
    
    if ( name !== '' && height > 0 ) {
        store( name, height )
    } else {
        alert( 'Invalid fields' )
    }

}

function store( name, height ) {

    let rows = [
        [ name, height ]
    ]

    let body = {
        values: rows
    }

    let options = {
        spreadsheetId: spreadsheetId,
        range: range,
        valueInputOption: valueInputOption,
        insertDataOption: insertDataOption,
        resource: body
    }

    try {
        gapi.client.sheets.spreadsheets.values.append( options )
            .then( response => {
                const result = response.result
                console.log( result.updates.updatedCells + ' cells appended' )
            } )
    } catch ( error ) {
        alert( error.message )
    }

}
