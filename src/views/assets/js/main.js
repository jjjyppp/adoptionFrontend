
$(document).ready(function () {


    $(".like-button").each(function () {
     //   var like = $(".like-button i")
        $(this).click(function (e) {
           
            e.preventDefault();
            $(this).find("i").toggleClass("fa-solid");
            $(this).find("i").toggleClass("fa-regular");
        })

       
    });



    $(".breeds").click(function(){

if($(".breed-menu").css("display")=="block")
$(".breed-menu").css("display" ,"none")
    
    }
        )

})

var breed = document.querySelector(".breeds")
var resource = document.querySelector(".resource")
var breedMenu = document.querySelector(".breed-menu")
var resourceMenu = document.querySelector(".resource-menu")
var list = document.querySelector("datalist")
var passwordIcon = document.querySelectorAll("#password-icon")
var password = document.querySelectorAll("#password")
var searchAnimal = document.querySelectorAll("#find-animal .search .forDropDown .boxdrop")
var likeHeart = document.querySelectorAll(".like-button")
var stars = document.querySelectorAll(".star")
var click = true;
// var heroCards = document.querySelector(".hero-cards")
// let x= heroCards.scrollHeight
// console.log(x)
function openBreedMenu() {
    if (breedMenu.style.display == "block") {
        breedMenu.style.display = "none"
        breed.querySelector('i').classList.remove("fa-angle-up")
        breed.querySelector('i').classList.add("fa-angle-down")

    }
    else {
        breedMenu.style.display = "block"
        if (resourceMenu.style.display == "block") {
            resource.querySelector('i').classList.remove("fa-angle-up")
            resource.querySelector('i').classList.add("fa-angle-down")
            resourceMenu.style.display = "none"
        }
        breed.querySelector('i').classList.remove("fa-angle-down")
        breed.querySelector('i').classList.add("fa-angle-up")

    }
}


function openResourceMenu() {
    if (resourceMenu.style.display == "block") {
        resourceMenu.style.display = "none"
        resource.querySelector('i').classList.remove("fa-angle-up")
        resource.querySelector('i').classList.add("fa-angle-down")
    }
    else {
        resourceMenu.style.display = "block"
        if (breedMenu.style.display == "block") {
            breed.querySelector('i').classList.remove("fa-angle-up")
            breed.querySelector('i').classList.add("fa-angle-down")
            breedMenu.style.display = "none"
        }
        resource.querySelector('i').classList.remove("fa-angle-down")
        resource.querySelector('i').classList.add("fa-angle-up")
    }
}



passwordIcon.forEach(element => {
    element.addEventListener('click', () => {
        element.querySelector("i").classList.toggle("fa-eye");
     
        if (element.previousSibling.type === "password") {
            element.previousSibling.type = "text";
        } else {
            element.previousSibling.type = "password";
        }
        element.querySelector("i").classList.toggle("fa-eye-slash");

    })

});



searchAnimal.forEach(element => {
    element.addEventListener('click', () => {
        var count = 0;
        element.nextElementSibling.classList.toggle("d-none");
        element.nextElementSibling.classList.toggle("d-block");
        
        element.classList.toggle("position-absolute");
     // var dropdown = document.querySelectorAll("#find-animal .search .forDropDown").classList.toggle("position-absolute");
        var li = element.nextElementSibling.querySelectorAll("li");
        li.forEach(elementLi => {
            elementLi.addEventListener('click', () => {
                elementLi.querySelector('i').classList.toggle("fa-plus")
                elementLi.querySelector('i').classList.toggle("fa-minus")
                if (elementLi.querySelector("i").classList.contains("fa-minus")) {
                    count = count + 1;
                }
                if (elementLi.querySelector("i").classList.contains("fa-plus")) {
                    count = count - 1;
                }
                //count = element.nextElementSibling.querySelectorAll("li .fa-minus");
                element.value = count + " " + element.placeholder + " seçilib";
            })

        });



    })

});


// likeHeart.forEach(element => {
//     element.addEventListener('click', () => {
//         element.querySelector('i').classList.toggle('fa-solid')
//         element.querySelector('i').classList.toggle('fa-regular')
//     })
// })



for (let index = 0; index < stars.length; index++) {
    // const element = array[index];
    stars[index].addEventListener('click', (e) => {
        for (let remin = 0; remin < stars.length; remin++) {

            if (stars[remin].querySelector('i').classList.contains("fa-solid") && !stars[remin].querySelector('i').classList.contains("fa-regular")) {
                stars[remin].querySelector('i').classList.remove("fa-solid")
                stars[remin].querySelector('i').classList.add("fa-regular")
            }
        }

        if (click) {
            for (let i = 0; i <= index; i++) {
                stars[i].querySelector('i').classList.add("fa-solid")
                stars[i].querySelector('i').classList.remove("fa-regular")
                //    Swal.fire({
                //     title: 'Əminsinizmi?',
                //     text: "Rəyi sonradan dəyişdirə bilməzsiniz!",
                //     icon: 'warning',
                //     showCancelButton: true,
                //     backdrop: `rgba(0,0,123,0.4)`,
                //     confirmButtonColor: '#6504b5',
                //     cancelButtonColor: '#d33',
                //     confirmButtonText: 'Rəy ver!',
                //     cancelButtonText: 'Ləğv et!'
                //   }).then((result) => {
                //     if (result.isConfirmed) {
                //         click=false;
                //         e.preventDefault();
                //       Swal.fire(
                //         'Dəyərləndirdiz!',
                //         'Dəyərləndirdiyinizə görə çox sağolun.',
                //         'Uğurlu'
                //       )
                //     }
                //   })
            }
        }
        else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Siz artıq bu hekayəni dəyərləndirmisiniz ',
            })
        }



    })
}

breed.onclick = function () { openBreedMenu() };
resource.onclick = function () { openResourceMenu() }


