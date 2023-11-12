const Announcement = require('../models/announcement');


const getAllAnnouncements = (req, res) => {
  Announcement.find()
    .then((announcements) => {
      res.json(announcements);
    })
    .catch((error) => {
      res.status(500).json({ error: 'Internal server error' });
    });
};

const getAnnouncementById = (req, res) => {
  const id = req.params.id;
  Announcement.findById(id)
    .then((announcement) => {
      if (announcement) {
        res.json(announcement);
      } else {
        res.status(404).json({ error: 'Announcement not found' });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: 'Internal server error' });
    });
};

const createAnnouncement = (req, res) => {
  const { name , subject , title } = req.body;
  const announcement = new Announcement({ name , subject , title });
  announcement
    .save()
    .then((newAnnouncement) => {
      res.status(201).json(newAnnouncement);
    })
    .catch((error) => {
      res.status(500).json({ error: 'Internal server error' });
    });
};

const updateAnnouncement = (req, res) => {
  const id = req.params.id;
  const { name , subject , title } = req.body;
  Announcement.findByIdAndUpdate(
    id,
    { name , subject , title },
    { new: true }
  )
    .then((updatedAnnouncement) => {
      if (updatedAnnouncement) {
        res.json(updatedAnnouncement);
      } else {
        res.status(404).json({ error: 'Announcement not found' });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: 'Internal server error' });
    });
};

const deleteAnnouncement = (req, res) => {
  const id = req.params.id;
  Announcement.findByIdAndDelete(id)
    .then((deletedAnnouncement) => {
      if (deletedAnnouncement) {
        res.json(deletedAnnouncement);
      } else {
        res.status(404).json({ error: 'Announcement not found' });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: 'Internal server error' });
    });
};

module.exports = {
  getAllAnnouncements,
  getAnnouncementById,
  createAnnouncement,
  updateAnnouncement,
  deleteAnnouncement,
};
