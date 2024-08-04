((express, server, bodyParser, fs)=>{
    server.use(bodyParser.urlencoded({extended: true}));
    //to use express as middleware.
    // server.use(express.static)

    server.get("/", (req,resp)=>{
        fs.readFile("./templates/home.html", "utf8", (err, results)=>{
            resp.send(results); //if all ok send the results as response.
            // resp.send(results.toString())
        })
    })

   server.listen(8000, (err)=>{
    console.log(err || "server is ready at port number 8000......" )
   }) 


})(
    require("express"),
    require("express")(), //this is creating server
    require("body-parser"),
    require("fs")
)