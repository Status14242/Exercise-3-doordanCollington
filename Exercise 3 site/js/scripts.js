var clickCount = 0;

        function showInfo(doorNumber) {
            clickCount++;

            if (clickCount === 8) {
                alert(`You have choosen ${doorNumber} as the murderer! Unfortunately this Dororoor wasn't behind this murder of Doordan Collingwood. In fact, no Dororoor was the murder of Doordan Collingwood because they are just Dororoors and they don't have hands`);
                clickCount = 0; // reset the counter
            } else {
                // Hide all info divs
                var infoDivs = document.querySelectorAll('.info');
                infoDivs.forEach(function (div) {
                    div.classList.add('hidden');
                });

                // Show the selected info div
                var selectedInfo = document.getElementById('info-' + doorNumber);
                selectedInfo.classList.remove('hidden');
            }
        }

        document.getElementById('door-1').addEventListener('click', function () {
            showInfo(1);
        });