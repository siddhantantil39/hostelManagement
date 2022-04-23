from flask import Flask,request,jsonify
from flask_cors import CORS
import recc

app = Flask(__name__)
CORS(app)

@app.route('/hostel', methods=['GET'])
def recommend():
    res = recc.results(request.args.get('USN'))
    return jsonify(res)

if __name__=='__main__':
    app.run(port = 5000, debug = True)