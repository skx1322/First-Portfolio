function FiboGene(n){
    if (n === 0){
        var output = [0];
    }
    else if (n === 1){
        var output = [0, 1];
    }
    else{
        var output = [0, 1];
        for (var count = 2; count<n;count++){
        var Sequence = output[output.length-2] + output[output.length-1];
        output.push(Sequence);
        }
    }
    return output;

}
console.log(FiboGene(20));
document.getElementById("Paragraph").textContent = `${FiboGene(20)}`;

