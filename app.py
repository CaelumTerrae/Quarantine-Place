from flask import Flask, render_template, request
app = Flask(__name__)

# ensure responses aren't cached
@app.after_request
def after_request(response):
    response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    response.headers["Expires"] = 0
    response.headers["Pragma"] = "no-cache"
    return response

# homepage route
@app.route('/')
def hello():
    return render_template("index.html")

# run
if __name__ == '__main__':
    app.run()
