const express = require("express");
const Joi = require("joi");

const UserValidate = async (req, res, next) => {
  const Userschema = Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),

    password: Joi.string().alphanum().min(8).max(32).required(),
  });

  try {
    await Userschema.validateAsync({ username, password });
    return res.send("UserValidated");
  } catch (err) {
    console.log("Error");
  }
  next();
};

module.exports = {
  UserValidate,
};
