const NotAvailableSession = require('../models/notAvailableSession.model');

const createNotAvailableSession = (req, res) => {

    const notavailablesession = new NotAvailableSession(req.body);

    notavailablesession.save().then(result => {
        res.status(200).json({
            success: true,
            data: result
        });
    }).catch(err => {
        res.status(500).json({
            success: false,
            message: err.message
        });
    });
};

const ViewNotAvailableSession = (req, res) => {
    NotAvailableSession.find({}).then(result => {
        res.status(200).json({
            success: true,
            data: result
        });
    }).catch(err => {
        res.status(501).json({
            success: false,
            message: err.message
        });
    });
};

module.exports = {
    createNotAvailableSession,
    ViewNotAvailableSession
}