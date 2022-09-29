import data_blog from "./data_blog.js";
console.log(data_blog);
let json = JSON.stringify(data_blog)
console.log(json);
console.log("abcssss");
function renderBlog(blogs){
    let listBlog= document.querySelector(".list-blog");
    
    // let htmls = blogs.forEach(blog => {
    //     return `
    //     <div class="img-blog"></div>
    //     <div class="test">
    //         <div class="title-blog">
    //             <h2>${blog.title}</h2>
    //         </div>
    //         <div class="content-short-blog-">${blog.content}</div>
    //     </div>
    // `
    // });
    let htmls = blogs.map( (blog)=> {
        return `
        <a href = "./detail_blog.html" style = "text-decoration: none;">
        <div class="blogs">
            <div class="img-blog"></div>
            <div class="test">
                <div class="title-blog">
                    <h2>${blog.title}</h2>
                </div>
                <div class="content-short-blog">${blog.content}</div>
            </div>
        </div>
        </a>
        `
    })
    console.log(htmls);
    listBlog.innerHTML = htmls.join('');
    let checkBlog = document.querySelectorAll(".blogs");
    console.log(checkBlog);
    checkBlog.forEach((btn=>{
        btn.addEventListener("click",function(e){
            console.log(btn.querySelector(".title-blog").querySelector("h2").innerHTML);
            sessionStorage.setItem("tenBlog",btn.querySelector(".title-blog").querySelector("h2").innerHTML)
            // document.querySelector(".ten-phim").innerHTML = `
            // <h1>LỊCH CHIẾU - ${sessionStorage.getItem("tenPhim")}</h1>
            //`
        })
    }))
    // test();

}
renderBlog(data_blog)