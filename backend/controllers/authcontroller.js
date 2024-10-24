import express from "express"
import { createDirectus,rest,readItems } from "@directus/sdk"
import bcrypt from "bcryptjs"
import argon2 from "argon2"
const client = createDirectus('http://13.202.242.185:8055').with(rest());

// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const db = require('./knexfile');

export const adminLogin = async(req,res)=>{
    try{
    const { email, password } = req.body;
    
    // Fetch the user from the Directus 'users' table
    const user = await client.request(readItems('users', { filter: { email: { _eq: email } } }));
    
    if (!user || user.length === 0) {
        return res.status(404).json({ message: 'User not found' });
    }
    if(user[0].role!=="is_admin") return res.status(404).json({ message: 'User is not admin' });

    const hashedPassword=user[0].password;
    const isValidPassword = await argon2.verify(hashedPassword, password);
    if (!isValidPassword) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }
    
    // const token = jwt.sign({ userId: user[0].id, role: user[0].role }, 'your-secret-key', {
    //     expiresIn: '1h',
    // });

    //return res.json({ token });
    // const instructors = await client.request(readItems('Instructor', {
    //     fields: ['experience', 'location', 'user_id.id', 'user_id.email', 'user_id.role'],
       
    // }));
    const instructors = await client.request(readItems('Instructor', {
        fields: [
            'id',
            'Availibility',
            'is_ban',
            'Location',
            'Experience',               // Fetch all fields from the instructor table (experience, location, etc.)   
            'user_id.email',    // Fetch the email from the user table
            'user_id.role',     // Fetch the role from the user table
            'user_id.username',
            'user_id.firstname', 
            'user_id.lastname',
            'user_id.phone_number',   // Fetch the name from the user table
            'user_id.gender',      // Fetch the name from the user table
            'user_id.email',
            'user_id.role',
                  // Fetch the name from the user table
        ]
    }));
    //return res.json(user)
    return res.json({instructors})
}
catch(error)
{
    console.log("in catch block",error.message)
}
}

export const getinstructorById = async(req,res)=>{
    try {
        const { id } = req.params;  // Assuming the instructor's user_id is passed as a parameter in the API URL


        const instructor = await client.request(readItems('Instructor', {
            filter: { id: { _eq: id } },  // Filter by the primary id (auto-incremented)
            fields: [
                'id',
                'Availibility',
                'is_ban',
                'Location',
                'Experience',               // Fetch all fields from the instructor table (experience, location, etc.)   
                'user_id.email',    // Fetch the email from the user table
                'user_id.role',     // Fetch the role from the user table
                'user_id.username',
                'user_id.firstname', 
                'user_id.lastname',
                'user_id.phone_number',   // Fetch the name from the user table
                'user_id.gender',      // Fetch the name from the user table
                'user_id.email',
                'user_id.role'    // Fetch the associated name from the user table
            ]
        }));
    
        // Check if instructor data exists
        if (!instructor || instructor.length === 0) {
            return res.status(404).json({ message: 'Instructor not found' });
        }
    
        // Return the instructor details along with the user details
        return res.json(instructor[0]);
    
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ message: 'An error occurred' });
    }
    
}

export const getAllUsers = async(req,res) => {
    try {
        const result = await client.request(readItems('users'));
    
        // Return the list of users in the response
        return res.json(result);
      } catch (error) {
        console.error('Error fetching users:', error);
        return res.json({ message: 'Internal server error' });
      }
}