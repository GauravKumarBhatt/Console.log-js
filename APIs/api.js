
    const fetchBtn = document.getElementById('fetchBtn');
    const resultDisplay = document.getElementById('resultDisplay');

    fetchBtn.addEventListener('click', () => {
      const requestUrl = document.getElementById('apiUrl').value.trim();
      const fields = document.getElementById('fieldsInput').value
                      .split(',')
                      .map(f => f.trim())
                      .filter(Boolean);

      if (!requestUrl || fields.length === 0) {
        resultDisplay.innerText = 'Please enter a valid API URL and at least one field.';
        return;
      }

      const xhr = new XMLHttpRequest();
      xhr.open('GET', requestUrl);
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            const data = JSON.parse(this.responseText);
            let output = '';
            fields.forEach(field => {
              output += `${field.toUpperCase()}: ${data[field] ?? 'Not available'}\n`;
            });
            resultDisplay.innerText = output.trim();
          } else {
            resultDisplay.innerText = 'Error fetching data. Please check the API URL.';
          }
        }
      };
      xhr.send();
    });