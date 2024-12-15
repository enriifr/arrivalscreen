window.onload = function() {
    startUpdating();
  }
  
  function startUpdating() {
    setInterval(updateTableData, 1000);
  }
  
  function updateTableData() {
    const url = 'https://enriifr.github.io/arrivalscreen/flights.txt';
    const cacheBuster = `?v=${new Date().getTime()}`;
    const fetchUrl = url + cacheBuster;
  
    fetch(fetchUrl)
      .then(response => response.text())
      .then(data => {
        const dataLines = data.split('\n');
  
        for (let i = 0; i < 10; i++) {
          const flightIndex = i*5; // Each flight has 5 lines of data in the text file
          
          // Update text content for each flight (assuming data is structured in blocks of 5 lines per flight)
          document.getElementById(`flight${i + 1}data1`).textContent = dataLines[flightIndex];
          document.getElementById(`flight${i + 1}data2`).textContent = dataLines[flightIndex + 2];
          document.getElementById(`flight${i + 1}data3`).textContent = dataLines[flightIndex + 3];
          document.getElementById(`flight${i + 1}data4`).textContent = dataLines[flightIndex + 4];
  
          // Update image source for each flight
          document.getElementById(`flight${i + 1}airline`).src = dataLines[flightIndex + 1];
        }
      })
      .catch(error => console.error('Error loading text:', error));
  }
  