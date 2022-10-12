"use strict";
const portfolioBtn = document.getElementById("see-portfolio");
function scrollToPortfolio() {
    var _a;
    console.log("behavior");
    (_a = document.getElementById("portfolio-grid")) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
}
if (portfolioBtn !== null) {
    portfolioBtn.onclick = () => {
        console.log('aaa');
    };
}
