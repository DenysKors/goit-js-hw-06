function amountOfCategories() { 
    const menuItemsRef = document.querySelectorAll(".item");
    const menuItemsLength = menuItemsRef.length;
    console.log("Number of categories:", menuItemsLength)
}

function categoryInfo() { 
    const menuItemsRef = document.querySelectorAll(".item");
    const category = menuItemsRef.forEach((li) => { 
        const h2Text = li.querySelector("h2").textContent;
        const amountOfElemnts = li.querySelectorAll("li").length;

        console.log("Category:", h2Text)
        console.log("Elements:", amountOfElemnts)
    })
}

amountOfCategories()
categoryInfo()