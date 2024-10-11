const ejs = require("ejs");
const dotenv = require("dotenv");
const Prospect = require("../models/Prospect");
const sendMail = require("../helpers/sendmail");

dotenv.config();

const sendEligibilityEmail = async () => {
  // Status 0 means registration done but didn't received mail yet.
  const prospects = await Prospect.find({ status: 0 });

  if (prospects.length > 0) {
    // Looping to send mail each of them
    for (let prospect of prospects) {
      // condition when eligibility doesn't match
      if (prospect.age < 18 || prospect.weight < 50) {
        ejs.renderFile(
          "templates/BloodDonationEligibility.ejs",
          { name: prospect.name, age: prospect.age, weight: prospect.weight },
          async (err, data) => {
            let messageoption = {
              from: process.env.EMAIL,
              to: prospect.email,
              subject: "Blood Donation Eligibility.",
              html: data,
            };

            try {
              await sendMail(messageoption);
              await Prospect.findByIdAndDelete(prospect._id);
            } catch (error) {
              console.log(error);
            }
          }
        );
      }
    }
  }
};

module.exports = { sendEligibilityEmail };
