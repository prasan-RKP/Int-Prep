//let daat = await ('https://jsonmock.hackerrank.com/api/countries?page=2');


async function countryName(code) {
  const base = 'https://jsonmock.hackerrank.com/api/countries?page=';

  // Fetch page 1 first (also gives us total_pages)
  const resp1 = await fetch(base + '1');
  const json1 = await resp1.json();

  // Case-insensitive comparison is safer:
  const target = code.toUpperCase();

  // Check page 1 data without refetching
  for (const country of json1.data) {
    if (country.alpha2Code && country.alpha2Code.toUpperCase() === target) {
      return country.name;
    }
  }

  const totalPages = json1.total_pages;

  // Fetch remaining pages (if any)
  for (let p = 2; p <= totalPages; p++) {
    const resp = await fetch(base + p);
    const pageJson = await resp.json();

    for (const country of pageJson.data) {
      if (country.alpha2Code && country.alpha2Code.toUpperCase() === target) {
        return country.name;
      }
    }
  }

  // If not found (shouldn't happen per the problem guarantees)
  return null;
}

// Example:
countryName('AF').then(name => console.log(name)).catch(err => console.error(err));