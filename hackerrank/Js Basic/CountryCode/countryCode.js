// Given a two-letter unique country code, print the country's full name on a new line. For example, Canada's unique country code is CA. When you input CA as your argument, print Canada on a new line.
// Perform http get request to the url: https://jsonmock.hackerrank.com/api/countries?page=<input>&key=<input>
// The response is a json object with the following properties:

// page: The current page number.
// per_page: The maximum number of countries returned per page.
// total: The total number of countries on all pages of the query.
// total_pages: The total number of pages with results.
// data: An array of objects containing country information where the alpha2Code field matches the input.

// For each country object, print the country's full name on a new line. If no country is found, print Not found instead.

// Method 1: Using Async/Await

async function getCountryName(countryCode) {
    let pageNumber = 1;
    let countryName = null;

    while (countryName === null) {
        let url = `https://jsonmock.hackerrank.com/api/countries?page=${pageNumber}`;
        let response = await fetch(url);
        let responseBody = await response.json();

        responseBody.data.forEach((countryData) => {
            if (countryData.alpha2Code === countryCode)
                countryName = countryData.name;
        });
        if (responseBody.total_pages == pageNumber++)
            break;
    }

    if (countryName === null) {
        throw new Error("Country code not found.");
    }
    console.log(countryName);
}

getCountryName('CA');
getCountryName('US');
getCountryName('AF');
getCountryName('FR');
getCountryName('BA');
