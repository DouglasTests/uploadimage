
/*AQUI RENOMBRAR "ID DE IMPUT" y "ID DE DIV" con el nombre correspondiente y listo*/
const id_del_imput = "image_input";
const id_del_div = "display_image";

const id_del_imput2 = "image_input2";
const id_del_div2 = "display_image2";

/*       <script src="loadimage.js"></script>      
ASEGURATE QUE EL DIV ESTE CON ESTOS PARAMETROS:

    background-repeat: no-repeat;
    background-size: contain;
    background-position: 50%;

*/






/*NO TOCAR ESTO*/
var asterisco = "#"
const image_input = document.querySelector(asterisco+id_del_imput);
var uploaded_image = "";
image_input.addEventListener("change", function(){
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        uploaded_image = reader.result;
        document.querySelector(asterisco+id_del_div).style.backgroundImage = `url(${uploaded_image})`;
    });
    reader.readAsDataURL(this.files[0]);
})

const image_input2 = document.querySelector(asterisco+id_del_imput2);
var uploaded_image = "";
image_input2.addEventListener("change", function(){
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        uploaded_image = reader.result;
        document.querySelector(asterisco+id_del_div2).style.backgroundImage = `url(${uploaded_image})`;
    });
    reader.readAsDataURL(this.files[0]);
})

