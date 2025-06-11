document.addEventListener("DOMContentLoaded", () => {
    // 施設数の入力欄監視
    tbody.addEventListener("input", (e) => {
        if (e.target.type === "number") {
            const input = e.target;

            const value = Number(input.value);
            const row = input.closest("tr");
            const cells = row.querySelectorAll("td");
            const name = cells[0].textContent;

            localStorage.setItem(name, value);
            Monado.updater();
        }
    });
    tbody.addEventListener("change", (e) => {
        if (e.target.tagName === "SELECT") {
            const input = e.target;
            const value = Number(input.value);
            const row = input.closest("tr");
            const cells = row.querySelectorAll("td");
            const name = cells[0].textContent;
            const suffix = (input.closest('td').cellIndex + 1)/2;
            localStorage.setItem(name + "useItem" + suffix, input.value);
            Monado.updater();                   // 収支を即時再計算したい場合
        }
    });
});

