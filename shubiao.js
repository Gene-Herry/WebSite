var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d'),
    WIDTH = canvas.width = document.documentElement.clientWidth,
    HEIGHT = canvas.height = document.documentElement.clientHeight,
    para = {
        num: 100,
        color: false, //  颜色  如果是false 则是随机渐变颜色
        radius: 0.9,
        o: 0.09, //  判断圆消失的条件，数值越大，消失的越快
    },
    color,
    circleColor,
    round_arr = [];

window.onmousemove = function(event) {
    X = event.clientX
    Y = event.clientY

    round_arr.push({
        X: X,
        Y: Y,
        radius: para.radius,
        o: 1
    })
}

// 判断参数中是否设置color，设置则使用该color，否则为随机
if (para.color) {
    circleColor = para.color
} else {
    color = Math.random() * 360
}

function animate() {
    if (!para.color) {
        color += .1
        circleColor = 'hsl(' + color + ',100%,80%)'
    }

    ctx.clearRect(0, 0, WIDTH, HEIGHT) // 清除屏幕

    for (var i = 0; i < round_arr.length; i++) {
        ctx.fillStyle = circleColor
        ctx.beginPath() // 开始路径
        ctx.arc(round_arr[i].X, round_arr[i].Y, round_arr[i].radius, 0, Math.PI * 2) // 画圆
        ctx.closePath() // 结束路径
        ctx.fill()
        round_arr[i].radius += para.radius // 增大圆
        round_arr[i].o -= para.o //  消失时间变快

        if (round_arr[i].o <= 0) {
            round_arr.splice(i, 1);
            i--;
        }
    }

    window.requestAnimationFrame(animate)
}

animate()