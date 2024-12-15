document.addEventListener('DOMContentLoaded', () => {
  const headers = document.querySelectorAll('th');
    const headerTexts = [
      ["Orario", "Time"],
      ["Compagnia", "Airline"],
      ["# Volo", "Flight #"],
      ["Provenienza", "Origin"],
      ["Informazioni", "Status"]
    ];

    let index = 0;

    setInterval(() => {
      headers.forEach((header, i) => {
        header.textContent = headerTexts[i][index % headerTexts[i].length];
      });
      index++;
    }, 10000);
});