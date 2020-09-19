var input = document.querySelector('.inputt')
var submit = document.querySelector('.submitt')
var player =[]
var resultPlayer = []
var random = Math.floor(Math.random() * 10) + 1;
console.log(random)
submit.addEventListener('click', function() {
    if(input.value > 10 || input.value < 1 ) {
        alert('Nhập lại')
    }
    
    if(player.length < 3) {
        player.push(input.value)
    } else {
        alert('Đã hết lượt dự đoán')
    }
   
    if(player.length == 3) {
        player.forEach(function(item) {
            if(item == random) {
                resultPlayer.push(item)
            } 
            
        })

        if(resultPlayer.length > 0) {
            alert('Bạn đã trúng thưởng')
        } else {
            alert('Bạn đã chọn sai! Kết quả đúng là ' + random)
        }
    }
   input.value = ""
    
    console.log(player)
})

