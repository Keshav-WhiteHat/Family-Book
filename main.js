var images=[
"https://www.seekpng.com/png/detail/215-2159654_daddy-clipart-clip-art-pic-of-father.png",
"https://lh3.googleusercontent.com/proxy/rWxq2bpgmjT8JQXe6SBlUNhcpTJgWZ7-8R_ia1KnwssW3Yopkb6tamOyNDQnvs5dvdf2JSuqC2jo9aGICJgVVacm",
"https://media.istockphoto.com/vectors/two-boys-smile-and-hug-vector-id625457882?k=6&m=625457882&s=612x612&w=0&h=OFxWm_XMDYZgeKbPcVH4XfbQmWZofu9GIiEMEIsFykU=",
"https://image.shutterstock.com/image-vector/cute-kid-teen-boy-show-260nw-1509139481.jpg"
];
var names=[
    "Vijayaraghavan",
    "Rajilakshmi",
    "Madhav",
    "Keshav"
];
var i=0;
function update(){
    i++;
    var number=3
    if(i>number){
    i=0;
    }
    var newimage=images[i];
    var newname=names[i];
    document.getElementById("family").src=newimage;
    document.getElementById("name").innerHTML=newname;

}