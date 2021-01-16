var numPlayer = 1;
function addPlayer(){
    var html = "";

    numPlayer++;
    html += '  <li class="player">';
    html += '      <label for="">';
    html += '          Name:';
    html += '      </label>';
    html += '      <input type="text">';
    html += '      <label for="">';
    html += '          Amount:';
    html += '      </label>';
    html += '      <input onchange="calculate('+numPlayer+')" type="number"  id="amount'+numPlayer+'">';
    html += '      <label for="">Bet:</label>';
    html += '      <select onchange="calculate('+numPlayer+')" name="" id="bet'+numPlayer+'">';
    html += '          <option value="2">Yellow</option>';
    html += '          <option value="3">Blue</option>';
    html += '          <option value="6">Purple</option>';
    html += '          <option value="25">Red</option>';
    html += '      </select>';
    html += '      <label for="">Win Amount :<span id="'+numPlayer+'">0</span></label>';
    html += '  </li>';
    
    $(".playerContainer").append(html);
}

function clearPlayer(){
    var html = "";

    numPlayer=1;
    html += '  <li class="player">';
    html += '      <label for="">';
    html += '          Name:';
    html += '      </label>';
    html += '      <input type="text">';
    html += '      <label for="">';
    html += '          Amount:';
    html += '      </label>';
    html += '      <input onchange="calculate('+numPlayer+')" type="number"  id="amount'+numPlayer+'">';
    html += '      <label for="">Bet:</label>';
    html += '      <select onchange="calculate('+numPlayer+')" name="" id="bet'+numPlayer+'">';
    html += '          <option value="2">Yellow</option>';
    html += '          <option value="3">Blue</option>';
    html += '          <option value="6">Purple</option>';
    html += '          <option value="25">Red</option>';
    html += '      </select>';
    html += '      <label for="">Win Amount :<span id="'+numPlayer+'">0</span></label>';
    html += '  </li>';
    
    $(".playerContainer").empty();
    $(".playerContainer").append(html);
}

function calculate(x){
    var amount = $("#amount"+x).val();
    var bet = $("#bet"+x).val();
    var win = amount*bet;
    console.log(amount*bet);
    $("#"+x).empty();
    $("#"+x).append(win);
}