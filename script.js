        // 等待整個頁面加載完成
        window.onload = function() {
            // 獲取按鈕元素
            var button = document.getElementById("Started");

            // 添加點擊事件監聽器
            button.onclick = function() {
                // 轉跳到目標頁面
                window.location.href = "test.html";
            };
        };        // 等待整個頁面加載完成


                // 等待整個頁面加載完成
        window.onload = function() {
            // 獲取按鈕元素
            var button = document.getElementById("know");

            // 添加點擊事件監聽器
            button.onclick = function() {
                // 轉跳到目標頁面
                window.location.href = "know.html";
            };
        };        


        document.addEventListener('DOMContentLoaded', function() {
            const faqQuestions = document.querySelectorAll('.faq-question');
            
            faqQuestions.forEach(question => {
                question.addEventListener('click', function() {
                    const answer = this.nextElementSibling;
                    if (answer.style.display === 'block') {
                        answer.style.display = 'none';
                    } else {
                        answer.style.display = 'block';
                    }
                });
            });
        });
        

        function login() {
            const username = document.getElementById('rounded').value;
            const password = document.getElementById('password').value;
            console.log(username);
            console.log(password);
            fetch('http://127.0.0.1:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username: username, password: password }),
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert('登入成功');
                    window.location.href = '/success';
                } else {
                    alert('登入失敗');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        }