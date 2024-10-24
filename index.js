const express=require('express')
const app=express()
app.use(express.json())
let joueurs=[
    {
        id:1,
        nom:'Hakim Zayech',
        position:'Millieu'
    },
    {
        id:2,
        nom:'Yassine Bono',
        position:'Gardien'
    }
]
app.get('/joueurs',(req,res)=>{

    res.json(joueurs)
})
app.get('/joueurs/:id',(req,res)=>{
    let code=Number(req.params.id)
    const player=joueurs.filter(e=>e.id==code)
    player.length>0 ?  res.json(player) : res.json(" le joueurs n'existe pas")
})
app.post('/joueurs/add',(req,res)=>{
    
    const player=joueurs.find(e=>e.id==req.body.id)
    if(!player)
    {
        joueurs.push(req.body)
        res.json("bien ajouter")
    }
    else
    res.json("joueur deja existe")

})
app.put('/joueurs/edit/:id',(req,res)=>{
    const player=joueurs.find(e=>e.id==Number(req.params.id))
    if(!player)
        res.json("Ce joueurs n'existe pas")
    else{
        player.nom=req.body.nom
        player.position=req.body.position
      
        res.json('bien modifier')
    }
})
app.delete('/joueurs/del/:id',(req,res)=>{
    joueurs=joueurs.filter(e=>e.id!=Number(req.params.id))
    res.json('bien supprimer')
})
app.listen(3000,console.log('seveur est lance'))