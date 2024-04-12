// Function to get the menu
let apiUrl = "https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json";
let menuArray = [];
function getMenu() {
    fetch(apiUrl)
        .then(response => response.json())
        .then(menu => {
            // Display menu items on the screen
            menuArray = [...menu];
            console.log("Menu items:", menuArray);
        })
        .catch(error => console.error('Error fetching menu:', error));
}

// Function to take order
function takeOrder() {
    return new Promise(resolve => {
        setTimeout(() => {
            
            const randomBurgers = {};
            for (let i = 0; i < 3; i++) {
                const randomIndex = Math.floor(Math.random() * menuArray.length);
                let burger = menuArray[randomIndex].name;
                randomBurgers[`burger${i+1}`] ="burger " + burger;
            }
            resolve(randomBurgers);
        }, 2500);
    });
}

// Function for order preparation
function orderPrep() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ order_status: true, paid: false });
        }, 1500);
    });
}

// Function for payment
function payOrder() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ order_status: true, paid: true });
        }, 1000);
    });
}

// Function to display thank you message
function thankYou() {
    alert("Thank you for eating with us today!");
}

// Main function to handle the flow
async function restaurantFlow() {
    try {
        await getMenu();
        const order = await takeOrder();
        console.log("Order:", order);
        const prepStatus = await orderPrep();
        console.log("Preparation Status:", prepStatus);
        const paymentStatus = await payOrder();
        console.log("Payment Status:", paymentStatus);
        if (paymentStatus.paid) {
            thankYou();
        }
    } catch (error) {
        console.error("Error:", error);
    }
}

// Run the main function
restaurantFlow();

// function to rende menu items.
function renderMenuItems(){
    let menu_div = document.querySelector(".menu_grid");

    if(!!menu_div){
        for(let i=0; i<3; i++){
            let div = document.createElement("div");
    
            div.innerHTML = `
            <div class="background_class item_img_div"><img src="./assets/burger_img.png" alt="" class="background_class"/></div>
                <div class="second_div background_class">
                    <div class="background_class">
                        <div class="background_class" style="font-weight:600;margin-bottom:4px">Burger</div>
                        <div class="background_class">$5.99/-</div>
                    </div>
                    <div class="background_class"><button>+</button></div>
                </div>
            `
            menu_div.append(div);
        }

    }
}
renderMenuItems()

function renderMenuItemsForMenuScreen(){
    let menu_div = document.querySelector(".menu_grid_menu_screen");

    if(!!menu_div){

        for(let i=0; i<6; i++){
            let div = document.createElement("div");
    
            div.innerHTML = `
            <div class="background_class item_img_div"><img src="./assets/burger_img.png" alt="" class="background_class"/></div>
            <div class="second_div background_class">
                    <div class="background_class">
                        <div class="background_class" style="font-weight:600;margin-bottom:4px">Burger</div>
                        <div class="background_class">$5.99/-</div>
                    </div>
                    <div class="background_class"><button>+</button></div>
            </div>
            `
            menu_div.append(div);
        }
    }

}

renderMenuItemsForMenuScreen()