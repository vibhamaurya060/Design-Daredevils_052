const jsonServer=require("json-server");
const cors=require("cors");
const server=jsonServer.create();
const router=jsonServer.router("db.json");
const middlewares=jsonServer.defaults();
const port=process.env.PORT || 3000;

const frontendUrl =[
  'http://localhost:5173', 
  'https://design-daredevils-052-3fnc.vercel.app'

] 


server.use(
  cors({
    origin: frontendUrl, 
    methods: ["GET", "POST", "PUT", "DELETE"], 
    allowedHeaders: ["Content-Type", "Authorization"], 
  })
);

server.use(middlewares);
server.use(router);
server.listen(port, ()=>{
    console.log(`server is running on Port ${port}`)
});
