const mongoose = require('mongoose');

const announcementSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
}, { versionKey: false });

const Announcement = mongoose.model('Announcement', announcementSchema);

module.exports = Announcement;
