
const mongoose = require('mongoose');
const Employee = require('../config/db');

module.exports = {
    create: (req,res) =>{
        let data = req.body;
         var employeeSchema = new Employee({
            _id: mongoose.Types.ObjectId(),
            Ident: data.Ident,
            Name: data.Name,
            Position: data.Position,
            Office: data.Office,
            StartDate: data.StartDate,
            Salary: data.Salary,
            State: data.State
        });

        employeeSchema.save().then(ans =>{
            res.json({request:'1'});
        }).catch(err =>{
            res.json({request:'0'});
        });
    },
    read: (req,res) =>{
        Employee.find().then(result =>{
            res.json(result);
        }).catch(err => {
            res.json({ans:'0'});
        });
    },
    update: (req,res) =>{
        let data = req.body;
        Employee.updateOne({ Ident: data.Ident },
            { 
                Name: data.Name,
                Position: data.Position,
                Office: data.Office,
                StartDate: data.StartDate,
                Salary: data.Salary,
                State: data.State 
            }).then(ans =>{
                (ans.nModified > 0)?res.json({request:'1'}):res.json({request:'0'})
            }).catch(err =>{
                res.json({request:'error'});
            });
            
    },
    delete: (req,res) =>{
        let data = req.body;
        Employee.deleteOne({ Ident: data.Ident }).then(re => {
            (re.n === 1)?res.json({request:'1'}):res.json({request:'0'})
        }).catch(err => {
            res.json({request:'error'});
        })

    }
}