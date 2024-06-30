from flask import Flask, render_template, request, jsonify, redirect, url_for
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
stores=[
    {
        'name':'cool',
        'items':[
            {
                'name':'very cool',
                'price':999
            }
        ]
    }
]


user = [
    {'aaa':'111',
    'bbb':'222',
    'ccc':'333', 
    }
]

@app.route('/')
def home():
    return render_template('login.html')

@app.route('/store')
def get_stores():
    return jsonify({'stores':stores})

@app.route('/store/<string:name>',methods=['GET'])
def get_store(name):
    for i in stores:
        if i['name'] == name:
            return jsonify(i)
    return jsonify({'message':'store not found'})

@app.route('/logincheck', methods=['POST'])
def logincheck():
    try:
        data = request.get_json()
        if data is None:
            return jsonify({"error": "Invalid JSON data"}), 400
        print(data)
        return jsonify(data)
    except Exception as e:
        app.logger.error(f"Error during login check: {e}")
        return jsonify({"error": str(e)}), 500
    

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data['username']
    password = data['password']
    # 在這裡處理登入邏輯，例如檢查使用者名和密碼
    if username == 'admin' and password == '123456':
        return jsonify(success=True)
    else:
        return jsonify(success=False)

@app.route('/success')
def success():
    return '登入成功'

if __name__ == '__main__':
    app.run(debug=True)
