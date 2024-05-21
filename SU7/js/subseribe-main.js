document.addEventListener('DOMContentLoaded', function() {
    const getCodeBtn = document.getElementById('get-code-btn');
    let timer;
    let countdown = 60;

    getCodeBtn.addEventListener('click', function() {
        if (timer) return; // 防止重复点击

        getCodeBtn.disabled = true;
        getCodeBtn.textContent = `${countdown}s`;

        timer = setInterval(function() {
            countdown--;
            getCodeBtn.textContent = `${countdown}s`;

            if (countdown <= 0) {
                clearInterval(timer);
                getCodeBtn.disabled = false;
                getCodeBtn.textContent = '重新获取验证码';
                timer = null;
                countdown = 60;
            }
        }, 1000);
    });
});