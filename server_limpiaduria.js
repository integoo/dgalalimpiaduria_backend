const express = require('express')
const app = express()
const port = 4100
const cors = require('cors')

const arreglo = [
		{id:"1",name:"JESUS EZEQUIEL",lastname:"UGALDE LOPEZ",tel:"6645990240"},
		{id:"2",name:"JOSE ANGEL",lastname:"UGALDE LOPEZ",tel:"6641111111"},
		{id:"3",name:"JUAN FRANCISCO",lastname:"UGALDE LOPEZ",tel:"6642222222"},
		{id:"4",name:"FATIMA VERONICA",lastname:"GASTELUM",tel:"61955555555"},
		{id:"5",name:"ALEJANDRO",lastname:"GASTELUM",tel:"61955555555"}
		]
app.use(cors())

app.get('/:cliente', (req,res)=>{
	const cliente = req.params.cliente.toUpperCase()
	let arregloCliente = []
	if (cliente.length > 0){
		arregloCliente = arreglo.filter(item => (item.id + item.name + item.lastname + item.tel).includes(cliente))
	}
	res.json(arregloCliente)
})

app.listen(port, ()=>{ console.log(`Listening on PORT ${port}`) })
