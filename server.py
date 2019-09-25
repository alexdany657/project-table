from http.server import BaseHTTPRequestHandler,HTTPServer
  
PORT_NUMBER = 5000

class myHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        if self.path == '/' or self.path == "":
            self.path = "/index.html"
        try:
            sendReply = False
            if self.path.endswith(".html"):
                mimetype = "text/html"
                sendReply = True
            if self.path.endswith(".json"):
                mimetype = "text/plain"
                sendReply = True
            if self.path.endswith(".js"):
                mimetype = "script/javascript"
                sendReply = True

            if sendReply:
                f = open("." + self.path)
                self.send_response(200)
                self.send_header("Context-type", mimetype)
                self.end_headers()
                if self.path == "table.json":
                    //
                self.wfile.write(bytes(f.read(), encoding="utf8"))
                f.close()
            return
        except IOError:
            self.send_error(404,"File Not Found: " + self.path)

    def do_POST(self):
        pass

try:
    server = HTTPServer(('', PORT_NUMBER), myHandler)
    server.serve_forever()

except KeyboardInterrupt:
    server.socket.close()
