const Employee = require('../models/employee');

const employeeCntrl = {};

employeeCntrl.getEmployees = async (req, res) => {
   const employees = await Employee.find();
   res.json(employees);
  
};

employeeCntrl.createEmployee = async (req, res) => {
    const employee = new Employee({
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    });
    await employee.save();
    console.log(employee);
    res.json({
        'status': 'Employee Saved'
    });
}

employeeCntrl.getEmployee = async (req, res) => {
    console.log(req.params);
    const employee = await Employee.findById(req.params.id);
    res.json(employee);
};

employeeCntrl.updateEmployee = async (req, res) => {
    const employee = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary

    };
   await Employee.findByIdAndUpdate(req.params.id, {$set: employee}, {new: true});
    res.json({status: 'Employee updated'});
  };

employeeCntrl.deleteEmployee = async (req, res) => {
    await Employee.findByIdAndDelete(req.params.id);
    res.json({status: 'Employee deleted'})
};

module.exports = employeeCntrl;
