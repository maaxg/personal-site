
const portfolioBtn = document.getElementById("see-portfolio");

function scrollToPortfolio()  {
  console.log("behavior")
  document.getElementById("portfolio-grid")?.scrollIntoView({behavior: "smooth"})

}

if(portfolioBtn !== null) {
  portfolioBtn.onclick = () =>{
    console.log('aaa')
  }
}

