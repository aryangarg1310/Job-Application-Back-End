const { application } = require("express");
const ApplicantModel = require("./ApplicantModel");

const addNewEntry = async (req, res) => {
  try {
    let response = {
      status: "error",
      data: null,
      message: "Some Error Occured",
    };

    let applicant = await ApplicantModel.findOne({
      contactInfo: req.body.contactInfo,
    });

    if (await applicant) {
      response.message = "An applicant with same contact info already exists";
      res.status(400).json(response);
    } else {
      applicant = new ApplicantModel({
        name: req.body.name,
        contactInfo: req.body.contactInfo,
        qualifications: req.body.qualifications,
        coverLetter: req.body.coverLetter,
        availability: req.body.availability,
        assessment: req.body.assessment,
      });
      applicant.validate((err) => {
        if (err) {
          response.message = err.message;
          res.status(400).json(response);
        } else {
          console.log("pass validate");
          applicant.save().then((data) => {
            console.log(data);
            response.status = "success";
            response.message =
              "Your application has been successfully received";
            response.data = data;
            res.status(200).json(response);
          });
        }
      });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
};

module.exports = addNewEntry;
