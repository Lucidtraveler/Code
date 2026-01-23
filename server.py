from http.server import HTTPServer, SimpleHTTPRequestHandler

class MyServer(SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path == '/':
            self.send_response(302)   # Redirect to /home
            self.send_header("Location", "/pages/Index.html")
            self.end_headers()
        else:
            return super().do_GET()

server = HTTPServer(("127.0.0.1", 8000), MyServer)
print("Server running at http://127.0.0.1:8000")
server.serve_forever()
