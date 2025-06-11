class Func{
    static totalSetter(inputFacility, value){
        const facility = structuredClone(inputFacility);
        facility.set("input", value);
        facility.set("total", value*(360/facility.get("cycleDays")*facility.get("productCount")));

        return facility;
    }
    static renderCell(value, name) {
        if (Array.isArray(value)) {
            const select = document.createElement("select");
            const saved = localStorage.getItem(name) || value[0];
            for (const item of value) {
                const option = document.createElement("option");
                option.value = item;
                option.textContent = item;
                if (item == saved) {
                    option.selected = true
                    option.setAttribute('selected', 'selected');
                };
                select.appendChild(option);
            }
            const td = document.createElement("td");
            select.className = "compact-cell"; // ← クラスを付与
            td.className = "compact-cell";
            td.appendChild(select);
            return td.outerHTML;
        } else {
            return `<td>${value || ""}</td>`;
        }
    };

    static firstGetter(array){
        if (Array.isArray(array)) {
            return array[1];
        } else {
            return array;
        }
    };
};