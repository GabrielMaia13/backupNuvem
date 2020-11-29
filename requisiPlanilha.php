<?php
function Planilha(){
    $url = 'https://spreadsheets.google.com/feeds/cells/1NWnjBbYPxOBQhTsOkblBRmZFJQWqIc0ioz7JjVfo-bY/1/public/full?alt=json';
    $file = file_get_contents($url);
    $result = json_decode($file);
    $apura = $result->{'feed'}->{'entry'};

    $apuraStrings = Array();

    foreach ($apura as $apu) {
        array_push($apuraStrings, $apu->{'gs$cell'}->{'$t'});
    }
}
?>