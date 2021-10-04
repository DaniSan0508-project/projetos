const { Router} = require('express');

const routes = new Router();

routes.get('/types',(req,res)=>{
    return res.json([

        {
      
          key: 'firstName',
      
          label: 'First Name',
      
          type: 'text',
      
          required: true
      
        },
      
        {
      
          key: 'phoneNumber',
      
          label: 'Phone Number',
      
          type: 'tel',
      
          required: true
      
        },
      
        {
      
          key: 'birthDate',
      
          label: 'Birth Date',
      
          type: 'date',
      
          required: false
      
        },
      
        {
      
          key: 'sendButton',
      
          label: 'Submit Form',
      
          type: 'submit'
      
        }
      
      ])
})

module.exports = routes;