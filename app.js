const api_url = "https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian";
async function getapi(url) {
  // Storing response
  try {
    const response = await fetch(url);
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    if (response) {
      setTimeout(() => {
        hideloader();
        show(data);
      }, 1500);
    }
  } catch (e) {
    if (e) {
      hideloader();
      document.getElementById("error").style.display = "block";
    }
  }
}
// Calling that async function
getapi(api_url);

// Function to hide the loader
function hideloader() {
  document.getElementById("loading").style.display = "none";
}
// Function to define innerHTML for HTML table
function show(data) {
  let tab = ``;

  // Loop to access all rows
  for (let r of data.meals) {
    tab += `<div class="row row-content align-items-center">
    <div class="col-12 order-sm-last col-sm-4">
      <h3>Our Lipsmacking Chef Specials</h3>
    </div>
    <div class="col-12 order-sm-first col-sm">
          <div class="media">
            <img width="200" height="400"
              class="d-flex mr-3 img-thumbnail align-self-center"
              src="${r.strMealThumb}"
              alt="${r.strMeal}"
            />
            <div class="media-body">
              <h3 class="mt-0">
              ${r.strMeal}
              </h3>
              <p class="d-none d-sm-block">
              Exclusive Indian Food! <br /> Made by our expert chef using healthy Indian spices to make your tastebuds go WOW!!!
              </p>
            </div>
          </div>
        </div>
        </div>`;
  }
  console.log(tab);
  // Setting innerHTML as tab variable
  document.getElementById("dish").innerHTML = tab;
}
