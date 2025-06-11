class Monado {
    static updater() {
        tbody.innerHTML = ''
        const productMap = new Map();

        for (const [name, facility, index] of facilitiesData) {
            const row = document.createElement("tr");
            const input = Number(localStorage.getItem(name)) || 0;
            const total = input*(360/facility.cycleDays)*facility.productCount

            const productUpdater = (key, keyCount, suffix) => {
                if (Array.isArray(key)){
                    key = localStorage.getItem(name + suffix)
                }
                productMap.set(key, (productMap.get(key) || 0)
                + input*(360/facility.cycleDays)*keyCount)
            }
            productUpdater(facility.product, facility.productCount, "");
            productUpdater(facility.useItem1, facility.useCount1*-1, "useItem1");
            productUpdater(facility.useItem2, facility.useCount2*-1, "useItem2");
            productUpdater(facility.useItem3, facility.useCount3*-1, "useItem3");
            // セルを順番に追加
            row.innerHTML = `
                <td>${name}</td>` +
                Func.renderCell(facility.useItem1, name + "useItem1") +
                `<td>${facility.useCount1 || ""}</td>` +
                Func.renderCell(facility.useItem2, name + "useItem2") +
                `<td>${facility.useCount2 || ""}</td>` +
                Func.renderCell(facility.useItem3, name + "useItem3") +
                `<td>${facility.useCount3 || ""}</td>
                <td>${facility.product}</td>
                <td>${facility.productCount}</td>
                <td>${facility.cycleDays}</td>
                <td>${total}</td>
                <td>0</td>
                <td><input
                 type="number"
                 data-index="${index}"
                 value=${input}
                 style="width:60px;"></td>
                `;

            tbody.appendChild(row);
        };
        const rows = document.querySelectorAll("#facilityTable tbody tr");
        for (const row of rows) {
            const cells = row.querySelectorAll("td");
            cells[11].textContent = productMap.get(cells[7].textContent);

            const totalvalue = Number(cells[11].textContent);
            if (totalvalue > 1000) {
                row.classList.add("morePositive");
            } else if (totalvalue > 0) {
                row.classList.add("positive");
            } else if (totalvalue < 0) {
                row.classList.add("negative");
            }
        }
    }
};