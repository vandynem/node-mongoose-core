const extractObject = require("../../utilities/").extractObject;
const pagin = require("../../utilities/pagination");
const validateOutputs = require("./validateOutput");
const validation = require("./validateInput");
const logger = require("../../utilities/logger");
const repository = require("./repository");
const jwt = require( "jsonwebtoken" );
const config = require( "../../config" );
const mongoose = require( "mongoose" );
const User = mongoose.model("User");

exports.register = async (req, res) => {
  try {
    const body = await validation.authSchema(req.body);
    const user = await repository.findByEmail(body); 
    if (user) {
      res.noResponse("email already exists");
      return;
    }

    const instance = await repository.saveUser(body);
    await validateOutputs.userResponse(instance, (response) => {
      res.success(response);
    });
  } catch (err) {
    logger.error(err)
    res.serverError(err);
  }
};

exports.login = async (req, res) => {
  try {
    const body = await validation.loginSchema(req.body);
    if (!body.password || !body.email) {
      res.preconditionFailed("Credentials required");
      return;
    }
    const user = await repository.findByEmail(body);
    if (!user || !user.checkPass(body.password)) {
      res.notFound()
      return;
    }

    const token = jwt.sign(user.toObject(), config.secret, { expiresIn: 1440 });
    logger.info("Login token", token);
    await validateOutputs.loginResponse(user._id, token, (response) => {
      res.success(response);
    });
  } catch (err) {
    logger.error(err)
    res.serverError(err);
  }
};

exports.getAll = async (req, res) => {
  try {
    const features = new pagin(User.find(), req.query).sort().paginate();
    
    const instance = await features.query;
    await validateOutputs.getAllResponse(instance, (payload) => {
      return res.status(200).json({
        success: true,
        payload,
        limit: instance.length,
      });
    });
  } catch (err) {
    logger.error(err);
    res.serverError(err);
  }
};
exports.getOwnerData = async (req, res) => {
  try {
    const body = await validation.findByIdValidate(req.body);
    if(body._id === req.user._id){
      const user = await repository.findUser(body._id);
      await validateOutputs.userDetailResponse(user, (response) => {
        res.success(response);
      });
    }
    res.unauthorized();
  } catch (err) {
    logger.error(err);
    res.serverError(err);
  }
};