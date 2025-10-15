
//car
let carArr = [];

class Car {
   

    constructor(modelo, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image){
       this.modelo = modelo;
       this.preco = preco;
       this.alturaCacamba = alturaCacamba;
       this.alturaVeiculo = alturaVeiculo;
       this.alturaSolo = alturaSolo;
       this.capacidadeCarga = capacidadeCarga;
       this.motor = motor;
       this.potencia = potencia;
       this.volumeCacamba = volumeCacamba;
       this.roda = roda;
       this.image = image;
    }
} 

// search on array if exist carClass returning 1 if not return -1
function GetCarArrPosition(arr, carClass) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i].nome  === carClass.nome)
            return i;
    }
    return -1;
}

function SetCarToCompare(el, carClass) {
         
        if(el.checked && carArr.length >= 2){
                alert("Selecione apenas 2 carros");
                el.checked = false;
                return;
            
        } 
        if(el.checked) {
            //Inserindo o obejto carro no Array
          carArr.push(carClass);
        } else{
            const index = GetCarArrPosition(carArr, carClass);
            //caso desmarcado
            if(index !== -1){
            carArr.splice(index, 1);
        }
        }
    
}

function ShowCompare() {
    if(carArr.length < 2) {
        alert("Precisa marcar 2 carros para apresentar a comparação");
        return;
    }

    UpdateCompareTable();
    document.getElementById("compare").style.display = "block";
}

function HideCompare(){
    document.getElementById("compare").style.display = "none"; 
}

function UpdateCompareTable() {
    // exibir os dados da comparacao da tabela
    const compare_0 = carArr[0];
    const compare_1 = carArr[1];

    document.getElementById("compare_image_0").innerHTML = `<img src="img/${compare_0.image}" alt ="">`;
    document.getElementById("compare_image_1").innerHTML = `<img src="img/${compare_1.image}" alt ="">`;

    document.getElementById("compare_modelo_0").innerHTML = compare_0.modelo;
    document.getElementById("compare_modelo_1").innerHTML = compare_1.modelo;

}
