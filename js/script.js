$(document).ready(function () {
    RequisiPlanilha();
});
var dados = [];
var resultado = [];

function RequisiPlanilha() {

    $.ajax({
        url: 'https://spreadsheets.google.com/feeds/cells/1NWnjBbYPxOBQhTsOkblBRmZFJQWqIc0ioz7JjVfo-bY/1/public/full?alt=json',
        dataType: 'json',
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(jqXHR, textStatus, errorThrown);
        },
        success: function (result) {
            dados.push(result['feed']['entry']);
            dados.forEach(obj => {
                for (key in obj) {

                    if (obj[key]['gs$cell']['col'] == 1 && obj[key]['gs$cell']['row'] == 2) {
                        $('.nome1').prepend(obj[key]['gs$cell']['$t']);
                        console.log('foi 1');
                    }
                    if (obj[key]['gs$cell']['col'] == 1 && obj[key]['gs$cell']['row'] == 3) {
                        $('.nome2').prepend(obj[key]['gs$cell']['$t']);
                        console.log('foi 2');
                    }

                    if (obj[key]['gs$cell']['col'] == 2 && obj[key]['gs$cell']['row'] == 2) {
                        $('.votos1').prepend(obj[key]['gs$cell']['$t']);
                        console.log('foi 3');
                    }
                    if (obj[key]['gs$cell']['col'] == 2 && obj[key]['gs$cell']['row'] == 3) {
                        $('.votos2').prepend(obj[key]['gs$cell']['$t']);
                        console.log('foi 4');
                    }
                    if (obj[key]['gs$cell']['col'] == 3 && obj[key]['gs$cell']['row'] == 2) {
                        $('.candidato1').prepend('<img class="img1" src="' + obj[key]['gs$cell']['$t'] + '">');
                    }
                    if (obj[key]['gs$cell']['col'] == 3 && obj[key]['gs$cell']['row'] == 3) {
                        $('.candidato2').prepend('<img class="img2" src="' + obj[key]['gs$cell']['$t'] + '">');
                    }
                    if (obj[key]['gs$cell']['col'] == 4 && obj[key]['gs$cell']['row'] == 2) {
                        $('.partido1').prepend(obj[key]['gs$cell']['$t']);
                    }
                    if (obj[key]['gs$cell']['col'] == 4 && obj[key]['gs$cell']['row'] == 3) {
                        $('.partido2').prepend(obj[key]['gs$cell']['$t']);
                    }
                    if (obj[key]['gs$cell']['col'] == 6 && obj[key]['gs$cell']['row'] == 2) {
                        $('.porc-urnas').prepend(obj[key]['gs$cell']['$t']);
                    }
                }

            });
        }
    });
}