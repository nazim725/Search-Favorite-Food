const searchFood=()=>{
         const searchInput=document.getElementById('input-field');
         const searchText=searchInput.value;
         fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
        .then(res=>res.json())
        .then(data=>displayFood(data.meals))
        .catch(res=>alert("Something Wrong, Please Try Again"))
        searchInput.value=''
    

        const displayFood=foods=>{
            const searchResult=document.getElementById('search-result')
            searchResult.textContent=''
            for(const food of foods){
                // console.log(food);
               const div=document.createElement('div');
               div.classList.add('col');
               div.innerHTML=`
                 <div onclick="display(${food.idMeal})" class="card">
                 <img src="${food.strMealThumb}" class="card-img-top" alt="...">
                 <div class="card-body">
                 <h5 class="card-title">${food.strMeal}</h5>
                 <p class="card-text">${food.strInstructions.slice(0,150)}.</p>
                 </div>
               </div>
             </div>`;
             searchResult.appendChild(div)
            }


        }
    
   

 }

 const display=(mealId)=>{
   const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
  fetch(url)
  .then(res=>res.json())
  .then(data=>displayMeal(data.meals[0]))
    
 }

 const displayMeal=(meal)=>{
   const mealdetails=document.getElementById('detailsId');
   mealdetails.textContent=''
   const div=document.createElement('div');
   div.classList.add('card');
   div.innerHTML=`<img src="${meal.strMealThumb}" class="card-img-top" alt="...">
   <div class="card-body">
     <h5 class="card-title">${meal.strMeal}</h5>
  
     <a href="${meal.strYoutube}" class="btn btn-primary">Go Youtube</a>
   </div>`;

    mealdetails.appendChild(div)

 }

