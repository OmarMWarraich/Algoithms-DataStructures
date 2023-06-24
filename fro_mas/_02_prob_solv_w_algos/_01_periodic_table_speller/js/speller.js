export default {
    check,
    lookup,
};

var elements;

await loadPeriodicTable();

async function loadPeriodicTable() {
    elements = await (await fetch("periodic-table.json")).json();
}

function check(inputWord) {
    /**
     * TODO: determine if 'inputWord' 
     * can be spelled with periodic
     * table symbols ? return array 
     * with them  :empty array
     **/ 

    return [];    
}

function lookup(elementSymbol) {
    /**
     * TODO: return element entry
     * based on specified symbol
     * (case-insensitive)
     */
    return {};
}